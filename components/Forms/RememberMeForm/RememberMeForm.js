import ForgotPassword from "./ForgotPassword";

const RememberMeForm = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-header focus:ring-header border-red-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <ForgotPassword />
      </div>
    </>
  );
}

export default RememberMeForm;