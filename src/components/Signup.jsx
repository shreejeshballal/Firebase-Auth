import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4 border-2 border-black" >
      <div>
        <h1 className="text-2xl font-bold py-2">Sign up for a free account</h1>
        <p className="py-2">
          Already have an account yet? <Link to="/" className="underline">Sign in</Link>
        </p>
      </div>
      <form>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address:</label>
          <input type="email" className="border p-3" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password:</label>
          <input type="password" className="border p-3" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white transition-all">
          {"Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
