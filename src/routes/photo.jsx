import React, { useRef, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getTheme } from "../constants/themeConfig";

import style from "../styles/photo.module.scss";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { RiCameraLine } from "react-icons/ri";
import FourCutTheme from "../components/theme/fourCut-theme";

export function loader({ params }) {
  const theme = getTheme(params.themeId);
  if (!theme) {
    throw new Error("not found");
  }

  return { theme };
}

const Photo = () => {
  const location = useLocation();
  const { theme } = useLoaderData();
  const [imageSrc, setImageSrc] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imgs, setImgs] = useState([]);
  const [countdown, setCountdown] = useState(null);
  const [showCanvas, setShowCanvas] = useState(false); // 캔버스 표시 상태
  const [isDoneCapturing, setIsDoneCapturing] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const timer = 1500;
  const fourCutThemeRef = useRef(null);
  const [currentShot, setCurrentShot] = useState(0);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 9999 },
            height: { ideal: 9999 },
          },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          const videoTrack = stream.getVideoTracks()[0];
          const trackSettings = videoTrack.getSettings();

          const actualWidth = trackSettings.width;
          const actualHeight = trackSettings.height;

          canvasRef.current.width = actualWidth;
          canvasRef.current.height = actualHeight;
        }
      } catch (err) {
        // 권한이 거부되면 이 부분이 실행됨
        console.error("카메라를 실행할 수 없습니다:", err);
        alert("카메라 권한이 필요합니다.");
      }
    }

    startCamera();
  }, []);

  const capturePhotos = async () => {
    setIsCapturing(true);
    let capturedImgs = [];
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.canvas.willReadFrequently = true;
    for (let j = 0; j < 4; j++) {
      setCurrentShot(capturedImgs.length);

      for (let i = 3; i >= 0; i--) {
        setCountdown(i > 0 ? i : "");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (i === 0) {
          const videoBoxElement = document.querySelector(`.${style.videoBox}`);

          videoBoxElement.classList.add(style.flash);
          await new Promise((resolve) => setTimeout(resolve, 200));

          const img = await html2canvas(videoBoxElement);

          context.save();
          context.translate(canvas.width, 0); // x축으로 이동
          context.scale(-1, 1); // x축을 뒤집음
          const imgRatio = img.width / img.height;
          const canvasRatio = canvas.width / canvas.height;

          let drawWidth = canvas.width;
          let drawHeight = canvas.height;

          if (imgRatio > canvasRatio) {
            // 원본 이미지가 캔버스보다 더 "가로로 길다면"
            drawHeight = canvas.width / imgRatio;
          } else {
            // 원본 이미지가 캔버스보다 더 "세로로 길다면"
            drawWidth = canvas.height * imgRatio;
          }

          const x = (canvas.width - drawWidth) / 2;
          const y = (canvas.height - drawHeight) / 2;

          context.drawImage(img, x, y, drawWidth, drawHeight);
          context.restore();
          setShowCanvas(true);
          capturedImgs.push({ imgUrl: canvas.toDataURL("image/png") });
          setImageSrc(canvas.toDataURL("image/png"));
          setTimeout(() => videoBoxElement.classList.remove(style.flash), 1000);
          setTimeout(() => setShowCanvas(false), timer);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, timer));
    }
    setCurrentShot(0);
    setCountdown(null);
    setImgs(capturedImgs);
    // 카메라 스트림 종료
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
    videoRef.current.srcObject = null;
    setIsDoneCapturing(true);
    setIsCapturing(false);
  };

  const downloadImage = async () => {
    const element = fourCutThemeRef.current;

    if (element) {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = "four_cut_theme.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  async function action() {
    return navigate("/");
  }

  return (
    <>
      {!isDoneCapturing ? (
        <div className={style.container}>
          <h2 className={style.title}>사진</h2>
          <div className={style.currentShot}>{currentShot}/4</div>
          <div className={style.videoBox}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className={style.video}
            ></video>
            {countdown && <div className={style.countdown}>{countdown}</div>}
            <canvas ref={canvasRef} className={style.canvas}></canvas>
            <img
              src={imageSrc}
              alt="Captured"
              className={
                showCanvas ? style.imgBox : `${style.imgBox} ${style.hidden}`
              }
            />
          </div>

          <button
            onClick={capturePhotos}
            className={` ${style.photoBtn} `}
            disabled={isCapturing}
          >
            <RiCameraLine />
          </button>
        </div>
      ) : (
        <div className={style.container}>
          <div ref={fourCutThemeRef}>
            <FourCutTheme imgs={imgs} theme={theme} />
          </div>
          <button type="button" className={style.btn} onClick={downloadImage}>
            다운로드
          </button>
          <button type="button" className={style.btn} onClick={action}>
            다시찍기
          </button>
        </div>
      )}
    </>
  );
};

export default Photo;
