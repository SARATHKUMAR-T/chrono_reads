import { authMiddleware } from "@authmiddleware"; // Make sure the path is correct

function ProtectedPageWrapper({ children }) {
  return children;
}

export async function getServerSideProps(context) {
  return authMiddleware(context);
}

export default ProtectedPageWrapper;
