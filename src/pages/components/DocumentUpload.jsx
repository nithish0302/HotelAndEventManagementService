// import React from "react";
// import { FileText, Upload, X, AlertCircle } from "lucide-react";

// const DocumentUpload = ({
//   formData,
//   errors,
//   handleDocumentUpload,
//   removeDocument,
// }) => {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
//         <Upload className="text-blue-500" />
//         Upload Documents
//       </h2>

//       <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
//         <div className="flex gap-2">
//           <AlertCircle className="text-yellow-500 flex-shrink-0" size={20} />
//           <div>
//             <p className="text-sm text-yellow-200">
//               Upload at least 2 documents (GST Certificate, Business
//               Registration, etc.)
//             </p>
//           </div>
//         </div>
//       </div>

//       <label className="block">
//         <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer bg-slate-800/30">
//           <Upload className="mx-auto mb-3 text-slate-400" size={48} />
//           <p className="text-white mb-1">Drop files here or click to upload</p>
//           <p className="text-sm text-slate-400">PDF, JPG, PNG (Max 5MB each)</p>
//         </div>
//         <input
//           type="file"
//           className="hidden"
//           multiple
//           accept=".pdf,.jpg,.jpeg,.png"
//           onChange={handleDocumentUpload}
//         />
//       </label>

//       {formData.documents.length > 0 && (
//         <div className="space-y-2">
//           <p className="text-sm font-medium text-slate-300">
//             Uploaded Documents ({formData.documents.length})
//           </p>
//           {formData.documents.map((doc, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700 animate-in fade-in"
//             >
//               <div className="flex items-center gap-3 overflow-hidden">
//                 <FileText className="text-blue-400 flex-shrink-0" size={24} />
//                 <div className="overflow-hidden">
//                   <p className="text-sm text-white truncate">{doc.name}</p>
//                   <p className="text-xs text-slate-400">
//                     {(doc.size / 1024 / 1024).toFixed(2)} MB
//                   </p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => removeDocument(index)}
//                 className="text-red-400 hover:text-red-300 p-1 ml-4"
//               >
//                 <X size={20} />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {errors?.documents && (
//         <p className="text-red-400 text-sm">{errors.documents}</p>
//       )}
//     </div>
//   );
// };

// export default DocumentUpload;
import React from "react";
import { FileText, Upload, X, AlertCircle } from "lucide-react";

const DocumentUpload = ({
  formData,
  errors,
  handleDocumentUpload,
  removeDocument,
}) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Upload className="text-blue-500" size={24} />
        Upload Documents
      </h2>

      {/* Responsive Alert Box */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
        <div className="flex gap-3">
          <AlertCircle className="text-yellow-500 shrink-0" size={20} />
          <div>
            <p className="text-sm md:text-[15px] text-yellow-200/90 leading-relaxed">
              <span className="font-bold text-yellow-500">Requirement:</span>{" "}
              Upload at least 2 documents (GST Certificate, Business
              Registration, etc.)
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Upload Area */}
      <label className="block group cursor-pointer">
        <div className="border-2 border-dashed border-slate-700 rounded-2xl p-6 md:p-12 text-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-300 bg-slate-900/40">
          <div className="bg-slate-800 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Upload
              className="text-slate-400 group-hover:text-blue-400"
              size={28}
            />
          </div>
          <p className="text-white font-medium mb-1 text-sm md:text-base">
            Drop files here or <span className="text-blue-400">browse</span>
          </p>
          <p className="text-xs text-slate-500">PDF, JPG, PNG (Max 5MB each)</p>
        </div>
        <input
          type="file"
          className="hidden"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleDocumentUpload}
        />
      </label>

      {/* Responsive File List */}
      {formData.documents.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-400 px-1">
            Uploaded Documents ({formData.documents.length})
          </p>
          <div className="grid grid-cols-1 gap-3">
            {formData.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 md:p-4 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors animate-in slide-in-from-bottom-2 duration-300"
              >
                <div className="flex items-center gap-3 overflow-hidden mr-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                    <FileText className="text-blue-400" size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-200 font-medium truncate max-w-[150px] sm:max-w-[300px] md:max-w-md">
                      {doc.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-mono mt-0.5">
                      {(doc.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeDocument(index)}
                  className="shrink-0 p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                  aria-label="Remove document"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Message */}
      {errors?.documents && (
        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
          <AlertCircle size={16} />
          <p className="text-xs md:text-sm font-medium">{errors.documents}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
