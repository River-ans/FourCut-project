import { Outlet } from "react-router-dom";
import style from "../styles/layout.module.scss";
import { RiGithubFill } from "react-icons/ri";
const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <Outlet />
        <a
          href="https://github.com/River-ans/FourCut-project"
          className={style.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubFill className={style.github} /> River-ans
        </a>
      </div>
    </div>
  );
};

export default Layout;
