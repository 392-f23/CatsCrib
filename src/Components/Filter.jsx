import "./Filter.css";

const Filter = ({closeHandler}) => {
  return (
    <div className="overlay-filter" onClick={closeHandler}>
      <div className="popup-filter" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="filter-title">Filter</p>
        <div className="filters">
          <p>Types: Apartment / House </p>
          <p>Roommates: </p>
          <p>House/Apartment-mates: </p>
          <p>Radius within Campus: </p>
          <p>Price Min: </p>
          <p>Price Max: </p>
          <p>Dates: </p>
        </div>
        <button>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Filter;
