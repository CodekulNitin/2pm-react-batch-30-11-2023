import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import FormCreationModal from "./FormCreationModal";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function FormListing() {
  const [tableData, setTableData] = useState([]);
  const [openFormCreationModal, setOpenFormCreationModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editRow, setEditRow] = useState(null);
  const handleCloseFormCreationModal = () => setOpenFormCreationModal(false);
  console.log("deleteIndex", deleteIndex);

  const deleteRecord = () => {
    if (deleteIndex !== null) {
      let newTemplateData = [...tableData];
      newTemplateData.splice(deleteIndex, 1);
      setTableData(newTemplateData);
      setConfirmationModal(false);
      setDeleteIndex(null);
    }
  };
  return (
    <>
      <div className="p-5 flex justify-between items-center w-full">
        <div className="flex space-x-2 items-center w-full">
          <TextField
            name="searchList"
            label="FirstName/Mob Number"
            size="small"
          />
          <Button variant="contained">
            <SearchIcon />
          </Button>
        </div>
        <div className="w-full whitespace-nowrap flex justify-end">
          <Button
            type="button"
            variant="contained"
            onClick={() => {
              setOpenFormCreationModal(true);
            }}
          >
            + Add
          </Button>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Item Code</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((column, index) => {
                return (
                  <TableRow hover key={column.id}>
                    <TableCell>
                      <div className="flex space-x-3 ">
                        <button
                          onClick={() => {
                            setEditRow(column);
                            setOpenFormCreationModal(true)
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setDeleteIndex(index);
                            setConfirmationModal(true);
                          }}
                        >
                          delete
                        </button>
                      </div>
                    </TableCell>
                    <TableCell>{column["First Name"]}</TableCell>
                    <TableCell>{column["Last Name"]}</TableCell>
                    <TableCell>{column.cardName}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {openFormCreationModal ? (
        <FormCreationModal
          openFormCreationModal={openFormCreationModal}
          handleCloseFormCreationModal={handleCloseFormCreationModal}
          data={tableData}
          setData={setTableData}
          editRow={editRow}
          setEditRow={setEditRow}
        />
      ) : null}

      <Modal
        open={confirmationModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Are You Sure Want Delete Thise Reacord?</h2>
          <div className="flex justify-evenly mt-3">
            <button
              type="button"
              onClick={() => {
                setConfirmationModal(false);
              }}
              className="border border-red-600 text-red-600 rounded p-1"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={deleteRecord}
              className="bg-green-600 text-white rounded p-1"
            >
              Confirm
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default FormListing;
