export const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for a cloth name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};
