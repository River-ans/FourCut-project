import style from "../../styles/theme.module.scss";
import React, { useState, useEffect } from "react";

const FourCutTheme = ({ imgs, theme = "pink" }) => {
  const containerClasses = [style.imgContainer, style[theme]];

  const [loadedImages, setLoadedImages] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (imgs && imgs.length > 0 && loadedImages === imgs.length) {
      setAllImagesLoaded(true);
    }
  }, [loadedImages, imgs]);

  const handleImageLoad = () => {
    if (imgs && imgs.length > 0) {
      setLoadedImages((prev) => prev + 1);
    }
    return allImagesLoaded;
  };

  return (
    <div className={containerClasses.join(" ")}>
      {imgs && imgs.length > 0 ? (
        imgs.map((image, index) => (
          <div key={index} className={style.imgBox}>
            <img
              src={image.imgUrl}
              alt={`image-${image.id}`}
              onLoad={handleImageLoad}
            />
            {allImagesLoaded ? <></> : <div className={style.imgLoading}></div>}
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
