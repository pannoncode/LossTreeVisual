import React, { Fragment } from "react";

import Title from "../../UI/Title/Title";
import TableLayout from "../TableLayout/TableLayout";
import Tables from "../Tables/Tables";
import PieLayout from "../../Charts/ChartLayout/PieLayout";
import PieChart from "../../Charts/PieChart";

import { columns } from "../../../data/tablecolumns";

const TableAndPieChart = ({ title, tableData, tableTitle, chartData }) => {
  return (
    <Fragment>
      <Title title={title} />
      <TableLayout>
        <Tables data={tableData} header={columns} title={tableTitle} />
      </TableLayout>
      <PieLayout>
        <PieChart pieData={chartData} />
      </PieLayout>
    </Fragment>
  );
};

export default TableAndPieChart;
