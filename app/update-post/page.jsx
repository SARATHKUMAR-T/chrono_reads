"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

function EditPrompt() {
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const queryClient = useQueryClient();
  const [post, setPost] = useState({
    post: "",
    bookName: "",
    authour: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetals = async () => {
      const response = await fetch(`api/post/${postId}`);
      const data = await response.json();
      setPost({
        post: data.post,
        bookName: data.bookName,
        authour: data.authour,
        tag: data.tag,
      });
    };
    if (postId) getPromptDetals();
  }, [postId]);

  const router = useRouter();
  const updatePrompt = async e => {
    e.preventDefault();
    setSubmitting(true);

    if (!postId) return alert("Prompt ID not found");
    try {
      const res = await fetch(`/api/post/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...post,
        }),
      });
      if (res.ok) {
        toast.success("Post Updated Successfully");
        queryClient.invalidateQueries({ queryKey: ["posts"] });
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
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
}

export default EditPrompt;
