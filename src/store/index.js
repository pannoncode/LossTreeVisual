import { configureStore } from "@reduxjs/toolkit";

import excelDataSlice from "./excelData-Slice";

const store = configureStore({
  reducer: {
    excelData: excelDataSlice.reducer,
  },
});

export default store;
