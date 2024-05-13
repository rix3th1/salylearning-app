import { User } from "next-auth";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/learning/:path*"],
};

export default withAuth(function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const user = req.nextauth.token?.user as User;
  const userRole = user.rol;
  const isStudent = userRole === "ESTUDIANTE";
  const isTeacher = userRole === "DOCENTE";

  if (pathname.startsWith("/learning/teachers")) {
    if (!isTeacher) {
      return NextResponse.redirect(new URL("/learning/students", req.url));
    }

    return NextResponse.next();
  } else if (pathname.startsWith("/learning/students")) {
    if (!isStudent) {
      return NextResponse.redirect(new URL("/learning/teachers", req.url));
    }

    return NextResponse.next();
  }
});
