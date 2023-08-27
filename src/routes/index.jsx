import { Link } from "react-router-dom";
import style from "../styles/index.module.scss";
import FourCutTheme from "../components/theme/fourCut-theme";

const imgs = [
  { id: 1, imgUrl: "../src/assets/img/1.png" },
  { id: 2, imgUrl: "../src/assets/img/2.png" },
  { id: 3, imgUrl: "../src/assets/img/3.png" },
  { id: 4, imgUrl: "../src/assets/img/4.png" },
];

const Index = () => {
  return (
    <main className={style.main}>
      <div className={style.rotate}>
        <FourCutTheme imgs={imgs} theme="pink" />
      </div>
      <div className={style.content}>
        <h1>
          <span>집에서도</span> <br /> 4컷을 찍어보세요
        </h1>
        <Link to="theme" className={style.Btn}>
          시작
        </Link>
      </div>
    </main>
  );
};

export default Index;
