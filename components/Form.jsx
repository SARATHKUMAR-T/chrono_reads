import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>{" "}
      </h1>
      <p className="desc text-left max-w-md">
        {" "}
        {type} and share amazing prompts with the world,and let your imagination
        run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Book Name{" "}
          </span>
          <input
            value={post.bookName}
            placeholder="i.e:Atomic Habits"
            required
            className="form_input"
            onChange={e => setPost({ ...post, bookName: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Authour{" "}
          </span>
          <input
            value={post.authour}
            placeholder="Jhone doe"
            required
            className="form_input"
            onChange={e => setPost({ ...post, authour: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal">(#novels, #selfdevelopment)</span>
          </span>
          <input
            value={post.tag}
            placeholder="#tag"
            required
            className="form_input"
            onChange={e => setPost({ ...post, tag: e.target.value })}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Blog
          </span>
          <textarea
            value={post.post}
            placeholder="Write Your Blog Here"
            required
            className="form_textarea"
            onChange={e => setPost({ ...post, post: e.target.value })}
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/post" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
