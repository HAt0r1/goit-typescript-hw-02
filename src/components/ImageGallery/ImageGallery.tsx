import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

const ImageGallery = ({ items, onOpen }) => {
  return (
    <ul className={style.list}>
      {items.map(({ id, alt_description, urls: { small, regular } }) => {
        return (
          <li
            onClick={() => onOpen(regular, alt_description)}
            className={style.pictureItem}
            key={id}
          >
            <ImageCard pic={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
