"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { toast } from "react-hot-toast";

function CreatePost() {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    bookName: "",
    authour: "",
    post: "",
    tag: "",
  });
  console.log(post);

  const { data: session } = useSession();
  const router = useRouter();
  const createPrompt = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api/post/new`, {
        method: "POST",
        body: JSON.stringify({
          ...post,
          userId: session?.user.id,
        }),
      });
      if (res.ok) {
        toast.success("Post Created Successfully");
        router.push("/post");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}

export default CreatePost;
