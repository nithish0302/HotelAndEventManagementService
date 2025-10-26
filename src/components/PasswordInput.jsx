import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import InputTypeWithLabel from "./InputTypeWithLabel";

const PasswordInput = ({
  label,
  id,
  value,
  onChange,
  labelClassName = "",
  inputClassName = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Simple password strength scoring
  const validations = {
    length: value.length >= 8,
    number: /\d/.test(value),
    lowercase: /[a-z]/.test(value),
    uppercase: /[A-Z]/.test(value),
  };

  const strength = Object.values(validations).filter(Boolean).length;

  const strengthLabel =
    strength <= 1
      ? "Weak"
      : strength === 2
      ? "Fair"
      : strength === 3
      ? "Good"
      : "Strong";

  const strengthColor =
    strength <= 1
      ? "text-red-500"
      : strength === 2
      ? "text-orange-500"
      : strength === 3
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div className="relative w-full">
      {/* Input with label */}
      <div className="relative">
        <InputTypeWithLabel
          label={label}
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={props.placeholder}
          icon={Lock}
          labelClassName={`${labelClassName}`}
          inputClassName={`pr-12 [&::-ms-reveal]:hidden [&::-ms-clear]:hidden [&::-webkit-credentials-auto-fill-button]:hidden [&::-webkit-strong-password-auto-fill-button]:hidden ${inputClassName}`}
          {...props}
        />

        {/* Toggle button */}
        <button
          type="button"
          className="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer text-slate-200 hover:text-slate-100 z-10"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>

      {/* Strength bar */}
      <div className="w-full flex gap-2 mt-3">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded transition-colors duration-300 ${
              index < strength
                ? strength <= 1
                  ? "bg-red-500"
                  : strength === 2
                  ? "bg-orange-500"
                  : strength === 3
                  ? "bg-yellow-500"
                  : "bg-green-500"
                : "bg-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Strength label (always reserved space) */}
      <p className="mt-1 text-xs md:text-sm text-slate-300 min-h-[20px] mt-2 ">
        {value.length > 0 ? (
          <>
            Password strength:{" "}
            <span className={strengthColor}>{strengthLabel}</span>
          </>
        ) : (
          "" // keeps the space but empty
        )}
      </p>
    </div>
  );
};

export default PasswordInput;
