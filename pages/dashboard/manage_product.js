import { useContext } from "react";
import { getLayout } from "components/layout/sideNav";
import { GlobalContext } from "context/global";

import FormProduct from "components/form/FormProduct";

const ManageProduct = () => {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <div>
        <FormProduct globalAct={globalAct} globalCtx={globalCtx} />
      </div>
    </div>
  );
};

export default ManageProduct;
ManageProduct.getLayout = getLayout;
