import React, { Fragment, useState, useEffect } from "react";
import DataTable from "./components/DataTable/DataTable";

import UploadExcel from "./components/Uploads/UploadExcel";
import { useSelector } from "react-redux";
import NavHeader from "./components/UI/NavHeader/NavHeader";
import Link from "@mui/material/Link";

import excel from "./assets/LossTree.xlsx";
import { Box } from "@mui/system";

function App() {
  const [isData, setIsData] = useState(false);
  const storedData = useSelector((state) => state.excelData.dataStore);

  const isDataHandler = () => {
    if (storedData === undefined) {
      setIsData(false);
    } else {
      setIsData(true);
    }
  };

  useEffect(() => {
    isDataHandler();
  }, [storedData]);

  return (
    <Fragment>
      <NavHeader />
      <Box sx={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
        <Link href={excel}>Teszt excel</Link>
        <UploadExcel title={"LossTree feltöltése"} />
      </Box>
      {isData && <DataTable data={storedData} />}
    </Fragment>
  );
}

export default App;
