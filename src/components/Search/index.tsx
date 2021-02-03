import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/common/Icon";
import { Wrapper, Input } from "./styles";
import { colors } from "styles/globalStyles";

type Props = {
  filter: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ filter, handleOnChange }: Props) => {
  return (
    <Wrapper>
      <Input
        type="text"
        name="search"
        id="search"
        value={filter}
        placeholder="search by user name"
        onChange={handleOnChange}
      />
      <Icon
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "16px",
          left: "16px",
        }}
        icon={faSearch}
        size="lg"
        color={colors.primary}
      />
    </Wrapper>
  );
};

export default Search;
