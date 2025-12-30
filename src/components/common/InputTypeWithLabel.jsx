// import React from "react";
// import { Mail, Lock, User } from "lucide-react"; // example icons

// const InputTypeWithLabel = ({
//   label,
//   id,
//   icon: Icon,
//   labelClassName = "",
//   inputClassName = "",
//   ...props
// }) => {
//   return (
//     <div className="space-y-2">
//       <label
//         htmlFor={id}
//         className={`block text-sm font-medium text-slate-300 ${labelClassName} `}
//       >
//         {label}
//       </label>
//       <div className="relative">
//         {Icon && (
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <Icon className="h-5 w-5 text-slate-400" />
//           </div>
//         )}
//         <input
//           id={id}
//           className={`w-full bg-slate-800/50 text-slate-100 placeholder-slate-400 border-slate-600 hover:border-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 py-3 ${
//             Icon ? "pl-12" : "pl-4"
//           } pr-4 ${inputClassName}`}
//           {...props}
//         />
//       </div>
//     </div>
//   );
// };

// export default InputTypeWithLabel;
import React from "react";
import { Mail, Lock, User } from "lucide-react"; // example icons

const InputTypeWithLabel = ({
  label,
  id,
  icon: Icon,
  labelClassName = "",
  inputClassName = "",
  ...props // This spreads all other props including aria-* attributes
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-slate-300 ${labelClassName}`}
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-slate-400" />
          </div>
        )}
        <input
          id={id}
          className={`w-full bg-slate-800/50 text-slate-100 placeholder-slate-400 border border-slate-600 rounded-lg hover:border-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 py-3 ${
            Icon ? "pl-12" : "pl-4"
          } pr-4 ${inputClassName}`}
          {...props} // This passes all props including aria-required, aria-invalid, aria-describedby, disabled, etc.
        />
      </div>
    </div>
  );
};

export default InputTypeWithLabel;
