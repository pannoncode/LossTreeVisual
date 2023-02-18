import React, { Fragment } from "react";

const PieLayout = ({ children }) => {
  return (
    <Fragment>
      <div
        style={{
          margin: "1rem",
          width: 500,
          height: 500,
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default PieLayout;
