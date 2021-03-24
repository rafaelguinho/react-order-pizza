import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "./validator";
import Button from "../Button";
import { Input, Select } from "../Input";
import Label from "../Label";
import Form from "../Form";

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
    <Form onSubmit={handleSubmit(saveOrder)}>
      <h2>New order</h2>
      <div>
        <Label htmlFor="normal">
          Normal
          <input type="radio" name="crust" value="NORMAL" ref={register} />
        </Label>

        <Label htmlFor="thin">
          Thin
          <input type="radio" name="crust" value="THIN" ref={register} />
        </Label>

        <ErrorMessage errors={errors} name="crust" data-testid="crustError" />
      </div>

      <Label htmlFor="flavor">Flavor</Label>
      <Input name="flavor" type="text" ref={register} />
      <ErrorMessage errors={errors} name="flavor" />

      <Label htmlFor="size">Choose a size:</Label>

      <Select ref={register} name="size">
        <option value=""></option>
        <option value="S">Small (4 pieces)</option>
        <option value="M">Medium (6 pieces)</option>
        <option value="L">Larger (8 pieces)</option>
        <option value="XL">Extra-large (10 pieces)</option>
      </Select>
      <ErrorMessage errors={errors} name="size" />

      <Label htmlFor="tableNo">Table No</Label>
      <Input ref={register} name="tableNo" type="number" />
      <ErrorMessage errors={errors} name="tableNo" />

      <div className="button-container">
        <Button type="submit">Save</Button>
      </div>
    </Form>
  );
}

export default NewOrder;
