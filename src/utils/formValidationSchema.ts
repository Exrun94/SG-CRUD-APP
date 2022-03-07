import * as Yup from "yup";

const formValidationSchema = Yup.object().shape({
  productName: Yup.string()
    .max(25, "Too Long!")
    .required("Product name is required"),
  price: Yup.number()
    .min(1, "Price must be greater than 0")
    .max(1000000, "What are you Jeff Bezos??")
    .required("Price is required"),
  currency: Yup.string()
    .max(3, "Invalid currency, must be 3 characters")
    .required("Currency is required"),
});

export default formValidationSchema;
