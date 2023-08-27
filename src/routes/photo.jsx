import React, { useRef, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getTheme } from "../constants/themeConfig";
import style from "../styles/photo.module.scss";

export function loader({ params }) {
  const theme = getTheme(params.themeId);
  if (!theme) {
    throw new Error("not found");
  }
  console.log(theme);
  return { theme };
}

const Photo = () => {
  const { theme } = useLoaderData();
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("카메라를 실행할 수 없습니다:", err);
      }
    }

    startCamera();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}>사진</h2>
      <video ref={videoRef} autoPlay className={style.video}></video>
      {/* 나머지 UI는 여기에 */}
    </div>
  );
};

export default Photo;
