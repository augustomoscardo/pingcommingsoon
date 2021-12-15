import { DashBoard } from "./components/Dashboard";
import { Description } from "./components/Description";
import { Footer } from "./components/Footer";
import { InsertEmail } from "./components/InsertEmail";
import { Logo } from "./components/Logo";
import { SocialIcons } from "./components/SocialIcons";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Logo />
      <Description />
      <InsertEmail />
      <DashBoard />
      <SocialIcons />
      <Footer />
      <GlobalStyle />
    </>
  );
}
