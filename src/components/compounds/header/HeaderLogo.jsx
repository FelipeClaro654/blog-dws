import { Column, LogoSvg } from "@atomics";
import { LogoArea, LogoText } from "./styles";

const HeaderLogo = () => {
  return (
    <Column $mobile={3} $desktop={8} $centerV>
      <LogoArea>
        <LogoSvg />
        <LogoText>world services</LogoText>
      </LogoArea>
    </Column>
  );
};

export default HeaderLogo;
