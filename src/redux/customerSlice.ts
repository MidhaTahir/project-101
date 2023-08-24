import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../global/types/userRoles";
import ENDPOINTS from "../global/constants/endpoints";
import { RootState } from "./store";
import { logout } from "./authSlice";

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

const handleUnauthorized = () => {
  // Clear user data from Redux state, local storage, etc.
  dispatch(logoutUser()); // Dispatch your logout action
};

export const deleteCustomer = createAsyncThunk(
  "customer/deleteCustomer",
  async (customerId: number, { getState }) => {
    try {
      const state: RootState = getState();
      const token = state.auth.token;

      await axios.delete(`${ENDPOINTS.DELETE_CUSTOMER}/${customerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return customerId;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const editCustomer = createAsyncThunk(
  "customer/editCustomer",
  async (editedCustomer: User, { getState }) => {
    console.log({ editedCustomer });
    try {
      const state: RootState = getState();
      const token = state.auth.token;

      const response = await axios.put(
        `${ENDPOINTS.UPDATE_CUSTOMER}/${editedCustomer.id}`,
        editedCustomer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log({ response });

      return response?.data?.customer as User;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const fetchCustomers = createAsyncThunk(
  "customer/fetchCustomers",
  async (_, { getState, dispatch }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const state: RootState = getState();
      const token = state.auth.token;

      const response = await axios.get(ENDPOINTS.GET_ALL_CUSTOMERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response?.data?.customers as Customer[];
    } catch (error) {
      // 401 unauthorized (token is expired)
      if (error.response && error.response.status === 401) {
        dispatch(logout());
      }

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
      })
      .addCase(deleteCustomer.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const deletedCustomerId = action.payload;
        state.customers = state.customers.filter(
          (customer) => customer.id !== deletedCustomerId
        );
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions from the slice
// export const {} = customerSlice.actions;

// Export the reducer
export default customerSlice.reducer;
