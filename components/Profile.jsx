import PromptCard from "./PromptCard";
function Profile({ name, desc, data, handleEdit, handleDelete }) {
  return (
    <section className="w-full px-2 sm:px-12 pt-16 bg-slate-200 min-h-screen ">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map(post => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
}

export default Profile;
