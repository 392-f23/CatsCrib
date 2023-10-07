import "./MoreInfo.css";

const MoreInfo = ({ data, closeHandler }) => {
  return (
    <div className="overlay" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeHandler}>
          X
        </button>
        <p className="title">Additional Details</p>
        <p>{data.roomates}</p>
        <p>{data.more_info}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
