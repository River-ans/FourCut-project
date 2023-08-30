import { Link } from "react-router-dom";
import style from "../styles/index.module.scss";
import FourCutTheme from "../components/theme/fourCut-theme";
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";

const imgs = [
  { imgUrl: img1 },
  { imgUrl: img2 },
  { imgUrl: img3 },
  { imgUrl: img4 },
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
