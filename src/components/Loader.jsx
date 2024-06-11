import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className=" fixed top-0 left-0 w-full h-screen flex items-center justify-center text-white spin-loader  bg-black/10">
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>,
    document.body
  );
};

export default Loader;
