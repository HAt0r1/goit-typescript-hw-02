import style from "./ImageCard.module.css";

const ImageCard = ({ pic, alt, onOpen }) => {
  return (
    <div className={style.pictureContainer}>
      <img onClick={onOpen} className={style.picture} src={pic} alt={alt} />
    </div>
  );
};

export default ImageCard;
