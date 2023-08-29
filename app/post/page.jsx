import Feed from "@components/Feed";

function Post() {
  return (
    <section className=" mt-0 py-2 sm:py-0 sm:mt-16 min-h-screen w-full flex-center flex-col px-12 bg-slate-200">
      <h1 className="head_text text-center">
        Read & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Your Thoughts On Book
        </span>
      </h1>
      <p className="desc text-center">
        ChronoReads is an open source book journaling tool for modern world to
        discover, create and share thoughts on the book
      </p>
      <Feed />

      {/* feed */}
    </section>
  );
}

export default Post;
