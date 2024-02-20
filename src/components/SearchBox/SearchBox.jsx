import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    console.log(e.target.value.trim());
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="name" id="name" onChange={handleSearchChange} />
    </div>
  );
};