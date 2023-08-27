import style from "../../styles/theme.module.scss";

const FourCutTheme = ({ imgs, theme = "pink" }) => {
  const containerClasses = [style.imgContainer, style[theme]];

  return (
    <div className={containerClasses.join(" ")}>
      {imgs && imgs.length > 0 ? (
        imgs.map((image) => (
          <div key={image.id} className={style.imgBox}>
            <img src={image.imgUrl} alt={`image-${image.id}`} />
          </div>
        ))
      ) : (
        <>
          <div className={style.imgBox}></div>
          <div className={style.imgBox}></div>
          <div className={style.imgBox}></div>
          <div className={style.imgBox}></div>
        </>
      )}
      <h2 className={style.imgContent}>방구석 네컷</h2>
    </div>
  );
};

export default FourCutTheme;
