// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pageFlags } from './app/flags';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  
  // Subdomain detection
  const subdomain = hostname.split('.')[0];
  const isLocalhost = hostname.includes('localhost');
  const isVercelPreview = hostname.includes('vercel.app');
  
  // Updated page flags logic for semantic routes
  const route = url.pathname.split('/')[1];
  if (route) {
    // Convert route to flag name (e.g., 'about' -> 'showAbout')
    const flagName = `show${route.charAt(0).toUpperCase() + route.slice(1)}` as keyof typeof pageFlags;
    
    // Check if this route has a flag
    if (pageFlags[flagName]) {
      const isPageEnabled = await pageFlags[flagName].decide(req);

      if (!isPageEnabled) {
        return NextResponse.redirect(new URL('/', url));
      }
    }
  }

  // Only handle subdomain routing on production environment
  if (!isLocalhost && !isVercelPreview) {
    // Handle subdomains
    switch (subdomain) {
      case 'anthony':
        return NextResponse.rewrite(
          new URL(`/personal${url.pathname}`, url)
        );
      case 'client1':
      case 'client2':
        return NextResponse.rewrite(
          new URL(`/clients/${subdomain}${url.pathname}`, url)
        );
      case 'projects':
        return NextResponse.rewrite(
          new URL(`/projects${url.pathname}`, url)
        );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};