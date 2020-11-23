
import React from 'react';
import Select from 'react-select'


// as props an array of objects, with attributes
// date (YYYY/MM/dd)
// title (sring)
// and sortstate




const OrderByDropDown = ({sortState, setSortState}) => {

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        fontSize: 14,
        color: 'black',
        background: 'white',
        padding: 2,
        paddingLeft: 5,
        border:0,
        '&:hover':{
            background: 'rgb(0,120,215)',
            color: 'white'
        }
      }),
  menu: (provided, state) => ({
    ...provided,

    padding: 0,
    margin: 0,
  }),
  control: base => ({
    ...base,
    height: 30,
    minHeight: 30,
    padding: 0,
    margin: 0,


  }),
  singleValue: (provided, state) => {
      const fontSize = 14;
      const opacity = 1;
      const padding = 0;
      const margin = 0;
      return { ...provided, opacity, padding, margin, fontSize };
  },
  valueContainer: (provided, state) => ({
    ...provided,
    height: '30px',
    padding: '0 6px'
  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '30px',
  }),




}

      const options = [
        { value: 'newest', label: 'Newest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'title', label: 'Title' }
      ]
      
      const handleChange = (selectedOption) => {
        setSortState(selectedOption);
      }

      const MyComponent = () => (
        <Select 
        isSearchable={false}
        className="basic-single"
            styles={customStyles}
            value={sortState} 
            onChange={(e) => handleChange(e)} 
            options={options} 
        />
      )


    return (
        <div className="sort-select-container"><MyComponent/></div>
    );
}

export default OrderByDropDown;