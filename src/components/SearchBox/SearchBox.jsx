export const SearchBox = ({inputValue, handleChange}) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="name" id="name" value={inputValue} onChange={handleChange} />
    </div>
  );
};
