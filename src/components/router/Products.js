import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet } from "react-router-dom";
import * as yup from "yup";
function Products() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Required"),
  });

  const {
    control,
    trigger,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    // defaultValues,
  });
console.log("erorrs",errors);
  const SubmitData = (dataObj) => {
    console.log("data", dataObj);
    trigger()
  };
  return (
    <div className="pt-16">
      <nav className="flex space-x-3">
        <Link to="productlist">Product List</Link>
        <Link to="newproductslist">New Product List</Link>
        <form>
          <TextField
            placeholder="First name"
            error={errors.firstName}
            {...register("firstName")}
          />

          <Button type="button" onClick={SubmitData}> Submit</Button>
        </form>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
