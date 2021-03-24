import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function NewOrder() {
  const { register, handleSubmit, errors } = useForm({ criteriaMode: "all" });

  const saveOrder = (data) => {
    axios
      .post("https://localhost:5005/api/orders", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(saveOrder)}>
      <h2>New order</h2>
      <div>
        <label htmlFor="normal">
          Normal
          <input
            type="radio"
            name="crust"
            value="NORMAL"
            ref={register({ required: true })}
          />
        </label>

        <label htmlFor="thin">
          Thin
          <input
            type="radio"
            name="crust"
            value="THIN"
            ref={register({ required: true })}
          />
        </label>

        {errors.crust && "Crust is required"}
      </div>

      <label htmlFor="flavor">Flavor</label>
      <input
        name="flavor"
        type="text"
        ref={register({
          required: true,
          maxLength: 10,
        })}
      />
      {errors.flavor?.type  === "required" && "Flavor is required"}
      {errors.flavor?.type  === "maxLength" && "This input exceed maxLength."}

      <label htmlFor="size">Choose a size:</label>

      <select ref={register({ required: true })} name="size">
        <option value=""></option>
        <option value="S">Small (4 pieces)</option>
        <option value="M">Medium (6 pieces)</option>
        <option value="L">Larger (8 pieces)</option>
        <option value="XL">Extra-large (10 pieces)</option>
      </select>
      {errors.size && "Size is required"}

      <label htmlFor="tableNo">Table No</label>
      <input
        ref={register({
          required: "This is required.",
          min: {
            value: 1,
            message: "The tables starts in 1",
          },
          max: {
            value: 20,
            message: "The tables ends in 20",
          },
        })}
        name="tableNo"
        type="number"
      />
      <ErrorMessage errors={errors} name="tableNo" />

      <div className="button-container">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default NewOrder;
