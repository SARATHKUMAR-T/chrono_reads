export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/post", "/profile", "/createpost", "/update-post"],
};
