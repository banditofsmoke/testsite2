import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pageFlags } from './app/flags';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  
  const subdomain = hostname.split('.')[0];
  const isLocalhost = hostname.includes('localhost');
  const isVercelPreview = hostname.includes('vercel.app');
  
  const route = url.pathname.split('/')[1];
  if (route) {
    const flagName = `show${route.charAt(0).toUpperCase() + route.slice(1)}` as keyof typeof pageFlags;
    
    if (pageFlags[flagName]) {
      const isPageEnabled = pageFlags[flagName].decide();

      if (!isPageEnabled) {
        return NextResponse.redirect(new URL('/', url));
      }
    }
  }

  if (!isLocalhost && !isVercelPreview) {
    switch (subdomain) {
      case 'anthony':
        return NextResponse.rewrite(new URL(`/personal${url.pathname}`, url));
      case 'client1':
      case 'client2':
        return NextResponse.rewrite(new URL(`/clients/${subdomain}${url.pathname}`, url));
      case 'projects':
        return NextResponse.rewrite(new URL(`/projects${url.pathname}`, url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};