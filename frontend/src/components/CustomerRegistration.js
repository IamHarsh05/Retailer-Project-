import React, { useState } from "react";
import axios from "axios";

export default function CustomerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/customers", formData)
      .then((response) => {
        alert(response.data);
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          address: "",
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <h2>Customer Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <button type="submit">Register Customer</button>
      </form>
    </div>
  );
}
