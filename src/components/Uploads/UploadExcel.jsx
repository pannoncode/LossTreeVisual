import Button from "@mui/material/Button";
import ReadExcel from "../../hooks/ReadExcel";

const UploadExcel = (props) => {
  const { uploadFileHandler } = ReadExcel();

  return (
    <Button
      variant="contained"
      component="label"
      sx={{ width: 208, marginTop: ".5rem" }}
    >
      {props.title}
      <input
        hidden
        accept="*"
        multiple
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          uploadFileHandler(file);
        }}
      />
    </Button>
  );
};

export default UploadExcel;
