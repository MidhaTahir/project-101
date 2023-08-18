import Sidebar from "../components/sidebar/Sidebar";
import CustomerTable from "../components/tables/CustomerTable";

const GetCustomersPage = () => {
  return (
    <div>
      <Sidebar>
        <CustomerTable />
      </Sidebar>
    </div>
  );
};

export default GetCustomersPage;
