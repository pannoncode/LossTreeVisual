import { useState, useEffect } from "react";

import * as XLSX from "xlsx";

import excelDataSlice from "../store/excelData-Slice";
import { useDispatch } from "react-redux";

const ReadExcel = () => {
  const [excelData, getExcelData] = useState();

  const dispatch = useDispatch();

  const uploadFileHandler = (file) => {
    const data = file;

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(data);

    fileReader.onload = (e) => {
      const importRange = "B9:G200";
      const headers = ["Unplanned", "Min", "Stops", "OeeLoss", "MTBF", "MTTR"];
      const bufferArray = e.target.result;
      const wb = XLSX.read(bufferArray, {
        type: "buffer",
      });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      let data = XLSX.utils.sheet_to_json(ws, {
        range: importRange,
        header: headers,
      });

      getExcelData(data);
    };
  };

  useEffect(() => {
    dispatch(excelDataSlice.actions.getCombinedExcelData(excelData));

    return () => {
      dispatch(excelDataSlice.actions.clearCombinedExcelData());
    };
  }, [excelData, dispatch]);

  return { uploadFileHandler };
};

export default ReadExcel;
