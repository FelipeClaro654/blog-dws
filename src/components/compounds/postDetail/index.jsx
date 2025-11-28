import { memo } from "react";
import { ArrowLeft } from "lucide-react";
import { Column, Flex, Grid } from "@/components/atomics/layout";
import { Button, ButtonText } from "@/components/atomics/buttons";
import { useNavigate } from "react-router-dom";
import spaces from "@/styles/theme/spaces";
import { PostContent } from "./PostContent";

const PostDetail = memo(({ post }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Grid $as="section">
      <Column>
        <Column $flex $column $mobile={1} $desktop={2}>
          <Button variant="secondary" onClick={goBack}>
            <Flex $gap={spaces["6px"]} $alignItems="center">
              <ArrowLeft size={spaces["16px"]} />
              <ButtonText>Back</ButtonText>
            </Flex>
          </Button>
        </Column>
        <PostContent post={post} />
      </Column>
    </Grid>
  );
});

export default PostDetail;
