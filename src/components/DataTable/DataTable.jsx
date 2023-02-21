import React, { Fragment } from "react";

import GetDataFromExcel from "../../hooks/GetDataFromExcel";

import TableAndBarChart from "./TableAndBarChart/TableAndBarChart";
import TableAndPieChart from "./TableAndBarChart/TableAndPieChart";

import DataLayout from "../UI/DataLayout/DataLayout";

import useChartsSetup from "../../hooks/ChartsSetup";

const DataTable = ({ data }) => {
  const { unplannedArray, plannedArray, sortOeeResult, kpi, othersKpi } =
    GetDataFromExcel(data);

  const { barChartForSorterData, createBarChart, createPieChart } =
    useChartsSetup();

  const topUnplannedData = barChartForSorterData(
    sortOeeResult,
    "TOP 5 OEE % Veszteség"
  );
  const piePlannedData = createPieChart(plannedArray, "Tervezett állások");
  const barChartUnplannedData = createBarChart(
    unplannedArray,
    "Nem tervezett állások - Összes"
  );
  const pieKpiData = createPieChart(kpi, "Tervezett állások");
  const otherKpi = createPieChart(othersKpi, "Tervezett állások");

  return (
    <Fragment>
      <DataLayout>
        <TableAndBarChart
          title={"Nem tervezett állások - Top 5 Oee Loss"}
          tableData={sortOeeResult}
          tableTitle={"Nem tervezett állások - Top 5 Oee Loss"}
          chartData={topUnplannedData}
        />
      </DataLayout>
      <DataLayout>
        <TableAndPieChart
          title={"Tervezett Állások"}
          tableData={plannedArray}
          tableTitle={"Tervezett Állások"}
          chartData={piePlannedData}
        />
      </DataLayout>
      <DataLayout>
        <TableAndBarChart
          title={"Nem tervezett állások - Összes"}
          tableData={unplannedArray}
          tableTitle={"Nem tervezett állások - Összes"}
          chartData={barChartUnplannedData}
        />
      </DataLayout>
      <DataLayout>
        <TableAndPieChart
          title={"ANT szerinti KPI"}
          tableData={kpi}
          tableTitle={"ANT szerinti KPI"}
          chartData={pieKpiData}
        />
        <TableAndPieChart
          title={"ANT szerinti KPI 2"}
          tableData={othersKpi}
          tableTitle={"ANT szerinti KPI"}
          chartData={otherKpi}
        />
      </DataLayout>
    </Fragment>
  );
};

export default DataTable;
