import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePost from "../Posts/hooks/usePost";
import { Column, Grid } from "@/components/atomics/layout";

const Post = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePost(id);
  const navigate = useNavigate();

  if (error) {
    navigate("/error");
    return;
  }

  return (
    <Grid $as="section">
      <Column $flex $column>
        //Back Button
      </Column>
    </Grid>
  );
};

export default Post;
