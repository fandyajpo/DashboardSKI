import { getLayout } from "components/layout/Navbar";

const Dashboard = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-y-2">
      <div>
        Halaman Utama, jumlah order saat ini, jumlah product, jumlah category
      </div>
    </div>
  );
};

export default Dashboard;
Dashboard.getLayout = getLayout;
