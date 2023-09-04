/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormData = () => {
    const formData = {
      name,
      phoneNumber,
    };
    props.handleFormData(formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-2">
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="+628**********"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-info mt-3"
            onClick={handleFormData}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function Country() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountrySelect = (event) => {
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);
    const selectedData = countries.find(
      (country) => country.countryInfo.iso2 === selectedCountryCode
    );
    setCountryData(selectedData);
  };

  const handleFormData = (formData) => {
    setName(formData.name);
    setPhoneNumber(formData.phoneNumber);
  };

  useEffect(() => {
    // Function to fetch country data
    const loadCountries = async () => {
      try {
        const response = await fetch("https://corona.lmao.ninja/v2/countries");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    loadCountries();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <label htmlFor="countrySelect" className="mb-2 ">
            Select a Country:
          </label>
          <br />
          <select
            id="countrySelect"
            value={selectedCountry}
            onChange={handleCountrySelect}
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.countryInfo.iso2}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        {countryData && (
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-6">
                <h2>{countryData.country}</h2>
                <p>Name: {name}</p>
                <p>Phone Number: {phoneNumber}</p>
              </div>
            </div>
          </div>
        )}
        <Form handleFormData={handleFormData} />
      </div>
    </div>
  );
}

export default Country;
