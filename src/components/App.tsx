// Hooks import
import { useEffect, useState } from "react";
// API function import
import { getData, responceResult } from "../gallery-image";

// Components import
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

interface IModal {
  url: string;
  alt: string;
}

const App: React.FC = () => {
  // State variables
  const [pictures, setPictures] = useState<Array<responceResult>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<IModal>({ url: "", alt: "" });

  const handleSubmit = (value: string): void => {
    setPictures([]);
    setKeyWord(value);
    setPage(1);
  };

  useEffect(() => {
    if (keyWord === "") {
      return;
    }
    const getPictures = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const data = await getData(keyWord, page);

        setPictures((prev) => {
          return [...prev, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPictures();
  }, [keyWord, page]);

  const handleSetPage = (): void => {
    setPage(page + 1);
  };

  const openModal = (url: string, alt: string): void => {
    setIsOpen(true);
    setModalData({ url, alt });
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <ImageModal openState={isOpen} data={modalData} closeState={closeModal} />
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length > 0 && (
        <ImageGallery onOpen={openModal} items={pictures} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {pictures.length > 0 && page >= 1 && (
        <LoadMoreBtn onClick={handleSetPage} />
      )}
    </>
  );
};

export default App;
