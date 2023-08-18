import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import { fetchCustomers } from "../../redux/customerSlice";
import { useDispatch, useSelector } from "react-redux";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 300 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Phone", width: 150 },
];

const CustomerTable = () => {
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
    </div>
  );
};

export default CustomerTable;
