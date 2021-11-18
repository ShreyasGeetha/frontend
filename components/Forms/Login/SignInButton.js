import { useDispatch, useSelector } from 'react-redux';
import { exitLoginForm } from '../../../redux/actions/ShowLoginFormAction';
import { login } from '../../../redux/actions/userActions';

const SignInButton = () => {

  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const userLogin = useSelector(state => state.userLogin)
  const shouldShowLoginForm = useSelector(state => state.shouldShowLoginForm);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault()
    //Dispatch Login
    await dispatch(login(email, password))
    if (userLogin) {
      await dispatch(exitLoginForm(!shouldShowLoginForm)) 
    }
  }

  return (
    <div>      
      <div>
        <button
          type="submit"
          onClick={submitHandler}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-header hover:transition duration-500 hover:scale-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignInButton;