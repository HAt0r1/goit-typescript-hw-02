import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={style.errorContainer}>
      <p className={style.text}>Oops, something went wrong &#128542;</p>
      <p className={style.text}>Please reload your page</p>
    </div>
  );
};

export default ErrorMessage;
