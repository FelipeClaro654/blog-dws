import MagnifyingGlass from "../../icons/MagnifyingGlass";
import { Column } from "../layout";
import LogoSvg from "./LogoSvg";
import {
  HeaderContainer,
  LogoArea,
  LogoText,
  SearchIconArea,
  SearchIconContainer,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer $as="header">
      <Column $mobile={3} $center>
        <LogoArea>
          <LogoSvg />
          <LogoText>world services</LogoText>
        </LogoArea>
      </Column>
      <Column $mobile={1} $center>
        <SearchIconArea>
          <SearchIconContainer>
            <MagnifyingGlass />
          </SearchIconContainer>
        </SearchIconArea>
      </Column>
    </HeaderContainer>
  );
};

export default Header;
