import NextAuth from 'next-auth';
import { authConfig } from './auth.config';


const {auth} =  NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const message = ["ROUTE", req.nextUrl.pathname, "IS LOGGED IN", isLoggedIn]
  // console.log("ROUTE", req.nextUrl.pathname)
  // console.log("IS LOGGED IN", isLoggedIn)
  console.log("INFORMACIÓN --> ", message)
})
 
export const config = {
  /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
  */
  matcher: ['/((?!api|_next/static|_next/image|customers|.png).*)'],
};