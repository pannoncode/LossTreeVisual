import { createSlice } from "@reduxjs/toolkit";

const excelDataSlice = createSlice({
  name: "excelData",
  initialState: {
    dataStore: "",
  },
  reducers: {
    getCombinedExcelData(state, action) {
      let data = action.payload;
      state.dataStore = data;
    },
    clearCombinedExcelData(state) {
      state.dataStore = [];
    },
  },
});

export const ExcelDataActions = excelDataSlice.actions;
export default excelDataSlice;
