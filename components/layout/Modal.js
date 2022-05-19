import ProductModal from "components/modal/Product";
import ProductImageModal from "components/modal/ProductImage";
const Modal = (props) => {
  const { modal } = props.globalCtx;
  const { setModal } = props.globalAct;

  return (
    <div className="">
      <div
        onClick={() => setModal("")}
        className={`bg-black/60 fixed w-full h-screen z-40 ${
          modal !== "" ? "" : "hidden"
        }`}
      />
      <div
        className={`${
          modal === "addProduct" ? "translate-x-0" : "-translate-x-full"
        } z-50 fixed duration-700 w-2/4 h-screen p-4`}
      >
        <ProductModal globalCtx={props.globalCtx} globalAct={props.globalAct} />
      </div>
      <div
        className={`${
          modal === "addProduct" ? "translate-x-0" : "translate-x-full"
        } z-50 fixed right-0 duration-700 w-96 h-screen p-4`}
      >
        <ProductImageModal
          globalCtx={props.globalCtx}
          globalAct={props.globalAct}
        />
      </div>
    </div>
  );
};

export default Modal;
