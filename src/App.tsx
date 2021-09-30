import { DashBoard } from "./components/Dashboard";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { InsertEmail } from "./components/InsertEmail";
import { Logo } from "./components/Logo";
import { SocialIcons } from "./components/SocialIcons";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";

export function App() {
  // const notify = () => {
  //   toast.success("Thank you for your subscribe.");
  //   toast.error("Oh no! Something bad happened.");
  // };

  return (
    <>
      <Logo />
      <Description />
      <InsertEmail />
      <DashBoard />
      <SocialIcons />
      <Footer />
      {/* <ToastContainer
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
      /> */}
      <GlobalStyle />
    </>
  );
}
