import { Link, useLoaderData } from "react-router-dom";
import FourCutTheme from "../components/theme/fourCut-theme";
import style from "../styles/themePage.module.scss";

import { getThemes } from "../constants/themeConfig";

export function loader() {
  const themeColor = getThemes();
  return { themeColor };
}

const Theme = () => {
  const { themeColor } = useLoaderData();

  return (
    <main className={style.main}>
      <h2 className={style.title}>태마 선택</h2>
      {themeColor.map((theme) => (
        <div key={theme.color} className={style.box}>
          <FourCutTheme theme={theme.color} />

          <Link to={`${theme.color}`} className={style.btn}>
            선택
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Theme;
