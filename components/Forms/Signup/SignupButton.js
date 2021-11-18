import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSignupForm } from "../../../redux/actions/ShowSignupFormAction";
import SignupModal from "./SignupModal";

const Signup = () => {

  const dispatch = useDispatch();
  const shouldShowSignupForm = useSelector(state => state.shouldShowSignupForm);

  const signUpForm = async () => {
    console.log('1')
    await dispatch(showSignupForm(!shouldShowSignupForm))    
  }

  return (
    <>
      <button
        type="button"
        onClick={signUpForm}
        className="inline-flex items-center ml-2 px-3 py-3.5 border border-transparent  text-xs font-extrabold rounded-full shadow-sm text-white bg-header hover:bg-white hover:text-header ">
        Signup
      </button>
    {shouldShowSignupForm && <div>
        <SignupModal />
    </div>}
    </>
  );
}

export default Signup;