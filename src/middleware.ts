import { NextRequest, NextResponse } from 'next/server';

const USER_NAME = process.env.BASIC_USER;
const PASSWORD = process.env.BASIC_PASSWORD;

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [ user, password ] = atob(auth).split(':');

    if (user === USER_NAME && password === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"'
    }
  });
}

export const config = {
  matcher: ['/admin(.*)'],
}
