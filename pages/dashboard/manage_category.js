import { useContext } from "react";
import { getLayout } from "components/layout/sideNav";
import { GlobalContext } from "context/global";

import FormCategory from "components/form/FormCategory";

const ManageCategory = () => {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  return (
    <div className="w-full">
      <div>
        <FormCategory globalAct={globalAct} globalCtx={globalCtx} />
      </div>
    </div>
  );
};

export default ManageCategory;
ManageCategory.getLayout = getLayout;
