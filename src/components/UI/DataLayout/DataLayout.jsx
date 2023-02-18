import React from "react";
import Paper from "@mui/material/Paper";

const DataLayout = ({ children }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        padding: "1rem",
        width: "80vw",
        margin: "auto",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </Paper>
  );
};

export default DataLayout;
