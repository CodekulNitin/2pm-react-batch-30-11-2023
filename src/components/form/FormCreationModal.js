import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

function FormCreationModal(props) {
  const defaultValue = {
    "First Name": "",
    "Middle Name": "",
    "Last Name": "",
    gender: "Male",
    active: true,
    "Mobile Number": "",
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm({
    mode: "onChange",
    defaultValue,
  });
  const onSubmit = (data) => {
    console.log("datais", data);
    let tempArr = [...props.data];
    if (props.editRow !== null) {
      const indexToUpdate = tempArr.findIndex(
        (e) => e["First Name"] === props.editRow["First Name"]  
      );
      if (indexToUpdate !== -1) {
        tempArr[indexToUpdate] = data;
        props.setData(tempArr);
        reset(defaultValue);
      }
      console.log("filteris", indexToUpdate);
    } else {
      tempArr.push(data);
      props.setData(tempArr);
      reset(defaultValue);
      props.handleCloseFormCreationModal()
    }
  };
  useEffect(() => {
    if (props.editRow !== null) {
      setValue("First Name", props.editRow["First Name"]);
      setValue("Last Name", props.editRow["Last Name"]);
    }
  }, [props.editRow]);
  return (
    <div>
      <Modal
        open={props.openFormCreationModal}
        // onClose={handleCloseFormCreationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-[80%] h-[40%]">
          <div className="flex justify-between">
            <h1>User</h1>
            <button
              type="button"
              onClick={() => {
                props.handleCloseFormCreationModal();
                props.setEditRow(null);
              }}
            >
              <CancelIcon className="text-red-600" />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  //   value={age}
                  label="Age"
                >
                  <MenuItem value={10}>Mrs.</MenuItem>
                  <MenuItem value={20}>Miss</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="First Name"
                label="First Name"
                size="small"
                {...register("First Name")}
              />
              <TextField
                name="Middle Name"
                label="Middle Name"
                size="small"
                {...register("Middle Name")}
              />
              <TextField
                name="Last Name"
                label="Last Name"
                size="small"
                {...register("Last Name")}
              />
              <div className="flex space-x-2 items-center whitespace-nowrap">
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  sx={{ fontSize: "14px" }}
                >
                  <div>
                    <FormControlLabel
                      sx={{ fontSize: 14 }}
                      value="female"
                      control={<Radio size="small" />}
                      label="Female"
                    />
                    <FormControlLabel
                      sx={{ fontSize: 14 }}
                      value="male"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                    <FormControlLabel
                      sx={{ fontSize: 14 }}
                      value="other"
                      control={<Radio size="small" />}
                      label="Other"
                    />
                  </div>
                </RadioGroup>
              </div>
              <TextField
                name="Mobile Number"
                label="Mobile Number"
                size="small"
                {...register("Mobile Number")}
              />
              <TextField name="Age" label="Age" size="small" />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Active"
              />
            </div>
            <div className="flex justify-end mt-2">
              <Button type="sumbit" variant="contained">
                Save
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default FormCreationModal;
