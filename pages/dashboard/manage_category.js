import { useContext } from "react";
import { getLayout } from "components/layout/Navbar";
import { GlobalContext } from "context/global";

import FormCategory from "components/form/FormCategory";
import SearchCategory from "components/search/Category";
import CategoryTable from "components/table/Category";

const ManageCategory = () => {
  const { globalAct, globalCtx } = useContext(GlobalContext);
  return (
    <div className="w-full p-2 flex flex-col gap-y-2">
      <div>
        <FormCategory globalAct={globalAct} globalCtx={globalCtx} />
      </div>
      {/* <div>
        <SearchCategory />
      </div> */}
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default ManageCategory;
ManageCategory.getLayout = getLayout;
