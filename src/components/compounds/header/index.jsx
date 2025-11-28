import { HeaderGrid, HeaderLimiter } from "./styles";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

export const Header = () => {
  return (
    <HeaderGrid>
      <HeaderLimiter>
        <HeaderLogo />
        <HeaderSearch />
      </HeaderLimiter>
    </HeaderGrid>
  );
};
