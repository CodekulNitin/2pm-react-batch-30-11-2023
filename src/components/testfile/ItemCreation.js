import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import AddItemCreationModal from "./AddItemCreationModal";

function ItemCreation() {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  return (
    <div className="p-10">
      <div className="flex justify-between items-center space-x-2">
        <div className="flex space-x-2 items-center w-5/12">
          <TextField
            size="small"
            fullWidth
            label="Search by ItemName/ItemCode"
          />
          <button
            type="button"
            className="bg-indigo-900 text-white rounded p-2"
          >
            <SearchIcon />
          </button>
        </div>
        <button
          className="bg-indigo-900 text-white p-2 rounded whitespace-nowrap"
          onClick={()=>{handleOpenModal()
          setEditRow(null)
          }}
        >
          + Add
        </button>
      </div>
      <div className="mt-2">
        {tableData.length > 0 ? (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ backgroundColor: "lightgray" }}>
                      Actions
                    </TableCell>
                    <TableCell style={{ backgroundColor: "lightgray" }}>
                      Item Name
                    </TableCell>
                    <TableCell style={{ backgroundColor: "lightgray" }}>
                      Item Code
                    </TableCell>
                    <TableCell style={{ backgroundColor: "lightgray" }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((item,index) => {
                    return (
                      <TableRow hover tabIndex={-1}>
                        <TableCell>
                          <div className="flex space-x-2 items-center">
                            <button
                              type="button"
                              onClick={() => {
                                console.log("Selected Row", item);
                                setEditRow(item)
                                setOpenModal(true)
                              }}
                            >
                              Edit
                            </button>
                            <button>Delete</button>
                          </div>
                        </TableCell>

                        <TableCell>{item["Item Name"]}</TableCell>
                        <TableCell>{item["Item Code"]}</TableCell>

                        <TableCell>
                          {item.Status === true ? (
                            <h1 className="border border-green-600 text-green-600 w-3/12 text-center rounded">
                              Active
                            </h1>
                          ) : (
                            <h1 className="border border-red-600 text-red-600 w-[27%] text-center rounded">
                              InActive
                            </h1>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ) : (
          <h1 className="my-28 text-center">No Records Added...</h1>
        )}
      </div>
      <AddItemCreationModal
        handleOpenModal={openModal}
        handleCloseModal={handleCloseModal}
        data={tableData}
        setData={setTableData}
        editRow={editRow}
        setEditRow={setEditRow}
      />
    </div>
  );
}

export default ItemCreation;
