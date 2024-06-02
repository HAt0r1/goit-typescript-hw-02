import Modal from "react-modal";
import style from "./ImageModal.module.css";
Modal.setAppElement("#root");

interface ImageModalProp {
  openState: boolean;
  closeState: (event: React.KeyboardEvent<Element>) => void;
  data: {
    url: string;
    alt: string;
  };
}

const ImageModal = ({
  openState,
  closeState,
  data: { url, alt },
}: ImageModalProp) => {
  return (
    <Modal
      className={style.modal}
      isOpen={openState}
      onRequestClose={closeState}
    >
      <div className={style.container}>
        <img className={style.image} src={url} alt={alt} />
      </div>
    </Modal>
  );
};

export default ImageModal;
