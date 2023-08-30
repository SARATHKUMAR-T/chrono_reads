"use client";

import { toggleLogin, toggleSignup } from "@redux/UserForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Loader from "./Loader";

function SignupModal() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isLoading, mutate } = useMutation(
    data => axios.post("api/signup", data),
    {
      onSuccess: handleSuccess,
      onError: handleError,
    }
  );

  function handleSuccess(responseData) {
    toast.success(responseData.data.message);
    setTimeout(() => {
      toast.success("please login to continue");
    }, 1000);
    localStorage.setItem("token", responseData.data.token);
    dispatch(toggleSignup());
    reset();
    dispatch(toggleLogin());
  }

  function handleError(errorData) {
    toast.error(errorData.response.data.message);
  }

  async function onSubmit(data) {
    mutate(data);

    // const res = await fetch("api/signup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const result = await res.json();
    // console.log(result);
  }

  function loginHandler() {
    dispatch(toggleSignup());
    dispatch(toggleLogin());
  }
  return (
    <div
      id="authentication-modal"
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex max-h-full w-full items-center  justify-center overflow-y-auto overflow-x-hidden p-4 backdrop-blur-lg md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-md">
        <div className="relative rounded-lg bg-slate-100 text-black shadow">
          <button
            type="button"
            onClick={() => dispatch(toggleSignup())}
            className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm duration-300 hover:bg-blue-700 hover:text-gray-900 "
            data-modal-hide="authentication-modal"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-center text-xl font-bold ">Signup</h3>
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              action="#"
            >
              {/*  name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium  "
                >
                  First Name
                </label>
                <input
                  id="name"
                  {...register("name", {
                    required: "Name  Is Required!",
                  })}
                  placeholder="jhon"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
                />
                {errors?.Name && (
                  <p className=" text-center text-red-600">
                    {errors.Name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium "
                >
                  Your email
                </label>
                <input
                  name="email"
                  {...register("email", {
                    required: "Email Is Required!",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please Enter A Valid Email!",
                    },
                  })}
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 "
                  placeholder="name@mail.com"
                />
                <p className="  text-center text-red-600">
                  {errors?.email ? `${errors.email.message}` : ""}
                </p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium  "
                >
                  Your password
                </label>
                <input
                  name="password"
                  id="password"
                  {...register("password", {
                    required: "Password Is Required!",
                  })}
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
                />
                {errors?.password && (
                  <p className=" text-center text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-wait disabled:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
              {isLoading && (
                <div className="flex justify-center ">
                  <Loader />
                </div>
              )}
            </form>
            <div className="mt-4 text-sm font-medium ">
              Already Have An Account?{" "}
              <button
                onClick={loginHandler}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
