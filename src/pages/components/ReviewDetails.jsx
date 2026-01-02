// import React from "react";
// import {
//   Edit2,
//   Building2,
//   MapPin,
//   FileText,
//   Paperclip,
//   IndianRupee,
// } from "lucide-react";

// const ReviewDetails = ({ formData, onEdit }) => {
//   // Helper to check for event-related types
//   const isEventType =
//     formData.buinessType === "event" ||
//     formData.buinessType === "hotel and event";
//   // Helper to check for hotel-related types
//   const isHotelType =
//     formData.buinessType === "hotel" ||
//     formData.buinessType === "hotel and event";

//   return (
//     <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
//           Review Your Business Profile
//         </h2>
//         <p className="text-slate-400 text-base mt-2">
//           Please verify all information before final submission.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* 1. Business Information Section */}
//         <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700 relative group">
//           <button
//             onClick={() => onEdit(0)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800"
//             title="Edit Business Info"
//           >
//             <Edit2 size={18} />
//           </button>
//           <div className="flex items-center gap-3 mb-5 text-blue-400 font-bold uppercase text-xs tracking-[2px]">
//             <Building2 size={20} /> Business Info
//           </div>
//           <p className="text-xl font-bold text-white truncate">
//             {formData.buinessName || "Not Provided"}
//           </p>
//           <p className="text-sm text-slate-400 mt-2 uppercase tracking-wider font-medium">
//             Type: {formData.buinessType || "Not Selected"}
//           </p>
//         </div>

//         {/* 2. Address & Location Section */}
//         <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700 relative group">
//           <button
//             onClick={() => onEdit(1)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800"
//             title="Edit Location"
//           >
//             <Edit2 size={18} />
//           </button>
//           <div className="flex items-center gap-3 mb-5 text-green-400 font-bold uppercase text-xs tracking-[2px]">
//             <MapPin size={20} /> Location
//           </div>
//           <div className="text-lg text-slate-200 space-y-2 leading-relaxed">
//             <p className="font-medium">
//               {formData.address.street || "No street provided"}
//             </p>
//             <p>
//               {formData.address.city}, {formData.address.state}
//             </p>
//             <p className="text-slate-400">
//               {formData.address.pincode}, {formData.address.country}
//             </p>
//           </div>
//         </div>

//         {/* 3. Services, Pricing & Tax Section */}
//         <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700 relative group md:col-span-2">
//           <button
//             onClick={() => onEdit(2)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800"
//             title="Edit Services & Tax"
//           >
//             <Edit2 size={18} />
//           </button>
//           <div className="flex items-center gap-3 mb-6 text-purple-400 font-bold uppercase text-xs tracking-[2px]">
//             <FileText size={20} /> Services & Pricing
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div className="space-y-6">
//               <div>
//                 <p className="text-xs text-slate-500 uppercase font-black mb-2 tracking-widest">
//                   GST Number
//                 </p>
//                 <p className="text-xl text-white font-mono bg-slate-800/50 p-2 rounded inline-block">
//                   {formData.gstNumber || "Not Provided"}
//                 </p>
//               </div>

