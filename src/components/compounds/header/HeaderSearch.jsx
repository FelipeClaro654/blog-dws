import { Column, MagnifyingGlass } from "@atomics";
import { SearchIconArea, SearchIconGrid } from "./styles";

const HeaderSearch = () => {
  return (
    <Column $mobile={1} $desktop={4} $centerV>
      <SearchIconArea>
        <SearchIconGrid>
          <MagnifyingGlass />
        </SearchIconGrid>
      </SearchIconArea>
    </Column>
  );
};

export default HeaderSearch;
