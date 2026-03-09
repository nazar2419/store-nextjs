import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // console.log(auth().userId);
  const { userId } = await auth();

  // 🔒 Protect all non-public routes
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // 👑 Admin check
  if (isAdminRoute(req)) {
    if (userId !== process.env.ADMIN_USER_ID) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/", "/(api|trpc)(.*)"],
};
