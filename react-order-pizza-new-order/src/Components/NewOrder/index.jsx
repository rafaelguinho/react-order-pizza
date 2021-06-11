import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from './validator'

function NewOrder() {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const saveOrder = (data) => {
    axios
      .post("https://localhost:5005/api/orders", data)
      .then(function (response) {
        alert("New order saved");
        reset({});
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
          <input type="radio" name="crust" value="NORMAL" ref={register} />
        </label>

        <label htmlFor="thin">
          Thin
          <input type="radio" name="crust" value="THIN" ref={register} />
        </label>

        <ErrorMessage errors={errors} name="crust" />
      </div>

      <label htmlFor="flavor">Flavor</label>
      <input name="flavor" type="text" ref={register} />
      <ErrorMessage errors={errors} name="flavor" />

      <label htmlFor="size">Choose a size:</label>

      <select ref={register} name="size">
        <option value=""></option>
        <option value="S">Small (4 pieces)</option>
        <option value="M">Medium (6 pieces)</option>
        <option value="L">Larger (8 pieces)</option>
        <option value="XL">Extra-large (10 pieces)</option>
      </select>
      <ErrorMessage errors={errors} name="size" />

      <label htmlFor="tableNo">Table No</label>
      <input ref={register} name="tableNo" type="number"/>
      <ErrorMessage errors={errors} name="tableNo" />

      <div className="button-container">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default NewOrder;
