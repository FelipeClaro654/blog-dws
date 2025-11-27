import { Column } from "@atomics/layout";
import { LogoSvg, MagnifyingGlass } from "@atomics/icons";
import {
  HeaderGrid,
  LogoArea,
  LogoText,
  SearchIconArea,
  SearchIconGrid,
} from "./styles";

export const Header = () => {
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
