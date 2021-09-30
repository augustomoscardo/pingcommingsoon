import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Please insert an email address"),
});

export default schema;
