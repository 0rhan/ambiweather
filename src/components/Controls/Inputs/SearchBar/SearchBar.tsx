import styles from "./SearchBar.module.css";
import InputBase from "../InputBase/InputBase";
import { InputBaseProps } from "../InputBase/types";
import { SearchRounded } from "@material-ui/icons";


const SearchBar = ({}:InputBaseProps) => {
  return (
    <InputBase
      className={styles.searchBar}
      inputIcon={SearchRounded}
      iconSide="right"
      type="search"
      name="search city"
      placeholder="search"
    />
  );
};

export default SearchBar;
