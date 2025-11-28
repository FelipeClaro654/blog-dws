import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import spaces from "../../../styles/theme/spaces";
import { Button, ButtonText, Column, Flex } from "../../atomics";

const PostBackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Column $flex $column $mobile={1} $desktop={2}>
      <Button variant="secondary" onClick={goBack}>
        <Flex $gap={spaces["6px"]} $alignItems="center">
          <ArrowLeft size={spaces["16px"]} />
          <ButtonText>Back</ButtonText>
        </Flex>
      </Button>
    </Column>
  );
};

export default PostBackButton;