//               {/* Conditional Pricing: Only show for Hotel or Both */}
//               {isHotelType && (
//                 <div className="animate-in fade-in slide-in-from-left-2">
//                   <p className="text-xs text-slate-500 uppercase font-black mb-2 tracking-widest">
//                     Room Price Range
//                   </p>
//                   <p className="text-2xl text-white flex items-center gap-2 font-bold">
//                     <IndianRupee size={22} className="text-green-500" />{" "}
//                     {formData.minPrice}
//                     <span className="text-slate-600 text-lg">to</span>
//                     <IndianRupee size={22} className="text-green-500" />{" "}
//                     {formData.maxPrice}
//                     <span className="text-xs text-slate-500 ml-2 font-normal">
//                       / NIGHT
//                     </span>
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div>
//               {/* Conditional Services: Only show for Event or Both */}
//               {isEventType ? (
//                 <div className="animate-in fade-in slide-in-from-right-2">
//                   <p className="text-xs text-slate-500 uppercase font-black mb-4 tracking-widest">
//                     Offered Services
//                   </p>
//                   <div className="flex flex-wrap gap-3">
//                     {formData.servicesOffered.length > 0 ? (
//                       formData.servicesOffered.map((service, i) => (
//                         <span
//                           key={i}
//                           className="px-4 py-2 bg-blue-500/10 text-blue-300 text-sm font-semibold rounded-lg border border-blue-500/30"
//                         >
//                           {service}
//                         </span>
//                       ))
//                     ) : (
//                       <span className="text-sm text-slate-600 italic">
//                         No services selected
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="h-full flex items-center justify-center border-2 border-dashed border-slate-800 rounded-xl p-4">
//                   <p className="text-slate-600 text-sm text-center">
//                     Standard Hotel Registration (No specialized event services)
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* 4. Uploaded Documents Section */}
//         <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-700 relative group md:col-span-2">
//           <button
//             onClick={() => onEdit(3)}
//             className="absolute top-4 right-4 text-slate-500 hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800"
//             title="Edit Documents"
//           >
//             <Edit2 size={18} />
//           </button>
//           <div className="flex items-center gap-3 mb-5 text-yellow-400 font-bold uppercase text-xs tracking-[2px]">
//             <Paperclip size={20} /> Verification Documents
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {formData.documents.length > 0 ? (
//               formData.documents.map((doc, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors"
//                 >
//                   <FileText size={24} className="text-blue-400 shrink-0" />
//                   <div className="flex flex-col min-w-0">
//                     <span className="text-sm text-white truncate font-bold">
//                       {doc.name}
//                     </span>
//                     <span className="text-[11px] text-slate-500 uppercase font-bold mt-1">
//                       {(doc.size / 1024 / 1024).toFixed(2)} MB
//                     </span>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <span className="text-sm text-slate-600 italic">
//                 No documents uploaded
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Final Declaration Message */}
//       <div className="mt-10 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl text-center">
//         <p className="text-lg text-slate-300">
//           By clicking{" "}
//           <span className="text-white font-black underline decoration-blue-500">
//             Submit
//           </span>
//           , you certify that all provided data is accurate for your digital desk
//           profile.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ReviewDetails;
import React from "react";
import {
  Edit2,
  Building2,
  MapPin,
  FileText,
  Paperclip,
  IndianRupee,
} from "lucide-react";

const ReviewDetails = ({ formData, onEdit }) => {
  const isEventType =
    formData.buinessType === "event" ||
    formData.buinessType === "hotel and event";
  const isHotelType =
    formData.buinessType === "hotel" ||
    formData.buinessType === "hotel and event";

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in zoom-in-95 duration-500 pb-4">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-10 px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
          Review Your Business Profile
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-2">
          Please verify all information before final submission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* 1. Business Information Section */}
        <div className="bg-slate-900/40 p-5 md:p-6 rounded-2xl border border-slate-700 relative group transition-all hover:border-slate-500">
          <button
            onClick={() => onEdit(0)}
            className="absolute top-4 right-4 text-blue-400 md:text-slate-500 md:hover:text-blue-400 md:opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800 border border-slate-700 md:border-transparent"
            title="Edit Business Info"
          >
            <Edit2 size={16} />
          </button>

          <div className="flex items-center gap-3 mb-4 text-blue-400 font-bold uppercase text-[10px] md:text-xs tracking-[2px]">
            <Building2 size={18} /> Business Info
          </div>
          <p className="text-lg md:text-xl font-bold text-white break-words">
            {formData.buinessName || "Not Provided"}
          </p>
          <p className="text-xs md:text-sm text-slate-400 mt-2 uppercase tracking-wider font-medium">
            Type:{" "}
            <span className="text-slate-200">
              {formData.buinessType || "Not Selected"}
            </span>
          </p>
        </div>

        {/* 2. Address & Location Section */}
        <div className="bg-slate-900/40 p-5 md:p-6 rounded-2xl border border-slate-700 relative group transition-all hover:border-slate-500">
          <button
            onClick={() => onEdit(1)}
            className="absolute top-4 right-4 text-green-400 md:text-slate-500 md:hover:text-green-400 md:opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800 border border-slate-700 md:border-transparent"
            title="Edit Location"
          >
            <Edit2 size={16} />
          </button>

          <div className="flex items-center gap-3 mb-4 text-green-400 font-bold uppercase text-[10px] md:text-xs tracking-[2px]">
            <MapPin size={18} /> Location
          </div>
          <div className="text-sm md:text-lg text-slate-200 space-y-1.5 leading-relaxed">
            <p className="font-medium break-words">
              {formData.address.street || "No street provided"}
            </p>
            <p>
              {formData.address.city}, {formData.address.state}
            </p>
            <p className="text-slate-500">
              {formData.address.pincode}, {formData.address.country}
            </p>
          </div>
        </div>

        {/* 3. Services, Pricing & Tax Section */}
        <div className="bg-slate-900/40 p-5 md:p-8 rounded-2xl border border-slate-700 relative group md:col-span-2 transition-all hover:border-slate-500">
          <button
            onClick={() => onEdit(2)}
            className="absolute top-4 right-4 text-purple-400 md:text-slate-500 md:hover:text-purple-400 md:opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800 border border-slate-700 md:border-transparent"
            title="Edit Services & Tax"
          >
            <Edit2 size={16} />
          </button>

          <div className="flex items-center gap-3 mb-6 text-purple-400 font-bold uppercase text-[10px] md:text-xs tracking-[2px]">
            <FileText size={18} /> Services & Pricing
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-widest">
                  GST Number
                </p>
                <p className="text-base md:text-xl text-white font-mono bg-slate-800/80 px-3 py-2 rounded-lg inline-block border border-slate-700">
                  {formData.gstNumber || "Not Provided"}
                </p>
              </div>

              {isHotelType && (
                <div className="animate-in fade-in slide-in-from-left-2">
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-widest">
                    Room Price Range
                  </p>
                  <p className="text-xl md:text-2xl text-white flex flex-wrap items-center gap-2 font-bold">
                    <IndianRupee size={20} className="text-green-500" />
                    {formData.minPrice}
                    <span className="text-slate-600 text-sm md:text-lg lowercase">
                      to
                    </span>
                    <IndianRupee size={20} className="text-green-500" />
                    {formData.maxPrice}
                    <span className="text-[10px] text-slate-500 ml-1 font-normal tracking-normal uppercase">
                      / Night
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div>
              {isEventType ? (
                <div className="animate-in fade-in slide-in-from-right-2">
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-3 tracking-widest">
                    Offered Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {formData.servicesOffered.length > 0 ? (
                      formData.servicesOffered.map((service, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-blue-500/10 text-blue-300 text-[11px] md:text-xs font-semibold rounded-full border border-blue-500/20"
                        >
                          {service}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-600 italic">
                        No services selected
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[100px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-2xl p-4">
                  <p className="text-slate-600 text-xs md:text-sm text-center italic">
                    Standard Hotel Registration
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4. Uploaded Documents Section */}
        <div className="bg-slate-900/40 p-5 md:p-6 rounded-2xl border border-slate-700 relative group md:col-span-2 transition-all hover:border-slate-500">
          <button
            onClick={() => onEdit(3)}
            className="absolute top-4 right-4 text-yellow-400 md:text-slate-500 md:hover:text-yellow-400 md:opacity-0 group-hover:opacity-100 transition-all p-2 rounded-lg bg-slate-800 border border-slate-700 md:border-transparent"
            title="Edit Documents"
          >
            <Edit2 size={16} />
          </button>

          <div className="flex items-center gap-3 mb-5 text-yellow-400 font-bold uppercase text-[10px] md:text-xs tracking-[2px]">
            <Paperclip size={18} /> Verification Documents
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {formData.documents.length > 0 ? (
              formData.documents.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group/doc"
                >
                  <FileText size={20} className="text-blue-400 shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-slate-200 truncate font-semibold">
                      {doc.name}
                    </span>
                    <span className="text-[9px] text-slate-500 font-mono mt-0.5">
                      {(doc.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-600 italic col-span-full">
                No documents uploaded
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Final Declaration Message */}
      <div className="mt-6 md:mt-10 p-5 md:p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl text-center">
        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
          By clicking{" "}
          <span className="text-white font-black underline underline-offset-4 decoration-blue-500">
            Submit Application
          </span>
          , you certify that all information is accurate and will be used to
          create your digital front desk profile.
        </p>
      </div>
    </div>
  );
};

export default ReviewDetails;
