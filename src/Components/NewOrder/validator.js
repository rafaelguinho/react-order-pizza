import * as yup from "yup";

const schema = yup.object().shape({
  crust: yup.string().nullable().required(),
  flavor: yup.string().max(10, "This input exceed maxLength.").required(),
  size: yup.string().required(),
  tableNo: yup
    .number()
    .typeError("you must specify a number")
    .min(1)
    .max(20)
    .required(),
});

export default schema;
