"use client"
import { toggleForgot, toggleLogin } from "@redux/UserForm";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function PasswordModal() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function passwordHandler() {
    dispatch(toggleLogin());
    dispatch(toggleForgot());
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
            onClick={passwordHandler}
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
            <h3 className="mb-4 text-center text-xl font-bold ">
              Forgot Password
            </h3>
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
                  Please Enter Your Registered Email
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
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get Verification Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <label htmlFor="email" className="mb-2 block text-sm font-medium ">
    //         Please Enter Your Registered Email
    //       </label>
    //       <input
    //         name="email"
    //         {...register("email", {
    //           required: "Email Is Required!",
    //           pattern: {
    //             value:
    //               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //             message: "Please Enter A Valid Email!",
    //           },
    //         })}
    //         id="email"
    //         className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 "
    //         placeholder="name@mail.com"
    //       />
    //       <p className=" my-2 text-center text-red-600">
    //         {errors?.email ? `${errors.email.message}` : ""}
    //       </p>
    //     </div>
    //     <button
    //       type="submit"
    //       className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     >
    //       Get Verification Link
    //     </button>
    //   </form>
    // </div>
  );
}

export default PasswordModal;
