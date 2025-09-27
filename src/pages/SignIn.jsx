import React, { useEffect } from "react";
import AuthFromCard from "../components/Form";
import { useForm } from "react-hook-form";
import { register } from "react-scroll/modules/mixins/scroller";
import toast from "react-hot-toast";
import InputField from "../components/InputField";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { Roles } from "../features/auth/roles";

export default function SignIn() {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token && user) {
      if (user.role === Roles.ADMIN) {
        navigate("/admin-dashboard", { replace: true });
      } else if (user.role === Roles.CUSTOMER) {
        navigate("/customer-dashboard", { replace: true });
      }
    }
  }, [token, user, navigate]);

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === "admin@example.com" && password === "admin123") {
      dispatch(
        setCredentials({
          user: { email, role: Roles.ADMIN },
          token: "fake-jwt-token",
        })
      );
      toast.success("Welcome Admin 🚀");
      navigate("/admin-dashboard");
    } else if (email === "user@example.com" && password === "user123") {
      dispatch(
        setCredentials({
          user: { email, role: Roles.CUSTOMER },
          token: "fake-jwt-token",
        })
      );
      toast.success("Welcome User 🎉");
      navigate("/customer-dashboard");
    } else {
      toast.error("Invalid email or password");
    }
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
            header="Sign In"
            buttonName="Sign In"
          >
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
          <p>
            Don't have an account?{" "}
            <a href="/auth/sign-up" className="text-sky-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
