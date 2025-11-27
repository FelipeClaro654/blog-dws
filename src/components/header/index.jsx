import MagnifyingGlass from "../../icons/MagnifyingGlass";
import { Column } from "../layout";
import LogoSvg from "./LogoSvg";
import {
  HeaderGrid,
  LogoArea,
  LogoText,
  SearchIconArea,
  SearchIconGrid,
} from "./styles";

const Header = () => {
  return (
    <HeaderGrid $as="header">
      <Column $mobile={3} $center>
        <LogoArea>
          <LogoSvg />
          <LogoText>world services</LogoText>
        </LogoArea>
      </Column>
      <Column $mobile={1} $center>
        <SearchIconArea>
          <SearchIconGrid>
            <MagnifyingGlass />
          </SearchIconGrid>
        </SearchIconArea>
      </Column>
    </HeaderGrid>
  );
};

export default Header;
