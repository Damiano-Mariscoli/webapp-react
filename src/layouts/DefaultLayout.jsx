import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../contexts/golbalContext";
function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      <div style={{ backgroundColor: "#040D12" }}>
        <Header />
        <main style={{ minHeight: "100vh" }}>
          <Outlet />
        </main>
        <Footer />
        {isLoading && <Loader />}
      </div>
    </>
  );
}

export default DefaultLayout;
