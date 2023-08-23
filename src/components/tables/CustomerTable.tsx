import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { fetchCustomers } from "../../redux/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "../modal/EditModal";

const columnLabelMap = {
  id: "ID",
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
};

const CustomerTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const handleClose = () => setIsEditModalOpen(false);

  const handleDelete = (customerId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      // dispatch(deleteCustomer(customerId));
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: columnLabelMap.id, width: 300 },
    { field: "firstName", headerName: columnLabelMap.firstName, width: 150 },
    { field: "lastName", headerName: columnLabelMap.lastName, width: 150 },
    { field: "email", headerName: columnLabelMap.email, width: 250 },
    { field: "phone", headerName: columnLabelMap.phone, width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <button
          onClick={() => {
            setSelectedCustomer(params.row); // Set the selected customer
            setIsEditModalOpen(true); // Open the modal
          }}
        >
          Edit
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row.id)}>Delete</button>
      ),
    },
  ];

  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector(
    (state: RootState) => state.customer
  );

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div style={{ height: 300, width: "100%" }}>
      {loading === "pending" && <p>Loading...</p>}
      {loading === "failed" && <p>Error: {error}</p>}
      {loading === "succeeded" && (
        <DataGrid rows={customers} columns={columns} />
      )}

      {/* Render EditModal if isEditModalOpen is true */}
      {isEditModalOpen && (
        <EditModal
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedCustomer(null);
            handleClose();
          }}
          row={selectedCustomer}
          open={isEditModalOpen}
          columnLabelMap={columnLabelMap}
        />
      )}
    </div>
  );
};

export default CustomerTable;
