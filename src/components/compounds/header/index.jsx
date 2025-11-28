import { HeaderGrid, HeaderLimiter } from "./styles";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

export const Header = () => {
  return (
    <HeaderGrid $as="header">
      <HeaderLimiter>
        <HeaderLogo />
        <HeaderSearch />
      </HeaderLimiter>
    </HeaderGrid>
  );
};
