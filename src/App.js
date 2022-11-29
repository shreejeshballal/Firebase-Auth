import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Account from "./components/Account";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-4">
        Firebase Auth & Context
      </h1>
      <Routes>
        <Route>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
