import style from "./ImageCard.module.css";

interface ImageCardProp {
  pic: string;
  alt: string;
}

const ImageCard = ({ pic, alt }: ImageCardProp) => {
  return (
    <div className={style.pictureContainer}>
      <img className={style.picture} src={pic} alt={alt} />
    </div>
  );
};

export default ImageCard;
