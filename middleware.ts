import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pageFlags } from './app/flags';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Check if the requested page is enabled
  const pageNumber = url.pathname.split('/')[1];
  if (pageNumber && pageNumber.startsWith('page')) {
    const flagName = `showPage${pageNumber.slice(4)}` as keyof typeof pageFlags;
    const isPageEnabled = await pageFlags[flagName].decide(req);

    if (!isPageEnabled) {
      return NextResponse.redirect(new URL('/', url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

