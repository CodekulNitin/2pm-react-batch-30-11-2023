import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export default function BasicModal(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const handleAddData = (dataObj) => {
    let tempArr = [...props.data];
    tempArr.push(dataObj);
    props.setData(tempArr);
    props.handleCloseModal();
    reset();
  };
  console.log("editedRow", props.editRow);

  useEffect(() => {
    if (props.editRow !== null) {
      setValue("Item Name", props.editRow["Item Name"]);
      setValue("Item Code", props.editRow["Item Code"]);
      setValue("Status", props.editRow["Status"]);
    }
  }, [props.editRow]);

  console.log("props.editRow", props.editRow);
  
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
                reset();
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <form onSubmit={handleSubmit(handleAddData)}>
            <div className="flex space-x-2 mt-4">
              <TextField
                fullWidth
                size="small"
                label="Item Name"
                name="Item Name"
                {...register("Item Name")}
              />
              <TextField
                fullWidth
                size="small"
                name="Item Name"
                label="Item Code"
                {...register("Item Code")}
              />
              <input type="checkbox" name="Status" {...register("Status")} />
            </div>
            <div className="mt-1 text-end">
              <button
                className="bg-green-600 text-white rounded p-2"
                type="submit"
              >
                {props.editRow === null ? (
                  <span>Save</span>
                ) : (
                  <span>Update</span>
                )}
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
