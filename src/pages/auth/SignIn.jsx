import { User, Mail, LogIn } from "lucide-react";
import SignInImage from "../../assets/SignIn.jpg";
import { useState } from "react";
import InputTypeWithLabel from "../../components/InputTypeWithLabel";
import { useNavigate } from "react-router-dom";

import PasswordInput from "../../components/PasswordInput";
import routes from "../../config/routes";
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-900 font-cosmic">
      {/* Left Side - Image & Text Section */}
      <div className="w-full lg:w-1/2 h-48 md:h-80 lg:h-screen xl:h-screen 2xl:h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SignInImage})` }}
        />

        {/* Gradient fallback for mobile */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 lg:bg-opacity-30" />

        {/* Circles / Pattern */}
        <div className="absolute inset-0 opacity-10 lg:opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-slate-50"></div>
          <div className="absolute bottom-20 right-16 w-24 h-24 rounded-full border-2 border-slate-50"></div>
          <div className="absolute top-1/2 right-8 w-16 h-16 rounded-full border border-slate-50"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-slate-50 p-4 lg:p-8 max-w-md mx-auto">
          {/* Mobile View */}
          <div className="block lg:hidden">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome!</h2>
            <p className="text-base sm:text-lg opacity-90">
              Ready for your next adventure?
            </p>
          </div>

          {/* Desktop View */}
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-slate-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8l4 4-4 4-4-4 4-4z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Where Expectations Start Here
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-6 leading-relaxed text-white">
              The world's most incredible experiences are waiting. Your
              adventure starts the moment you sign in.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-300 rounded-full mr-2"></div>
                <span>Global Access</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-50 rounded-full mr-2"></div>
                <span>Verified Quality</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-50 rounded-full mr-2"></div>
                <span>Lightning Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Dark Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-slate-900 p-4 sm:p-6 lg:p-8 lg:py-8 mt-2">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Sign In
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400">
              Welcome back! Please enter your details
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 -mt-1 lg:-mt-1">
            <InputTypeWithLabel
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              inputClassName="rounded-lg placeholder:font-sans"
              icon={Mail}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <PasswordInput
              label="Password"
              id="password"
              placeholder="Enter your password"
              inputClassName="rounded-lg placeholder:font-sans"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-blue-600 cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <button className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                Forgot password?
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="button"
            className="w-[50%] text-white py-3 px-6 rounded-3xl bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:ring-4 focus:ring-blue-600/20 transition-all duration-200 font-medium flex items-center justify-center text-base shadow-lg hover:shadow-xl mx-auto -mt-1"
          >
            Sign In
            <LogIn className="ml-2" size={18} />
          </button>

          {/* Sign Up Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 -mt-2">
            <p className="text-sm sm:text-base text-slate-400">
              Don't have an account?
            </p>
            <button
              className="hover:underline text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors font-medium"
              onClick={() => navigate(routes.auth.singup)}
            >
              Sign up for free
            </button>
          </div>

          {/* Divider */}
          <div className="relative -mt-1 font-sans">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-[75%] py-3 px-6 rounded-2xl transition-all duration-200 font-medium flex items-center justify-center bg-slate-800 text-slate-200 hover:bg-slate-700 focus:bg-slate-700 focus:ring-4 focus:ring-slate-600/20 border border-slate-700 hover:border-slate-600 text-base shadow-lg hover:shadow-xl mx-auto -mt-2"
          >
            <GoogleIcon />
            Sign in with Google
          </button>

          {/* Security Notice */}
          <div className="text-center mt-6 font-sans">
            <p className="text-xs text-slate-500">
              By signing in, you agree to our{" "}
              <button className="text-blue-400 hover:text-blue-300 hover:underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-blue-400 hover:text-blue-300 hover:underline">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
