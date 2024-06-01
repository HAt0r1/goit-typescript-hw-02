import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={style.container}>
      <button onClick={onClick} className={style.button} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
