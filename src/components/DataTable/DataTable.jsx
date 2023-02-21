import React, { Fragment } from "react";

import GetDataFromExcel from "../../hooks/GetDataFromExcel";

import BarChart from "../Charts/BarChart";
import ChartLayout from "../Charts/ChartLayout/ChartLayout";
import PieLayout from "../Charts/ChartLayout/PieLayout";
import PieChart from "../Charts/PieChart";

import DataLayout from "../UI/DataLayout/DataLayout";
import Title from "../UI/Title/Title";
import TableLayout from "./TableLayout/TableLayout";
import Tables from "./Tables/Tables";

import useChartsSetup from "../../hooks/ChartsSetup";

const columns = [
  {
    field: "unplanned",
    headerName: "Állások",
    width: 500,
  },
  {
    field: "min",
    headerName: "Idő",
    width: 150,
  },
  {
    field: "stops",
    headerName: "Állások száma",
    width: 150,
  },
  {
    field: "loss",
    headerName: "Veszteség %",
    width: 150,
  },
];

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
        <Title title="Nem tervezett állások - Top 5 Oee Loss" />
        <TableLayout>
          <Tables
            data={sortOeeResult}
            header={columns}
            title={"Nem tervezett állások - Top 5 Oee Loss"}
          />
        </TableLayout>
        <ChartLayout>
          <BarChart barData={topUnplannedData} />
        </ChartLayout>
      </DataLayout>
      <DataLayout>
        <Title title="Tervezett Állások" />
        <TableLayout>
          <Tables
            data={plannedArray}
            header={columns}
            title="Tervezett Állások"
          />
        </TableLayout>
        <PieLayout>
          <PieChart pieData={piePlannedData} />
        </PieLayout>
      </DataLayout>
      <DataLayout>
        <Title title="Nem tervezett állások - Összes" />
        <ChartLayout>
          <BarChart barData={barChartUnplannedData} />
        </ChartLayout>
        <TableLayout>
          <Tables
            data={unplannedArray}
            header={columns}
            title={"Nem tervezett állások - Összes"}
          />
        </TableLayout>
      </DataLayout>
      <DataLayout>
        <Title title="ANT szerinti KPI" />
        <TableLayout>
          <Tables data={kpi} header={columns} title={"ANT szerinti KPI"} />
        </TableLayout>
        <PieLayout>
          <PieChart pieData={pieKpiData} />
        </PieLayout>
        <Title title="ANT szerinti KPI 2" />
        <TableLayout>
          <Tables
            data={othersKpi}
            header={columns}
            title={"ANT szerinti KPI"}
          />
        </TableLayout>
        <PieLayout>
          <PieChart pieData={otherKpi} />
        </PieLayout>
      </DataLayout>
    </Fragment>
  );
};

export default DataTable;
