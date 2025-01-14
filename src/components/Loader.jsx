import style from "./Loader.module.css";

function Loader() {
  return (
    <>
      <div className={style.loader}>
        <div
          className="spinner-border"
          style={{ color: "#93B1A6" }}
          role="status"
        ></div>
      </div>
    </>
  );
}

export default Loader;
