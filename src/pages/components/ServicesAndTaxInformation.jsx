// import React, { useState } from "react";
// import { FileText, Hotel, Sparkles, Check, Plus, X } from "lucide-react";
// import InputTypeWithLabel from "../../components/common/InputTypeWithLabel";

// const ServicesAndTaxInformation = ({
//   formData,
//   errors,
//   handleChange,
//   toggleService,
//   serviceOptions = [],
// }) => {
//   const [customService, setCustomService] = useState("");

//   const handleAddCustomService = () => {
//     if (
//       customService.trim() &&
//       !formData.servicesOffered.includes(customService)
//     ) {
//       toggleService(customService.trim());
//       setCustomService("");
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
//         <FileText className="text-blue-500" />
//         Services & Tax Information
//       </h2>

//       {/* GST Number */}
//       <div>
//         <InputTypeWithLabel
//           label="GST Number"
//           id="gstNumber"
//           type="text"
//           placeholder="e.g., 29ABCDE1234F1Z5"
//           value={formData.gstNumber || ""}
//           onChange={(e) =>
//             handleChange("gstNumber", e.target.value.toUpperCase())
//           }
//           icon={FileText}
//           inputClassName={`w-full max-w-lg ${
//             errors?.gstNumber ? "border-red-500" : ""
//           }`}
//         />
//         {errors?.gstNumber && (
//           <p className="text-red-400 text-sm mt-1">{errors.gstNumber}</p>
//         )}
//       </div>

//       {/* PRICE RANGE - Shown for "hotel" AND "hotel and event" */}
//       {(formData.buinessType === "hotel" ||
//         formData.buinessType === "hotel and event") && (
//         <div className="space-y-4 p-4 bg-slate-800/40 rounded-lg border border-slate-700 animate-in fade-in slide-in-from-top-2">
//           <label className="block text-[16px] font-medium text-slate-300">
//             Room Price Range (Per Night) *
//           </label>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputTypeWithLabel
//               label="Min Price (₹)"
//               type="number"
//               value={formData.minPrice || ""}
//               onChange={(e) => handleChange("minPrice", e.target.value)}
//               inputClassName={errors?.minPrice ? "border-red-500" : ""}
//             />
//             <InputTypeWithLabel
//               label="Max Price (₹)"
//               type="number"
//               value={formData.maxPrice || ""}
//               onChange={(e) => handleChange("maxPrice", e.target.value)}
//               inputClassName={errors?.maxPrice ? "border-red-500" : ""}
//             />
//           </div>
//           {errors?.minPrice && (
//             <p className="text-red-400 text-sm mt-1">{errors.minPrice}</p>
//           )}
//           {errors?.maxPrice && (
//             <p className="text-red-400 text-sm mt-1">{errors.maxPrice}</p>
//           )}
//         </div>
//       )}

//       {/* SERVICES - Shown for "event" AND "hotel and event" */}
//       {(formData.buinessType === "event" ||
//         formData.buinessType === "hotel and event") && (
//         <div className="space-y-4 animate-in fade-in duration-500">
//           <label className="block text-sm font-medium text-slate-300 mb-3">
//             Services Offered * (Select or Add New)
//           </label>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {/* Render Predefined Options */}
//             {serviceOptions.map((service) => {
//               const isSelected = formData.servicesOffered?.includes(service);
//               return (
//                 <button
//                   key={service}
//                   type="button"
//                   onClick={() => toggleService(service)}
//                   className={`p-3 rounded-lg border-2 text-left transition-all flex items-center gap-2 ${
//                     isSelected
//                       ? "border-blue-500 bg-blue-500/10 text-white"
//                       : "border-slate-600 bg-slate-800/50 text-slate-300"
//                   }`}
//                 >
//                   <div
//                     className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
//                       isSelected
//                         ? "bg-blue-500 border-blue-500"
//                         : "border-slate-500"
//                     }`}
//                   >
//                     {isSelected && <Check size={14} />}
//                   </div>
//                   <span className="text-sm">{service}</span>
//                 </button>
//               );
//             })}

//             {/* Custom Service Input Box */}
//             <div className="flex gap-2 p-1 bg-slate-800 rounded-lg border border-slate-600 focus-within:border-blue-500 transition-all">
//               <input
//                 type="text"
//                 placeholder="Add other services (e.g. Concerts)"
//                 // Removed InputTypeWithLabel to avoid double-labeling and extra padding
//                 className="bg-transparent border-none outline-none text-sm px-3 flex-1 text-white placeholder:text-slate-500 focus:ring-0"
//                 value={customService}
//                 onChange={(e) => setCustomService(e.target.value)}
//                 // Allow users to add by pressing 'Enter'
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     e.preventDefault(); // Prevent form submission
//                     handleAddCustomService();
//                   }
//                 }}
//               />
//               <button
//                 type="button"
//                 onClick={handleAddCustomService}
//                 className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors flex items-center justify-center shrink-0"
//                 title="Add Service"
//               >
//                 <Plus size={18} />
//               </button>
//             </div>
//           </div>

