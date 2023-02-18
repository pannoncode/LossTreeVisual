import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Title = ({ title }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
