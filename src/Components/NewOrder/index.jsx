import axios from "axios";
import React, { useState } from "react";

function NewOrder() {
  const [formData, setformData] = useState({});

  const onValueChange = (event) => {
    const { name, value } = event.target;

    setformData({ ...formData, [name]: value });
  };

  const saveOrder = (data) => {
    axios.post('https://localhost:5005/api/orders', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formData);
        saveOrder(formData);
        setformData({});
      }}
    >
      <h2>New order</h2>
      <div>
        <label htmlFor="normal">
          Normal
          <input
            type="radio"
            name="crust"
            value="NORMAL"
            required
            onChange={(event) => onValueChange(event)}
          />
        </label>

        <label htmlFor="thin">
          Thin
          <input
            type="radio"
            name="crust"
            value="THIN"
            required
            onChange={(event) => onValueChange(event)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="flavor">Flavor</label>
        <input
          name="flavor"
          type="text"
          required
          onChange={(event) => onValueChange(event)}
        />
      </div>

      <div>
        <label htmlFor="size">Choose a size:</label>

        <select required name="size" onChange={(event) => onValueChange(event)}>
          <option value=""></option>
          <option value="S">Small (4 pieces)</option>
          <option value="M">Medium (6 pieces)</option>
          <option value="L">Larger (8 pieces)</option>
          <option value="XL">Extra-large (10 pieces)</option>
        </select>
      </div>

      <div>
        <label htmlFor="tableNo">Table No</label>
        <input
          required
          name="tableNo"
          type="number"
          onChange={(event) => onValueChange(event)}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

export default NewOrder;
