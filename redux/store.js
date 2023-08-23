import { configureStore } from "@reduxjs/toolkit";
import UserForm from "@redux/UserForm";
import UserDetails from "@redux/UserSlice";

const store = configureStore({
  reducer: {
    form: UserForm,
    user: UserDetails,
  },
});

export default store;
