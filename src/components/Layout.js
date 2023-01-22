import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme === "light" ? "light__mode" : null}>
      <Nav />
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
