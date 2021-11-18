import EmailForm from '../EmailForm/EmailForm';
import PasswordForm from '../PasswordForm/PasswordForm';
import RememberMeForm from '../RememberMeForm/RememberMeForm';
import SignInButton from './SignInButton';
import SocialNetworkLogin from './SocialNetworkLogin';


const LoginPage = () => {
  return (
    <>
      {/*Login Page  */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <span className="flex animate-pulse items-center m-auto font-medium tracking-wide text-red-500 text-xs">
            {/* Invalid username or password ! */}
          </span>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">            
            <EmailForm />
            <PasswordForm />
            
            <RememberMeForm />
            <SignInButton />
          </form>
          {/* Options to login through Social Network */}
          <SocialNetworkLogin />
        </div>
      </div>
    </>
  );
}

export default LoginPage;