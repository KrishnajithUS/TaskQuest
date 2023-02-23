import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { loginSchema } from "../../Schema/Validation";
import useAxios from "../../Axios/AxiosInstance/useAxios";
import { useFormik } from 'formik';


export const LoginForm = () => {
  const axiosInstance = useAxios()
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };
  // eslint-disable-next-line operator-linebreak
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, actions) => {
        try {
          const response = await axiosInstance.post(`/loginview/`, {
            email: values.email,
            password: values.password,
          });


          if (response.status === 200 && response.data.is_admin) {

            localStorage.setItem('AuthToken', response.data.token)
            localStorage.setItem('userDetails', JSON.stringify(response.data.context))

            navigate('/adminhome');
          } else if (response.status === 200) {

            localStorage.setItem('AuthToken', response.data.token)
            localStorage.setItem('userDetails', JSON.stringify(response.data.context))
            console.log(response.data)
            navigate('/userprofile');
          } else {
            alert('Invalid Credentials');
          }



        } catch (err) {
          if (err.response) {
            alert('Invalid Credentials');
          }
        }
        actions.resetForm();
      },
    });
  return (
    <div className="h-screen text-white bg-slate-900 flex flex-col  px-6 py-8 items-center justify-center">
      <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 shadow-lg bg-slate-700 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-center font-Lora text-xl md:text-2xl ">Sign in </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium  ">Your email</label>
                <input name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="email" className="block bg-slate-900 w-full p-2.5" type="email" id="email" required />
                {errors.email && touched.email ? (
                  <p className="form-error text-red-600">{errors.email}</p>
                ) : null}
              </div>
              <div class="mb-3">
                <label className="block mb-2 text-sm font-medium ">Your password</label>
                <input name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="password" className="block bg-slate-900 w-full p-2.5" type="password" id="password" required />

                {errors.password && touched.password ? (
                  <p className="form-error text-red-600">{errors.password}</p>
                ) : null}
              </div>

            </div>
            <div >
              <button type="submit" className="w-full py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

            </div>
            <div className="">
              <div className="flex flex-col justify-center">
                <div className="text-muted text-center">Don't have an account ?</div>
                <div class="text-muted text-center hover:cursor-pointer">
                  <Link to="/register" className="text-slate-100 hover:text-green-500 font-bold">Register now</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}