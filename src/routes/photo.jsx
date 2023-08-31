import React, { useRef, useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getTheme } from "../constants/themeConfig";
import style from "../styles/photo.module.scss";
import color from "../styles/theme.module.scss";
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
  const { theme } = useLoaderData();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imgs, setImgs] = useState([]);
  const [countdown, setCountdown] = useState(null);

  const [showCanvas, setShowCanvas] = useState(false); // 캔버스 표시 상태
  const [isDoneCapturing, setIsDoneCapturing] = useState(false);
  const timer = 1000;
  const fourCutThemeRef = useRef(null);
  const [currentShot, setCurrentShot] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1920 }, // 이런 식으로 아주 큰 수를 넣어
            height: { ideal: 1080 }, // 최대한 높은 해상도를 얻을 수 있도록 해볼 수 있어
          },
        });

        // 권한이 부여되면 이 부분이 실행됨
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
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
    let capturedImgs = [];
    const canvas = canvasRef.current;
    const videoBoxElement = document.querySelector(`.${style.videoBox}`);
    const context = canvas.getContext("2d");
    context.canvas.willReadFrequently = true;

    for (let j = 0; j < 4; j++) {
      setCurrentShot(capturedImgs.length);
      for (let i = 1; i >= 0; i--) {
        setCountdown(i > 0 ? i : "");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (i === 0) {
          videoRef.current.classList.add(style.flash);
          await new Promise((resolve) => setTimeout(resolve, 200));
          setShowCanvas(true);

          const img = await html2canvas(videoBoxElement);
          canvas.width = videoBoxElement.offsetWidth;
          canvas.height = videoBoxElement.offsetHeight;

          context.save();
          context.translate(canvas.width, 0); // x축으로 이동
          context.scale(-1, 1); // x축을 뒤집음

          context.drawImage(img, 0, 0, canvas.width, canvas.height);

          context.restore();

          capturedImgs.push({ imgUrl: canvas.toDataURL("image/png") });

          setTimeout(
            () => videoRef.current.classList.remove(style.flash),
            1000
          );
          setTimeout(() => setShowCanvas(false), timer);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, timer));
    }
    setCurrentShot(0);
    setCountdown(null);
    setImgs(capturedImgs);
    setIsDoneCapturing(true);
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
            <canvas
              ref={canvasRef}
              width={1920}
              height={1080}
              className={
                showCanvas ? style.canvas : `${style.canvas} ${style.hidden}`
              }
            ></canvas>
          </div>

          <button
            onClick={capturePhotos}
            className={`${color[theme]} ${style.photoBtn} `}
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
