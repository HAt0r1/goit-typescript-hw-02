import style from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProp {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProp) => {
  return (
    <div className={style.container}>
      <button onClick={onClick} className={style.button} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
