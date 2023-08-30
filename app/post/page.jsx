import { authMiddleware } from "@authmiddleware";
import Feed from "@components/Feed";
import ProtectedPageWrapper from "@components/ProtectedPageWrapper";

export function Post() {
  return (
    <section className=" mt-0 py-2 sm:py-0 sm:mt-16 min-h-screen w-full flex-center flex-col px-12 bg-slate-200">
      <h1 className="head_text text-center">
        Unleash Literary Inspiration
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">One Blog at a Time</span>
      </h1>
      <p className="desc text-center">
        Immerse yourself in the world of literature read and share your thoughts
        on books that resonate.
      </p>
      <Feed />

      {/* feed */}
    </section>
  );
}

export default function WrappedMyProfile() {
  return (
    <ProtectedPageWrapper>
      <Post />
    </ProtectedPageWrapper>
  );
}
