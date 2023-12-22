import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, watch } = useForm();
  let firstNameValue = watch("First Name");
  const onSubmit = (dataobj) => {
    console.log("DataObj", dataobj);
  };
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target?.elements?.firstName?.value;
    const todo = {
      id: 4,
      text,
      done: false,
    };
    console.log("todo", todo);
    // setTodos((prevTodos) => {
    //   return prevTodos.concat(todo);
    // });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-10 grid gap-2 w-5/12">
        <TextField
          name="First Name"
          label="First Name"
          {...register("First Name")}
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
      </div>
      {firstNameValue}
      <form onSubmit={handleAddTodo}>
        <TextField type="text" name="firstName" />
        <button type="submit">Submit</button>
      </form>
    </form>
  );
}
