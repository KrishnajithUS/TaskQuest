import React, { useState } from "react";
import { useFormik } from 'formik';
import useAxios from "../../Axios/AxiosInstance/useAxios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signUpSchema } from "../../Schema/Validation";

export const RegisterForm = () => {
  const axiosInstance = useAxios()
  const navigate = useNavigate();
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  const {
    values,

    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,

    onSubmit: async (values, actions) => {
      console.log(values.first_name);
      try {
        const response = await axiosInstance.post(`/registerview/`, {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          is_freelancer: true,
        }
        );
        if (response.status === 201) {
          navigate("/")
        }


      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('something went wrong');
      }
      actions.resetForm();
    },
  });

  return (

    <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8  py-2 mx-auto h-full text-white bg-slate-900 ">
      <div className="w-full m-10 md:p-10 rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 shadow-lg bg-slate-700 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-center font-Lora text-xl md:text-2xl ">Sign Up </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 ">
            <div className="">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Enter First Name</label>
                <input autoComplete="off"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="first_name" placeholder="First Name" className="block bg-slate-900 w-full p-2.5" required />

                {errors.first_name && touched.first_name ? (
                  <p className="form-error text-red-600">
                    {errors.first_name}
                  </p>
                ) : null}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Enter Last Name</label>
                <input name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  className="block bg-slate-900 w-full p-2.5" required />
                {errors.last_name && touched.last_name ? (
                  <p className="form-error text-red-600">
                    {errors.last_name}
                  </p>
                ) : null}
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Your email</label>
                <input name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block bg-slate-900 w-full p-2.5" type="email" id="email" required />
                {errors.email && touched.email ? (
                  <p className="form-error text-red-600">{errors.email}</p>
                ) : null}
              </div>
              <div class="mb-3">
                <label className="block mb-2 text-sm font-medium ">Your password</label>
                <input name="password"
                  placeholder="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full bg-slate-900 p-2.5" type="password" id="password" required />
                {errors.password && touched.password ? (
                  <p className="form-error text-red-600">{errors.password}</p>
                ) : null}
              </div>
              <div class="mb-3">
                <label className="block mb-2 text-sm font-medium ">Confirm password</label>
                <input name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="confirm your password"
                  className="block bg-slate-900 w-full p-2.5" type="password" id="password" required />
              </div>
              {errors.confirm_password && touched.confirm_password ? (
                <p className="form-error text-red-600">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
            <div >
              <button type="submit" className="w-full  py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

            </div>
            <div className="">
              <div className="flex flex-col justify-center">
                <div className="text-muted text-center">Already have an account ?</div>
                <div class="text-muted text-center hover:cursor-pointer">
                  <Link to="/" className="text-slate-100 hover:text-green-500 font-bold">Login now</Link>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>

  )

}

