"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { authMiddleware } from "../../authmiddleware";

import Profile from "@components/Profile";
import ProtectedPageWrapper from "@components/ProtectedPageWrapper";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function MyProfile() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session]);

  const handleEdit = post => {
    router.push(`/update-post?id=${post._id}`);
  };

  const handleDelete = async post => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/post/${post._id.toString()}`, {
          method: "DELETE",
        });
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        const filteredPosts = posts.filter(p => p._id !== post._id);
        toast.success("Post Successfully Deleted");
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default function WrappedMyProfile() {
  return (
    <ProtectedPageWrapper>
      <MyProfile />
    </ProtectedPageWrapper>
  );
}
