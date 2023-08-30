import { getSession } from "next-auth/react";

export async function authMiddleware(context) {
  const session = await getSession(context);
  console.log(session, "from middleware");

  if (!session) {
    return {
      redirect: {
        destination: "/", // Redirect to the login page if not authenticated
        permanent: false,
      },
    };
  }

  return { props: {} }; // Allow access to the protected page
}
