import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../global/types/userRoles";
import ENDPOINTS from "../global/constants/endpoints";
import { RootState } from "./store";

interface CustomerState {
  customers: User[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CustomerState = {
  customers: [],
  loading: "idle",
  error: null,
};

export const editCustomer = createAsyncThunk(
  "customer/editCustomer",
  async (editedCustomer: User, { getState }) => {
    console.log("test");
    // try {
    //   const state: RootState = getState();
    //   const token = state.auth.token;

    //   const response = await axios.put(
    //     `${ENDPOINTS.BASE_URL}/${ENDPOINTS.UPDATE_CUSTOMER}/${editedCustomer.id}`,
    //     editedCustomer,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );

    //   return response?.data?.customer as User;
    // } catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  }
);

export const fetchCustomers = createAsyncThunk(
  "customer/fetchCustomers",
  async (_, { getState }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const state: RootState = getState(); // Use RootState type to access state
      const token = state.auth.token; // Access token from the auth state

      const response = await axios.get(ENDPOINTS.GET_ALL_CUSTOMERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response?.data?.customers as Customer[]; // Assuming your response data is an array of Customer
    } catch (error) {
      console.log(error);
    }
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(editCustomer.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(editCustomer.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const editedCustomer = action.payload;
        state.customers = state.customers.map((customer) =>
          customer.id === editedCustomer.id ? editedCustomer : customer
        );
      })
      .addCase(editCustomer.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions from the slice
// export const {} = customerSlice.actions;

// Export the reducer
export default customerSlice.reducer;
