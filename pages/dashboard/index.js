import { getLayout } from "components/layout/Navbar";

import DashboardCard from "components/card/DashboardCard";
import OrderCard from "components/card/OrderCard";
import History from "components/table/History";

const Dashboard = () => {
  return (
    <div className='w-full p-2 flex flex-col gap-y-4'>
      <div className='w-full flex flex-row items-center gap-x-4'>
        <div className='w-full'>
          <DashboardCard
            title={"Total Categorys"}
            content={"Categorys"}
            routes={"/dashboard/manage_category"}
          />
        </div>
        <div className='w-full'>
          <DashboardCard
            title={"Total Products"}
            content={"Products"}
            routes={"/dashboard/manage_product"}
          />
        </div>
        <div className='w-full'>
          <DashboardCard
            title={"Total Sold Items"}
            content={"Sold Items"}
            routes={"/dashboard/manage_order"}
          />
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className='w-full flex flex-row items-center gap-x-4'>
        <div className='w-72'>
          <OrderCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = getLayout;
