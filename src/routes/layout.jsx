import { Outlet } from "react-router-dom";
import style from "../styles/layout.module.scss";

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
