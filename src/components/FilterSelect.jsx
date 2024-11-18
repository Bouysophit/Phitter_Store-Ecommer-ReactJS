import Select from 'react-select';
import { products } from '../utils/products';

const options = [
  { value: "rog", label: "ROG" },
  { value: "iphone" ,label:"IPHONE 16"},
  { value: "Monitor", label:"ROG LAPTOP"},
  { value: "Macbook", label: "MACBOOK"}
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#e71d36",
    color: "white",
    borderRadius: "10px 10px 10px 10px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "45px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#e71d36" : "white",
    color: state.isSelected ? "white" : "#e71d36",
    "&:hover": {
      backgroundColor: "#e71d36",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category ===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
