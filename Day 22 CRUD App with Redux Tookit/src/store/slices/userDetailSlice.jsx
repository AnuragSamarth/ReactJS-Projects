import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    // console.log("data", data)
    const response = await fetch(
      "https://66d2b14c184dce1713ce279c.mockapi.io/CRUD",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const res = await fetch("https://66d2b14c184dce1713ce279c.mockapi.io/CRUD");

    try {
      const result = await res.json();
      // console.log(result)
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const res = await fetch(
      `https://66d2b14c184dce1713ce279c.mockapi.io/CRUD/${id}`,
      {
        method: "Delete",
      }
    );

    try {
      const result = await res.json();
      // console.log(result)
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// create action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `https://66d2b14c184dce1713ce279c.mockapi.io/CRUD/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchState: [],
  },
  reducers: {
    searchUser: (state, action) => {
      // console.log(action.payload)
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // <-- This should now work
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // <-- Replace users array with fetched data
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users.filter((elem) => elem.id !== id);
        }
        // state.users.slice(id,1);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((elem) => {
          elem.id === action.payload.id ? action.payload : elem;
        });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;
