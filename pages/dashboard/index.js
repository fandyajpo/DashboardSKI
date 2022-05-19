import { getLayout } from "components/layout/Navbar";

import DashboardCard from "components/card/DashboardCard";
import LastOrder from "components/card/LastOrder";

const Dashboard = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-y-4">
      <div className="w-full flex flex-row items-center gap-x-4">
        <div className="w-full">
          <DashboardCard title={"Total Categorys"} content={"Categorys"} />
        </div>
        <div className="w-full">
          <DashboardCard title={"Total Products"} content={"Products"} />
        </div>
        <div className="w-full">
          <DashboardCard title={"Total Sold Items"} content={"Sold Items"} />
        </div>
      </div>
      <div>
        <div className="pb-4 flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-md font-bold">Last order hari ini</p>
        </div>
        <LastOrder />
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = getLayout;
