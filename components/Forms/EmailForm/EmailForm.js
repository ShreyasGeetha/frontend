import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../redux/actions/userActions";

const EmailForm = () => {

  const dispatch = useDispatch();

  const setUserEmail = async (e) => {
    await dispatch(setEmail(e.target.value))
  }

  return (
    <>
       <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={setUserEmail}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </>
  );
}

export default EmailForm;