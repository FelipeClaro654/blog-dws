import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Column, Grid } from "@/components/atomics/layout";
import usePost from "./hooks/usePost";
import { BaseButton, ButtonText } from "@/components/atomics/buttons";

const Post = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePost(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/error", {
        replace: true,
      });
    }
  }, [error, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (!post) return null;

  return (
    <Grid $as="section">
      <Column $flex $column>
        <BaseButton>
          <ButtonText>Back</ButtonText>
        </BaseButton>
      </Column>
    </Grid>
  );
};

export default Post;
