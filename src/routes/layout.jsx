import { Outlet, useNavigate } from "react-router-dom";
import style from "../styles/layout.module.scss";
import { RiGithubFill, RiArrowLeftSLine } from "react-icons/ri";
const Layout = () => {
  const navigate = useNavigate();

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
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          className={style.redirectTo}
        >
          {" "}
          <RiArrowLeftSLine />
        </button>
      </div>
    </div>
  );
};

export default Layout;
