import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
