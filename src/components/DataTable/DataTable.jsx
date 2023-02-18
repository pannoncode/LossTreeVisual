import React, { Fragment, useState } from "react";

import GetDataFromExcel from "../../hooks/GetDataFromExcel";

import BarChart from "../Charts/BarChart";
import ChartLayout from "../Charts/ChartLayout/ChartLayout";
import PieLayout from "../Charts/ChartLayout/PieLayout";
import PieChart from "../Charts/PieChart";

import DataLayout from "../UI/DataLayout/DataLayout";
import Title from "../UI/Title/Title";
import TableLayout from "./TableLayout/TableLayout";
import Tables from "./Tables/Tables";

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
  const { unplannedArray, plannedArray, sortOeeResult, kpi } =
    GetDataFromExcel(data);

  const [barChartUnplannedData, setBarChartUnplannedData] = useState({
    labels: unplannedArray.map((data) => data.Unplanned),
    datasets: [
      {
        label: "Nem tervezett állások - Összes",
        data: unplannedArray.map((data) => data.Stops),
      },
    ],
  });

  const [topUnplannedData, setTopUnplannedData] = useState({
    labels: sortOeeResult.map((data) => data.Unplanned),
    datasets: [
      {
        label: "TOP 5 OEE % Veszteség",
        data: sortOeeResult.map((data) =>
          parseFloat(data.OeeLoss * 100).toFixed(2)
        ),
      },
    ],
  });

  const [piePlannedData, setPiePlannedData] = useState({
    labels: plannedArray.map((data) => data.Unplanned),
    datasets: [
      {
        label: "Tervezett állások",
        data: plannedArray.map((data) =>
          parseFloat(data?.OeeLoss * 100).toFixed(2)
        ),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(116, 235, 52)",
          "rgb(83, 114, 207)",
          "rgb(84, 18, 44)",
          "rgb(84, 18, 44)",
          "rgb(118, 48, 179)",
        ],
        hoverOffset: 4,
      },
    ],
  });

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
      </DataLayout>
    </Fragment>
  );
};

export default DataTable;
