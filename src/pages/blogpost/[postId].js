import React from "react";
import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { postId } = router.query;

  return <div>Post Id:- {postId}</div>;
}

export default Post;
