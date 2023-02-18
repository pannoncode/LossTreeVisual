import React, { Fragment, useState, useEffect } from "react";
import DataTable from "./components/DataTable/DataTable";

import UploadExcel from "./components/Uploads/UploadExcel";
import { useSelector } from "react-redux";
import NavHeader from "./components/UI/NavHeader/NavHeader";

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
      <UploadExcel title={"LossTree feltöltése"} />
      {isData && <DataTable data={storedData} />}
    </Fragment>
  );
}

export default App;
