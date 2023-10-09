import { useState } from "react";
import "./MakeAPost.css";
import { useDbAdd } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

const MakeAPost = (profile) => {
  const navigate = useNavigate();
  const [add, result] = useDbAdd(`/postings`);
  const [selectedCategory, setSelectedCategory] = useState("sublet");
  const [formData, setFormData] = useState({
    user: "jacob34ZT", //change this based on the logged in user
    category: "sublet",
    price: "",
    type: "",
    address: {
      street: "",
      city: "",
      state: "",
    },
    unit: "",
    roommates: "",
    start_date: "",
    end_date: "",
    images: [],
    more_info: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (["street", "city", "state"].includes(e.target.name)) {
      setFormData({
        ...formData,
        address: { ...formData.address, [e.target.name]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    if (errors[e.target.name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[e.target.name];
      setErrors(updatedErrors);
    }
  };

  const handleImageChange = (e) => {
    //Image still needs to be fixed
    const imageURLs = Array.from(e.target.files).map(
      (_, index) => `https://tinyurl.com/apartmentnu${index + 1}`
    );
    setFormData({ ...formData, images: imageURLs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requiredFields = [
      "price",
      "start_date",
      "end_date",
      "street",
      "city",
      "state",
      "type",
      "unit",
      "roommates",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field] && !formData.address[field])
        newErrors[field] = "missing field";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    add(formData);
    setFormData({
      user: "jacob34ZT",
      price: "",
      type: "",
      address: {
        street: "",
        city: "",
        state: "",
      },
      unit: "",
      roommates: "",
      start_date: "",
      end_date: "",
      images: [],
      more_info: "",
    });
    navigate("/");
  };

  return (
    <div className="post-container">
      <h2>Make a posting</h2>
      <div className="category-buttons-make-a-post">
        <button
          className={selectedCategory === "sublet" ? "active" : ""}
          onClick={() => {
            setSelectedCategory("sublet");
            setFormData((prevState) => ({ ...prevState, category: "sublet" }));
          }}
        >
          Sublet
        </button>
        <button
          className={selectedCategory === "roommate" ? "active" : ""}
          onClick={() => {
            setSelectedCategory("roommate");
            setFormData((prevState) => ({
              ...prevState,
              category: "roommate",
            }));
          }}
        >
          Roommate
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <p className="filter-tag">PRICE / MONTH ($)</p>
        <input
          name="price"
          type="number"
          onChange={handleChange}
          className={errors.price ? "input-error" : ""}
        />
        <div className="dates">
          <div>
            <p>START DATE</p>
            <input
              name="start_date"
              type="date"
              placeholder="Start Date"
              onChange={handleChange}
              className={errors.start_date ? "input-error" : ""}
            />
          </div>
          <div>
            <p>END DATE</p>
            <input
              name="end_date"
              type="date"
              placeholder="End Date"
              onChange={handleChange}
              className={errors.end_date ? "input-error" : ""}
            />
          </div>
        </div>
        <p className="filter-tag">ADDRESS</p>
        <input
          name="apt_number"
          type="text"
          placeholder="Apt Number (Optional)"
          onChange={handleChange}
          className={errors.apt_number ? "input-error" : ""}
        />
        <input
          name="street"
          type="text"
          placeholder="Street"
          onChange={handleChange}
          className={errors.street ? "input-error" : ""}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={handleChange}
          className={errors.city ? "input-error" : ""}
        />
        <input
          name="state"
          type="text"
          placeholder="State"
          onChange={handleChange}
          className={errors.state ? "input-error" : ""}
        />
        <p className="filter-tag">TYPE</p>
        <select
          name="type"
          onChange={handleChange}
          className={errors.type ? "input-error" : ""}
        >
          <option value="" disabled selected hidden></option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
        <p className="filter-tag">UNIT</p>
        <select
          name="unit"
          onChange={handleChange}
          className={errors.unit ? "input-error" : ""}
        >
          <option value="" disabled selected hidden></option>
          <option value="house">House</option>
          <option value="studio">Studio</option>
          <option value="1br">1 Bedroom</option>
          <option value="2br">2 Bedrooms</option>
          <option value="3br">3 Bedrooms</option>
          <option value="4br+">4+ Bedrooms</option>
        </select>
        <p className="filter-tag"># OF ROOMMATES</p>
        <input
          name="roommates"
          type="number"
          min="0"
          max="12"
          onChange={handleChange}
          className={errors.roommates ? "input-error" : ""}
        />
        <p className="filter-tag">UPLOAD IMAGES</p>
        <input
          name="images"
          type="file"
          onChange={handleImageChange}
          className={`upload-images ${errors.images ? "input-error" : ""}`}
          multiple
        />
        <p className="filter-tag">MORE INFO</p>
        <textarea
          name="more_info"
          maxLength="200"
          onChange={handleChange}
          className={`upload-images ${errors.more_info ? "input-error" : ""}`}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Please fill out the missing fields.
        </div>
      )}
    </div>
  );
};

export default MakeAPost;
