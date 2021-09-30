import schema from "./schema";
import { Formik } from "formik";
import { Container, Content, InputEmail, NotifyButton, Form } from "./styles";
// import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// type InsertEmailProps = {
//   toast: () => void;
// };

const field = {
  name: "email",
  type: "text",
  placeholder: "Email Address",
};

export function InsertEmail() {
  // const [email, setEmail] = useState("");

  // async function handleSendEmail() {
  //   try {
  //     const data = {
  //       email,
  //     };
  //     console.log(data);
  //     // await setEmail(data);

  //     // await toast.success("Thank you for your subscribe.");
  //   } catch (error) {
  //     console.log("Error", error);
  //     toast.error("Oh no! Something bad happened.");
  //   }
  // }

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
