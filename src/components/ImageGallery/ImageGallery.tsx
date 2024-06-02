import ImageCard from "../ImageCard/ImageCard";
import { responceResult } from "../../gallery-image";

import style from "./ImageGallery.module.css";

interface ImageGalleryProp {
  items: Array<responceResult>;
  onOpen: (url: string, alt: string) => void;
}

const ImageGallery = ({ items, onOpen }: ImageGalleryProp) => {
  return (
    <ul className={style.list}>
      {items.map(
        ({ id, alt_description, urls: { small, regular } }: responceResult) => {
          return (
            <li
              onClick={() => onOpen(regular, alt_description)}
              className={style.pictureItem}
              key={id}
            >
              <ImageCard pic={small} alt={alt_description} />
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ImageGallery;
