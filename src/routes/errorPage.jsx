import { useRouteError } from "react-router-dom";
import styles from "../styles/errorStyle.module.scss";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={styles.container}>
      <h1 className={styles.h1}>Oops!</h1>
      <p>죄송합니다. 오류가 발생했습니다.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
