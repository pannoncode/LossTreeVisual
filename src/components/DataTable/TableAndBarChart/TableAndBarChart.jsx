import React, { Fragment } from "react";

import Title from "../../UI/Title/Title";
import TableLayout from "../TableLayout/TableLayout";
import Tables from "../Tables/Tables";
import ChartLayout from "../../Charts/ChartLayout/ChartLayout";
import BarChart from "../../Charts/BarChart";

import { columns } from "../../../data/tablecolumns";

const TableAndBarChart = ({ title, tableData, tableTitle, chartData }) => {
  return (
    <Fragment>
      <Title title={title} />
      <TableLayout>
        <Tables data={tableData} header={columns} title={tableTitle} />
      </TableLayout>
      <ChartLayout>
        <BarChart barData={chartData} />
      </ChartLayout>
    </Fragment>
  );
};

export default TableAndBarChart;
