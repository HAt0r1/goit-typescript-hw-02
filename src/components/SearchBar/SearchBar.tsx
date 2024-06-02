import { BsSearch } from "react-icons/bs";
import toast from "react-hot-toast";
import style from "./SearchBar.module.css";

interface SearchBarProp {
  onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProp) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.search.value.trim();
    if (inputValue === "") {
      toast.error("Search field is empty. Please put text into field.", {
        duration: 2000,
        position: "top-right",
        style: {
          backgroundColor: "#a81b1b",
          color: "#ffffff",
        },
      });
    } else {
      onSubmit(inputValue);
    }
    form.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleFormSubmit} className={style.form}>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={style.button} type="submit">
            <BsSearch className={style.search} />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
