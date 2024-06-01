import { Puff } from "react-loader-spinner";

import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div>
      <Puff
        visible={true}
        height="40"
        width="40"
        color="#0000b4"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass={style.loader}
      />
    </div>
  );
};

export default Loader;
