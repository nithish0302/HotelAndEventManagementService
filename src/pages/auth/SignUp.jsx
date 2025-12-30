import InputTypeWithLabel from "../../components/common/InputTypeWithLabel";
import { User, Mail, LogIn } from "lucide-react";
import PasswordInput from "../../components/common/PasswordInput";
import SignUpImage from "../../assets/SignUp.jpeg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../config/routes";
import toast from "react-hot-toast";
import { signupApi } from "../../api/auth.api";
import { useAuth } from "../../context/AuthContext";
import { MdWarning } from "react-icons/md";

// Google Icon Component
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

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate(routes.admin.dashboard, { replace: true });
      } else if (user.role === "vendor") {
        navigate(routes.vendor.dashboard, { replace: true });
      } else {
        navigate(routes.user.dashboard, { replace: true });
      }
    }
  }, [user, navigate]);

  // Clear errors when user types
  const handleNameChange = (e) => {
    setUserName(e.target.value);
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.name = "Name is required";
    } else if (userName.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (userName.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    if (!userEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast("Please fix the errors in the form", {
        icon: <MdWarning className="text-yellow-600 text-xl" />,
        style: {
          background: "#FFF8E1",
          color: "#92400E",
          border: "1px solid #FDE68A",
        },
      });
      return;
    }

    setIsLoading(true);

    try {
      const res = await signupApi({
        name: userName,
        email: userEmail,
        password: password,
        role: isOrganizer ? "vendor" : "user",
      });

      const { user, token } = res.data;

      // Save token
      localStorage.setItem("token", token);

      // Login user
      login(user);

      // Show success message
      toast.success("Account created successfully!");

      // Navigate based on role
      if (user.role === "admin") {
        navigate(routes.admin.dashboard, { replace: true });
      } else if (user.role === "vendor") {
        navigate(routes.vendor.dashboard, { replace: true });
      } else {
        navigate(routes.user.dashboard, { replace: true });
      }
    } catch (err) {
      console.error("error Occurred", err);
      const errorMessage =
        err?.response?.data?.message ||
        "Failed to create account. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-900 font-cosmic">
      {/* Left Side - Image & Text Section */}
      <div className="w-full lg:w-1/2 h-48 md:h-80 lg:h-screen xl:h-screen 2xl:h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SignUpImage})` }}
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
          <div className="hidden lg:block">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-slate-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Your Next Great Experience Awaits
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-6 leading-relaxed">
              Join thousands of event enthusiasts who trust us to make their
              special moments unforgettable.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-50 rounded-full mr-2"></div>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-50 rounded-full mr-2"></div>
                <span>Best Prices</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-slate-50 rounded-full mr-2"></div>
                <span>24/7 Support</span>
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
              Sign Up
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400">
              Let's sign up quickly to book the event
            </p>
          </div>

          {/* Form Fields */}
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div>
              <InputTypeWithLabel
                label="User Name"
                id="name"
                type="text"
                placeholder="Enter your name"
                inputClassName={`rounded-lg placeholder:font-sans ${
                  errors.name ? "border-red-500" : ""
                }`}
                icon={User}
                value={userName}
                onChange={handleNameChange}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={isLoading}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <InputTypeWithLabel
                label="Email"
                id="email"
                type="email"
                placeholder="Enter your email"
                inputClassName={`rounded-lg placeholder:font-sans ${
                  errors.email ? "border-red-500" : ""
                }`}
                icon={Mail}
                value={userEmail}
                onChange={handleEmailChange}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isLoading}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <PasswordInput
                label="Password"
                id="password"
                placeholder="Enter your password"
                inputClassName={`rounded-lg placeholder:font-sans ${
                  errors.password ? "border-red-500" : ""
                }`}
                value={password}
                onChange={handlePasswordChange}
                aria-required="true"
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                disabled={isLoading}
              />
              {errors.password && (
                <p id="password-error" className="text-red-400 text-sm mt-1">
                  {errors.password}
                </p>
              )}
              <p className="text-xs text-slate-400 mt-1">
                Must contain uppercase, lowercase, and a number
              </p>
            </div>

            {/* Organizer Checkbox */}
            <div className="relative flex w-full items-start gap-3 rounded-md border border-slate-600 bg-slate-800/30 p-3 shadow-sm">
              <input
                type="checkbox"
                id="organizer"
                checked={isOrganizer}
                onChange={(e) => setIsOrganizer(e.target.checked)}
                disabled={isLoading}
                className="h-5 w-5 mt-1 accent-blue-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              />
              <div className="grid gap-1">
                <label
                  htmlFor="organizer"
                  className="font-semibold text-sm text-gray-200 cursor-pointer"
                >
                  Do you want to be an event organizer?{" "}
                  <span className="text-xs text-gray-400 font-normal">
                    (Optional)
                  </span>
                </label>
                <p className="text-xs text-gray-400">
                  Tick this if you're signing up as an organizer.
                </p>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-3/4 md:w-1/2 text-white py-3 px-6 rounded-3xl 
                bg-blue-600 
                hover:bg-blue-700 
                disabled:bg-blue-400 disabled:cursor-not-allowed
                transition-all duration-200 
                font-medium flex items-center justify-center text-base 
                shadow-lg hover:shadow-xl 
                mx-auto mt-6"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating account...
                </>
              ) : (
                <>
                  Sign Up
                  <LogIn className="ml-2" size={18} />
                </>
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mt-6">
            <p className="text-sm sm:text-base text-slate-400">
              Already have an account?
            </p>
            <button
              className="hover:underline text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => navigate(routes.auth.signin)}
              disabled={isLoading}
            >
              Sign in
            </button>
          </div>

          {/* Divider */}
          <div className="relative mt-6 font-sans">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Sign In - Disabled */}
          <button
            type="button"
            disabled
            className="w-full sm:w-3/4 py-3 px-6 rounded-2xl transition-all duration-200 font-medium flex items-center justify-center bg-slate-800 text-slate-200 border border-slate-700 text-base shadow-lg mx-auto mt-6 opacity-50 cursor-not-allowed"
            title="Google sign-in coming soon"
          >
            <GoogleIcon />
            Sign in with Google (Coming Soon)
          </button>

          {/* Security Notice */}
          <div className="text-center mt-6 font-sans">
            <p className="text-xs text-slate-500">
              By signing up, you agree to our{" "}
              <a
                href="/terms"
                className="text-blue-400 hover:text-blue-300 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300 hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
