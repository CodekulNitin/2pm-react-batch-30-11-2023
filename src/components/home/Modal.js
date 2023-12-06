import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [itemNameValue, setItemNameValue] = React.useState("");
  const [finalData, setFinalData] = React.useState([]);
  const handleClose = () => props.setOpenModal(false);
  console.log("itemNameValue", itemNameValue);
  console.log("itemNameValue", finalData);

  const handleSubmit = () => {
    let tempArr = [...props.inalData];
    let obj = {
      itemName: itemNameValue,
    };
    tempArr.push(obj);
    props.setFinalData(tempArr);
    setItemNameValue("");
  };

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end">
            <button type="button" onClick={handleClose}>
              X
            </button>
          </div>
          <TextField
            label="Item Name"
            name="itemName"
            size="small"
            variant="standard"
            onChange={(e) => {
              setItemNameValue(e.target.value);
            }}
          />
          <button type="button" onClick={handleSubmit}>
            submit
          </button>
        </Box>
      </Modal>
    </div>
  );
}
