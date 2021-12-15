import schema from "./schema";
import { Formik } from "formik";
import { Container, Content, InputEmail, NotifyButton, Form } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const field = {
  name: "email",
  type: "text",
  placeholder: "Email Address",
};

export function InsertEmail() {
  return (
    <Container>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            toast.success("Thank you for your subscribe.");
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ errors, values, handleChange, validateForm }) => (
          <Form>
            <Content>
              <InputEmail
                {...field}
                value={values.email}
                onChange={handleChange}
                error={!!errors.email}
              />
              {errors.email && <p id="feedback">{errors.email}</p>}
            </Content>
            <NotifyButton
              onClick={() =>
                validateForm().then(() => {
                  errors.email && toast.error("Oh no! Something bad happened.");
                })
              }
              type="submit"
            >
              Notify me
            </NotifyButton>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
    </Container>
  );
}
