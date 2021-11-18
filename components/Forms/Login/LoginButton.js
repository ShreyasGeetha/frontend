import { useDispatch, useSelector } from "react-redux";
import { showLoginForm } from "../../../redux/actions/ShowLoginFormAction";
import LoginModal from "./LoginModal";

const Login = () => {

  const dispatch = useDispatch();
  const shouldShowLoginForm = useSelector(state => state.shouldShowLoginForm);
  
  const loginForm = async () => {
    await dispatch(showLoginForm(!shouldShowLoginForm))    
  }
  return (
    <>
      <button
        type="button"
        onClick={loginForm}
        className="inline-flex items-center ml-2 px-3 py-3.5 border border-transparent  text-xs font-extrabold rounded-full shadow-sm text-white bg-header hover:bg-white hover:text-header ">
        Login
      </button>
    {console.log('it should show',{shouldShowLoginForm})}
    {shouldShowLoginForm && <div>
      <LoginModal />
    </div>}
    </>
  );
}

export default Login;