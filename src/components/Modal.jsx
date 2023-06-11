import classNames from "classnames";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, children, className }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const classes = classNames(
    "fixed top-[50%] left-[50%] w-4/6 min-w-[20rem] max-w-[35rem] transform -translate-x-[50%] -translate-y-[50%] rounded-2xl",
    className
  );
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-700 opacity-80"
      ></div>
      <div className={classes}>{children}</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
