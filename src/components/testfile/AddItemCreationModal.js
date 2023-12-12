import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useEffect } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  //   border: '2px solid #000',

  boxShadow: 24,
  p: 2,
};

export default function BasicModal(props) {
  const [itemName, setItemName] = React.useState("");
  const [itemCode, setItemCode] = React.useState("");
  const [status, setStatus] = React.useState(true);

  console.log("itemName", itemName);
  const handleAddData = () => {
    let tempArr = [...props.data];
    if(props.editRow === null){
      let obj = {
        "Item Name": itemName,
        "Item Code": itemCode,
        Status: status,
      };
      tempArr.push(obj);
      console.log(tempArr);
      props.setData(tempArr);
    }else{
      // update 

      
    }
    setItemName("");
    setItemCode("");
    setStatus(true);
    props.handleCloseModal();
  };
  console.log("editedRow", props.editRow);

  useEffect(() => {
    if (props.editRow !== null) {
      setItemName(props.editRow["Item Name"]);
      setItemCode(props.editRow["Item Code"]);
      setStatus(props.editRow.Status);
    }
  }, [props.editRow, itemName]);

  return (
    <div>
      <Modal
        open={props.handleOpenModal}
        //
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded">
          <div className="flex justify-between">
            <h1>Item Creation</h1>
            <button
              type="button"
              className="border border-red-600 text-red-600 rounded"
              onClick={() => {
                props.handleCloseModal();
                props.setEditRow(null);
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex space-x-2 mt-4">
            <TextField
              fullWidth
              size="small"
              label="Item Name"
              defaultValue={itemName}
              onChange={(event) => {
                setItemName(event.target.value);
              }}
            />
            <TextField
              fullWidth
              size="small"
              defaultValue={itemCode}
              label="Item Code"
              onChange={(event) => {
                setItemCode(event.target.value);
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={status}
                  onChange={(e) => {
                    console.log("checkboxvalue", e.target.checked);
                    setStatus(e.target.checked);
                  }}
                />
              }
              label="Active"
            />
          </div>
          <div className="mt-1 text-end">
            <button
              className="bg-green-600 text-white rounded p-2"
              type="button"
              onClick={handleAddData}
            >
              {props.editRow === null ? <span>Save</span> : <span>Update</span>}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