//           {/* List of added custom services that aren't in the default list */}
//           <div className="flex flex-wrap gap-2 mt-2">
//             {formData.servicesOffered
//               .filter((s) => !serviceOptions.includes(s))
//               .map((custom) => (
//                 <span
//                   key={custom}
//                   className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 text-blue-300 rounded-full text-base flex items-center gap-2 animate-in fade-in zoom-in-95"
//                 >
//                   {custom}
//                   <button
//                     type="button"
//                     onClick={() => toggleService(custom)}
//                     className="hover:text-white transition-colors p-0.5 rounded-full hover:bg-blue-500/30"
//                     title="Remove service"
//                   >
//                     {/* Using Lucide X icon instead of text '×' */}
//                     <X size={13} strokeWidth={3} />
//                   </button>
//                 </span>
//               ))}
//           </div>
//           {errors?.servicesOffered && (
//             <p className="text-red-400 text-base ">{errors.servicesOffered}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServicesAndTaxInformation;
import React, { useState } from "react";
import { FileText, Check, Plus, X } from "lucide-react";
import InputTypeWithLabel from "../../components/common/InputTypeWithLabel";

const ServicesAndTaxInformation = ({
  formData,
  errors,
  handleChange,
  toggleService,
  serviceOptions = [],
}) => {
  const [customService, setCustomService] = useState("");

  const handleAddCustomService = () => {
    if (
      customService.trim() &&
      !formData.servicesOffered.includes(customService)
    ) {
      toggleService(customService.trim());
      setCustomService("");
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <FileText className="text-blue-500" size={24} />
        Services & Tax Information
      </h2>

      {/* GST Number */}
      <div className="max-w-2xl">
        <InputTypeWithLabel
          label="GST Number"
          id="gstNumber"
          type="text"
          placeholder="e.g., 29ABCDE1234F1Z5"
          value={formData.gstNumber || ""}
          onChange={(e) =>
            handleChange("gstNumber", e.target.value.toUpperCase())
          }
          icon={FileText}
          labelClassName="text-[16px] font-medium mb-2"
          inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 ${
            errors?.gstNumber ? "border-red-500" : ""
          }`}
        />
        {errors?.gstNumber && (
          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
            {errors.gstNumber}
          </p>
        )}
      </div>

      {/* PRICE RANGE - Hotel context */}
      {(formData.buinessType === "hotel" ||
        formData.buinessType === "hotel and event") && (
        <div className="space-y-4 p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 animate-in fade-in slide-in-from-top-2">
          <label className="block text-[16px] font-medium text-slate-300">
            Room Price Range (Per Night) *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <InputTypeWithLabel
              label="Min Price (₹)"
              type="number"
              placeholder="0"
              value={formData.minPrice || ""}
              onChange={(e) => handleChange("minPrice", e.target.value)}
              labelClassName="text-sm text-slate-400"
              inputClassName={`w-full bg-slate-900 ${
                errors?.minPrice ? "border-red-500" : "border-slate-700"
              }`}
            />
            <InputTypeWithLabel
              label="Max Price (₹)"
              type="number"
              placeholder="0"
              value={formData.maxPrice || ""}
              onChange={(e) => handleChange("maxPrice", e.target.value)}
              labelClassName="text-sm text-slate-400"
              inputClassName={`w-full bg-slate-900 ${
                errors?.maxPrice ? "border-red-500" : "border-slate-700"
              }`}
            />
          </div>
          {(errors?.minPrice || errors?.maxPrice) && (
            <p className="text-red-400 text-xs flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
              {errors.minPrice || errors.maxPrice}
            </p>
          )}
        </div>
      )}

      {/* SERVICES - Event context */}
      {(formData.buinessType === "event" ||
        formData.buinessType === "hotel and event") && (
        <div className="space-y-4 animate-in fade-in duration-500">
          <label className="block text-[16px] font-medium text-slate-300">
            Services Offered *{" "}
            <span className="text-xs font-normal text-slate-500 ml-1">
              (Select all that apply)
            </span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            {/* Render Predefined Options */}
            {serviceOptions.map((service) => {
              const isSelected = formData.servicesOffered?.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`p-3.5 rounded-lg border-2 text-left transition-all flex items-center gap-3 group ${
                    isSelected
                      ? "border-blue-500 bg-blue-500/10 text-white shadow-sm"
                      : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-slate-600 group-hover:border-slate-500"
                    }`}
                  >
                    {isSelected && <Check size={12} strokeWidth={4} />}
                  </div>
                  <span className="text-sm md:text-[15px] truncate">
                    {service}
                  </span>
                </button>
              );
            })}

            {/* Custom Service Input Box */}
            <div className="flex gap-2 p-1.5 bg-slate-900 rounded-lg border border-dashed border-slate-600 focus-within:border-solid focus-within:border-blue-500 transition-all">
              <input
                type="text"
                placeholder="Other (e.g. Catering)"
                className="bg-transparent border-none outline-none text-sm px-3 flex-1 text-white placeholder:text-slate-600 focus:ring-0"
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddCustomService();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddCustomService}
                className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors shrink-0 shadow-lg shadow-blue-900/20"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Custom Tags Display */}
          <div className="flex flex-wrap gap-2 mt-4">
            {formData.servicesOffered
              .filter((s) => !serviceOptions.includes(s))
              .map((custom) => (
                <span
                  key={custom}
                  className="px-4 py-1.5 bg-slate-800 border border-blue-500/30 text-blue-400 rounded-full text-sm flex items-center gap-2 animate-in zoom-in-95"
                >
                  {custom}
                  <button
                    type="button"
                    onClick={() => toggleService(custom)}
                    className="hover:bg-red-500/20 hover:text-red-400 p-0.5 rounded-full transition-all"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
          </div>

          {errors?.servicesOffered && (
            <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
              {errors.servicesOffered}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ServicesAndTaxInformation;
