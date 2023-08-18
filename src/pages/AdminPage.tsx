import EditForm from "../components/form/EditUserForm";
import Sidebar from "../components/sidebar/Sidebar";

const AdminPage = () => {
  return (
    <div>
      <Sidebar>
        <EditForm />
      </Sidebar>
    </div>
  );
};

export default AdminPage;
