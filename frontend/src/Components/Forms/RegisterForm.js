import React from "react";
import { Link } from "react-router-dom";

export const RegisterForm = () =>{
return(

<div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8  py-2 mx-auto h-full text-white bg-slate-900 ">
<div className="w-full m-10 md:p-10 rounded-lg md:mt-0 sm:max-w-md xl:p-0">
<div className="p-6 shadow-lg bg-slate-700 space-y-4 md:space-y-6 sm:p-8">
<h1 className="text-center font-Lora text-xl md:text-2xl ">Sign Up </h1>
 <form className="space-y-4 md:space-y-6">
   <div className="">
        <div className="mb-6">
        <label className="block mb-2 text-sm font-medium  ">Enter First Name</label>
        <input name="firstname" placeholder="First Name" className="block w-full p-2.5"    required />
     </div>
          <div className="mb-6">
        <label className="block mb-2 text-sm font-medium  ">Enter Last Name</label>
        <input name="lastname" placeholder="Last Name" className="block w-full p-2.5"   required />
     </div>
     <div className="mb-6">
        <label className="block mb-2 text-sm font-medium  ">Your email</label>
        <input name="email" placeholder="email" className="block w-full p-2.5" type="email" id="email"  required />
     </div>
     <div class="mb-3">
      <label className="block mb-2 text-sm font-medium ">Your password</label>
      <input name="password" placeholder="password" className="block w-full p-2.5" type="password" id="password" required />
    </div>
         <div class="mb-3">
      <label className="block mb-2 text-sm font-medium ">Confirm password</label>
      <input name="confirm_password" placeholder="confirm your password" className="block w-full p-2.5" type="password" id="password" required />
    </div>

  </div>
  <div >
    <button className="w-full py-2 px-5 hover:font-bold bg-green-600 hover:bg-green-800  text-xl text-center" type="submit" >Submit</button>

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

