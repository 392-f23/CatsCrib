import "./Filter.css";
import { useState } from "react";

const Filter = ({ closeHandler, props }) => {

  const [filterData, setFilterData] = useState({
      Types: "",
      Roommates: "",
      Radius: "",
      Min: "",
      Max: "",
      Dats: "",
  });
  console.log(filterData)

  const handleFilterChange = (event) => {
        setFilterData(event.target.value);
        props.sendDataToParent(event.target.value);
  }

  const clearFilter = () => {
    setFilterData(prevState => ({...prevState, 
      Types: "",
      Roommates: "",
      Radius: "",
      Min: "",
      Max: "",
      Dats: "",
    }))
  }

/////////////////////////////////////////////////////////////////////////////

  const defaultStyle = {
    padding: '10px 15px',
    margin: '5px',
    border: '1px solid black',
    cursor: 'pointer',
    scale: '90%',
  };

  const selectedStyle = {
    ...defaultStyle,
    backgroundColor: "#674ea7",
    color: 'white',
  };

  const [typeOption, setTypeOption] = useState(null);

  const [roommateOption, setRoommateOption] = useState(null);

  const [radiusValue, setRadiusValue] = useState('');

  return (
    <div className="overlay-filter" onClick={closeHandler}>
      <div className="popup-filter" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="filter-title">Filter</p>
        <div className="filters">
          <p><button onClick={clearFilter}
            style={selectedStyle}>Clear Filter</button>
          </p>
          <p>Types: 
            <button onClick={() => {setTypeOption('House'); setFilterData(prevState => ({...prevState, Types: 'House'}))}}
            style={typeOption === 'House' ? selectedStyle : defaultStyle}>House</button>
            <button onClick={() => {setTypeOption('Apartment'); setFilterData(prevState => ({...prevState, Types: 'Apartment'}))}}
            style={typeOption === 'Apartment' ? selectedStyle : defaultStyle}>Apartment</button>
          </p>
          <p>Roommates: </p>
          <p>
          <button onClick={() => {setRoommateOption('0'); setFilterData(prevState => ({...prevState, Roommates: '0'}))}}
          style={roommateOption === '0' ? selectedStyle : defaultStyle}>0</button>
          <button onClick={() => {setRoommateOption('1'); setFilterData(prevState => ({...prevState, Roommates: '1'}))}}
          style={roommateOption === '1' ? selectedStyle : defaultStyle}>1</button>
          <button onClick={() => {setRoommateOption('2'); setFilterData(prevState => ({...prevState, Roommates: '2'}))}}
          style={roommateOption === '2' ? selectedStyle : defaultStyle}>2</button>
          <button onClick={() => {setRoommateOption('3'); setFilterData(prevState => ({...prevState, Roommates: '3'}))}}
          style={roommateOption === '3' ? selectedStyle : defaultStyle}>3</button>
          <button onClick={() => {setRoommateOption('4'); setFilterData(prevState => ({...prevState, Roommates: '4'}))}}
          style={roommateOption === '4+' ? selectedStyle : defaultStyle}>4+</button>
          </p>
          <p>Radius from Campus: 
            <input style={defaultStyle} type="text"/>
          </p>
          <p>Price Min: 
            <input style={defaultStyle} type="text"/>
          </p>
          <p>Price Max: 
            <input style={defaultStyle} type="text"/>
          </p>
          <p>
            Start -
            <input
              name="start_date"
              type="date"
              placeholder="Start Date"
              style={defaultStyle}
            /> </p>
            <p>
            End - 
            <input
              name="end_date"
              type="date"
              placeholder="End Date"
              style={defaultStyle}
            />
          </p>
        </div>
        <button style={selectedStyle} onClick={handleFilterChange}>Submit</button>
      </div>
    </div>
  );
};

export default Filter;
