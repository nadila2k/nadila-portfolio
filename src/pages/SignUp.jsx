import React from "react";
import Form from "../components/Form";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignUp() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    toast.success("Success! This worked.");
    console.log(data);
  };

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message || "This field is required");
    });
  };
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      {" "}
      <div className="px-16 flex flex-col min-h-screen w-full items-center justify-center py-28 md:px-32 text-white ">
        <div
          className="flex flex-col items-center justify-center gap-10 
                bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6"
        >
          <Form
            onSubmit={handleSubmit(onSubmit, onError)}
            header="Sign Up"
            buttonName="Sign Up"
          >
            <InputField
              label="Address"
              name="fullName"
              register={register("fullName", {
                required: "Full Name is required",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Invalid Full Name format",
                },
              })}
            />
            <InputField
              label="Full Name"
              name="address"
              register={register("address", {
                required: "Address is required",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Invalid Address format",
                },
              })}
            />
            <InputField
              label="Email"
              name="email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              register={register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </Form>
        </div>
      </div>
    </div>
  );
}
