"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { toggleForgot, toggleLogin, toggleSignup } from "@redux/UserForm";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setUser } from "@redux/UserSlice";
import { useState } from "react";
import Loader from "./Loader";

function LoginModal() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Form submission
  async function onSubmit(data) {
    // mutate(data);

    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log(res);

      if (res.error) {
        toast.error("Invalid Credentials");
        setIsLoading(false);
        return;
      }
      toast.success("Logged in Successfully");
      setIsLoading(false);
      dispatch(toggleLogin());
      router.replace("/post");
    } catch (error) {
      console.log(error);
    }
  }

  // const { isLoading, mutate } = useMutation(
  //   data => axios.post("api/login", data),
  //   {
  //     onSuccess: handleSuccess,
  //     onError: handleError,
  //   }
  // );

  // function handleSuccess(responseData) {
  //   toast.success(responseData.data.message);
  //   localStorage.setItem("token", responseData.data.token);
  //   reset();
  //   console.log(responseData);
  //   router.push("/post");
  //   dispatch(setUser(responseData.data.user));
  //   dispatch(toggleLogin());
  // }

  // function handleError(errorData) {
  //   toast.error(errorData.response.data.message);
  // }

  // handling signup
  function handleSignup() {
    dispatch(toggleLogin());
    dispatch(toggleSignup());
  }

  // login request
  // const { isLoading, mutate } = useMutation(
  //   (data) =>
  //     axios.post("http://localhost:9000/api/login", data).catch((error) => {
  //       throw error;
  //     }),
  //   {
  //     onSuccess: (data) => {
  //       toast.success(data.data.message);
  //       localStorage.setItem("token", data.data.token);
  //       reset();
  //       navigate("/dashboard");
  //     },
  //     onError: (data) => {
  //       console.log(data);
  //       toast.error(data.response.data.message);
  //     },
  //   },
  // );

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex max-h-full w-full items-center  justify-center overflow-y-auto overflow-x-hidden p-4 backdrop-blur-lg md:inset-0">
      <div className="relative max-h-full w-full max-w-md">
        <div className="relative rounded-lg bg-slate-100 text-black shadow">
          <button
            type="button"
            onClick={() => dispatch(toggleLogin())}
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
            <h3 className="mb-4 text-center text-xl font-bold ">Login</h3>
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              action="#"
            >
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
                <p className=" my-2 text-center text-red-600">
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
                  <p className="my-2 text-center text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-wait disabled:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {isLoading ? "Loading..." : " Login to your account"}
              </button>
              {isLoading && (
                <div className="flex justify-center ">
                  <Loader />
                </div>
              )}
            </form>
            <div className="mt-3 flex justify-between">
              <div className="flex items-start"></div>
              <button
                onClick={() => dispatch(toggleForgot())}
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </button>
            </div>
            <div className="mt-4 text-sm font-medium ">
              Not registered?{" "}
              <button
                onClick={handleSignup}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
