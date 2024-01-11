import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
	publicRoutes: [
		"/",
		// "/profile",
		// "/orders",
		"/events/:id",
		// "/events/:id/update",
		"/api/webhook/clerk",
		"/api/webhook/stripe",
		"/api/uploadthing",
	],
	ignoredRoutes: [
		"/api/webhook/clerk",
		"/api/webhook/stripe",
		"/api/uploadthing",
	],
	// debug: true,
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
