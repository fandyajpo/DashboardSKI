import FormProduct from "components/form/FormProduct";
import { useContext } from "react";
import { GlobalContext } from "context/global";
const ProductModal = () => {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  return (
    <div className="bg-white w-full h-full rounded-md">
      <div className="bg-red-500 h-14 w-full rounded-md flex items-center justify-center">
        <p className="text-white font-bold">Create new product</p>
      </div>
      <FormProduct
        // Default Form
        globalCtx={globalCtx}
        globalAct={globalAct}
        onSubmit={async function handleSubmit(e) {
          e.preventDefault();
          globalAct.setIsFetch(true);

          const body = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            uri: "login_office",
          };

          try {
            await fetchJson("/api/post", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
            router.replace("/config/dashboard");
          } catch (error) {
            if (error instanceof FetchError) {
              globalAct.setErrorMsg(error.data.message);
            } else {
              globalAct.setErrorMsg("An unexpected error happened");
            }
          }

          globalAct.setIsFetch(false);
        }}
      />
    </div>
  );
};

export default ProductModal;
