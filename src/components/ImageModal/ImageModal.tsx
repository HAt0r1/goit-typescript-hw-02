import Modal from "react-modal";
import style from "./ImageModal.module.css";
Modal.setAppElement("#root");

const ImageModal = ({ openState, closeState, data: { url, alt } }) => {
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
