import React, { Fragment } from "react";

const ChartLayout = ({ children }) => {
  return (
    <Fragment>
      <div
        style={{
          margin: "1rem",
          width: 1000,
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ChartLayout;
