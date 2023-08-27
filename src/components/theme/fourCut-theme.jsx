import style from "../../styles/theme.module.scss";

const FourCutTheme = ({ imgs }) => {
  return (
    <div className={`${style.imgContainer} ${style.pink}`}>
      {imgs.map((image) => (
        <div key={image.id} className={style.imgBox}>
          <img src={image.imgUrl} alt={`image-${image.id}`} />
        </div>
      ))}
      <h2 className={style.imgContent}>방구석 네컷</h2>
    </div>
  );
};

export default FourCutTheme;
