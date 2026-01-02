// import React, { useState } from "react";
// import ProgressTracker from "../components/ProgressTracker";
// import BuinessInformation from "../components/BuinessInformation";
// import AddressDetails from "../components/AddressDetails";
// import ServiceAndTaxInformation from "../components/ServicesAndTaxInformation";
// import DocumentUpload from "../components/DocumentUpload";
// import ReviewDetails from "../components/ReviewDetails"; // New Component
// import { ArrowLeft, ArrowRight, Check } from "lucide-react";
// import {
//   BuissnessInformationValidation,
//   AddressDetailsValidation,
//   ServiceAndTaxInformationValidation,
//   DocumentValidation,
// } from "./validation/VendorDetailsValidation";
// import toast from "react-hot-toast";
// import { updatevendorApi } from "../../api/details.api";

// const steps = [
//   "Buiness Information",
//   "Address Details",
//   "Services And Tax",
//   "Documents",
// ];

// const serviceOptions = [
//   "Concerts & Music Festivals",
//   "Wedding & Social Events",
//   "Corporate Conferences",
//   "Trade Shows & Exhibitions",
//   "Product Launches",
//   "Workshops & Seminars",
//   "Sports Tournaments",
//   "Private Parties & Birthdays",
//   "Gala Dinners & Award Nights",
//   "Fashion Shows",
// ];

// const VendorDetails = () => {
//   const [currStep, setCurrStep] = useState(0);
//   const [errors, setErros] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [buinessData, setBuinessData] = useState({
//     profileImage: null,
//     buinessName: "",
//     buinessType: "",
//     address: {
//       street: "",
//       city: "",
//       state: "",
//       country: "",
//       pincode: "",
//     },
//     minPrice: "",
//     maxPrice: "",
//     gstNumber: "",
//     servicesOffered: [],
//     documents: [],
//   });

//   const handleChange = (field, value) => {
//     setBuinessData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleAddressChange = (field, value) => {
//     setBuinessData((prev) => ({
//       ...prev,
//       address: { ...prev.address, [field]: value },
//     }));
//   };

//   const toggleService = (service) => {
//     setBuinessData((prev) => ({
//       ...prev,
//       servicesOffered: prev.servicesOffered.includes(service)
//         ? prev.servicesOffered.filter((s) => s !== service)
//         : [...prev.servicesOffered, service],
//     }));
//   };

//   const handleDocumentUpload = (e) => {
//     const files = Array.from(e.target.files || []);
//     if (!files.length) return;

//     // Filter out files that already exist in the state by name
//     const existingNames = buinessData.documents.map((d) => d.name);
//     const uniqueNewFiles = files.filter(
//       (file) => !existingNames.includes(file.name)
//     );

//     if (uniqueNewFiles.length < files.length) {
//       toast.error("Some duplicate files were skipped");
//     }

//     setBuinessData((prev) => ({
//       ...prev,
//       documents: [...prev.documents, ...uniqueNewFiles],
//     }));
//   };

//   const handleProfileImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 5 * 1024 * 1024) {
//       toast.error("File size must be less than 5MB");
//       return;
//     }
//     setBuinessData((prev) => ({ ...prev, profileImage: file }));
//   };

//   const removeDocument = (index) => {
//     setBuinessData((prev) => ({
//       ...prev,
//       documents: prev.documents.filter((_, i) => i !== index),
//     }));
//   };

//   const handlenext = () => {
//     let stepErrors = {};
//     if (currStep === 0)
//       stepErrors = BuissnessInformationValidation(buinessData);
//     if (currStep === 1) stepErrors = AddressDetailsValidation(buinessData);
//     if (currStep === 2)
//       stepErrors = ServiceAndTaxInformationValidation(buinessData);
//     if (currStep === 3) stepErrors = DocumentValidation(buinessData);

//     if (Object.keys(stepErrors).length > 0) {
//       setErros(stepErrors);
//       return;
//     }
//     setErros({});
//     // Allow currStep to reach 4 (Review Mode) even if steps array is only 4 long
//     setCurrStep((prev) => Math.min(prev + 1, 4));
//   };

//   const handleprev = () => {
//     setErros({});
//     setCurrStep((prev) => Math.max(prev - 1, 0));
//   };

//   const handleSubmit = async () => {
//     try {
//       setIsLoading(true);

//       const res = await updatevendorApi(buinessData);
//       console.log(res.data);
//       toast.success("Get Ready to Earn");
//     } catch (err) {
//       console.log("Error Occured ", err.response?.data?.message);
//       toast.error(`Failed due to ${err.response?.data?.message}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 font-cosmic text-slate-300">
//       <h1 className="text-center p-16 text-3xl font-bold [word-spacing:6px]">
//         Let’s Build Your Digital Front Desk
//       </h1>

//       <ProgressTracker
//         steps={steps}
//         currStep={currStep}
//         nextStep={handlenext}
//         prevStep={handleprev}
//       />

//       <div className="bg-slate-800 rounded-xl shadow-xl p-6 md:p-8 mx-auto w-full max-w-6xl mt-4">
//         {currStep === 0 && (
//           <BuinessInformation
//             formData={buinessData}
//             errors={errors}
//             handleChange={handleChange}
//             handleProfileImageUpload={handleProfileImageUpload}
//           />
//         )}

//         {currStep === 1 && (
//           <AddressDetails
//             formData={buinessData}
//             errors={errors}
//             handleAddressChange={handleAddressChange}
//           />
//         )}

//         {currStep === 2 && (
//           <ServiceAndTaxInformation
//             formData={buinessData}
//             errors={errors}
//             handleChange={handleChange}
//             toggleService={toggleService}
//             serviceOptions={serviceOptions}
//           />
//         )}

//         {currStep === 3 && (
//           <DocumentUpload
//             formData={buinessData}
//             errors={errors}
//             handleDocumentUpload={handleDocumentUpload}
//             removeDocument={removeDocument}
//           />
//         )}

//         {/* The Review Step (Step 4) */}
//         {currStep === 4 && (
//           <ReviewDetails
//             formData={buinessData}
//             onEdit={(targetStep) => setCurrStep(targetStep)}
//           />
//         )}

//         <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
//           <button
//             type="button"
//             onClick={handleprev}
//             disabled={currStep === 0 || isLoading}
//             className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:opacity-50 transition-colors flex items-center gap-2"
//           >
//             <ArrowLeft size={18} />
//             Back
//           </button>

//           {currStep < 4 ? (
//             <button
//               type="button"
//               onClick={handlenext}
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//             >
//               {currStep === 3 ? "Review Document" : "Next"}
//               <ArrowRight size={18} />
//             </button>
//           ) : (
//             <button
//               type="button"
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors flex items-center gap-2"
//             >
//               {isLoading ? (
//                 <span className="flex items-center gap-2">
//                   <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
//                   Submitting...
//                 </span>
//               ) : (
//                 <>
//                   Submit
//                   <Check size={18} />
//                 </>
//               )}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorDetails;
import React, { useState } from "react";
import ProgressTracker from "../components/ProgressTracker";
import BuinessInformation from "../components/BuinessInformation";
import AddressDetails from "../components/AddressDetails";
import ServiceAndTaxInformation from "../components/ServicesAndTaxInformation";
import DocumentUpload from "../components/DocumentUpload";
import ReviewDetails from "../components/ReviewDetails";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  BuissnessInformationValidation,
  AddressDetailsValidation,
  ServiceAndTaxInformationValidation,
  DocumentValidation,
} from "./validation/VendorDetailsValidation";
import toast from "react-hot-toast";
import { updatevendorApi } from "../../api/details.api";

const steps = [
  "Business Information",
  "Address Details",
  "Services And Tax",
  "Documents",
];

const serviceOptions = [
  "Concerts & Music Festivals",
  "Wedding & Social Events",
  "Corporate Conferences",
  "Trade Shows & Exhibitions",
  "Product Launches",
  "Workshops & Seminars",
  "Sports Tournaments",
  "Private Parties & Birthdays",
  "Gala Dinners & Award Nights",
  "Fashion Shows",
];

const VendorDetails = () => {
  const [currStep, setCurrStep] = useState(0);
  const [errors, setErros] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [buinessData, setBuinessData] = useState({
    profileImage: null,
    buinessName: "",
    buinessType: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    minPrice: "",
    maxPrice: "",
    gstNumber: "",
    servicesOffered: [],
    documents: [],
  });

  const handleChange = (field, value) => {
    setBuinessData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (field, value) => {
    setBuinessData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const toggleService = (service) => {
    setBuinessData((prev) => ({
      ...prev,
      servicesOffered: prev.servicesOffered.includes(service)
        ? prev.servicesOffered.filter((s) => s !== service)
        : [...prev.servicesOffered, service],
    }));
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const existingNames = buinessData.documents.map((d) => d.name);
    const uniqueNewFiles = files.filter(
      (file) => !existingNames.includes(file.name)
    );

    if (uniqueNewFiles.length < files.length) {
      toast.error("Some duplicate files were skipped");
    }

    setBuinessData((prev) => ({
      ...prev,
      documents: [...prev.documents, ...uniqueNewFiles],
    }));
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }
    setBuinessData((prev) => ({ ...prev, profileImage: file }));
  };

  const removeDocument = (index) => {
    setBuinessData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };

  const handlenext = () => {
    let stepErrors = {};
    if (currStep === 0)
      stepErrors = BuissnessInformationValidation(buinessData);
    if (currStep === 1) stepErrors = AddressDetailsValidation(buinessData);
    if (currStep === 2)
      stepErrors = ServiceAndTaxInformationValidation(buinessData);
    if (currStep === 3) stepErrors = DocumentValidation(buinessData);

    if (Object.keys(stepErrors).length > 0) {
      setErros(stepErrors);
      return;
    }
    setErros({});
    setCurrStep((prev) => Math.min(prev + 1, 4));
  };

  const handleprev = () => {
    setErros({});
    setCurrStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await updatevendorApi(buinessData);
      toast.success("Get Ready to Earn");
    } catch (err) {
      toast.error(`Failed due to ${err.response?.data?.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 font-cosmic text-slate-300 px-4 py-8 md:px-6 lg:px-8">
      {/* Responsive Heading */}
      <h1 className="text-center py-8 md:py-12 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight px-2">
        Let’s Build Your Digital Front Desk
      </h1>

      {/* Progress Tracker Container */}
      <div className="max-w-4xl mx-auto mb-8 overflow-x-auto">
        <ProgressTracker
          steps={steps}
          currStep={currStep}
          nextStep={handlenext}
          prevStep={handleprev}
        />
      </div>

      {/* Main Content Card */}
      <div className="bg-slate-800 rounded-xl shadow-2xl p-4 sm:p-6 md:p-10 mx-auto w-full max-w-5xl mt-4 transition-all duration-300">
        <div className="min-h-[400px]">
          {currStep === 0 && (
            <BuinessInformation
              formData={buinessData}
              errors={errors}
              handleChange={handleChange}
              handleProfileImageUpload={handleProfileImageUpload}
            />
          )}

          {currStep === 1 && (
            <AddressDetails
              formData={buinessData}
              errors={errors}
              handleAddressChange={handleAddressChange}
            />
          )}

          {currStep === 2 && (
            <ServiceAndTaxInformation
              formData={buinessData}
              errors={errors}
              handleChange={handleChange}
              toggleService={toggleService}
              serviceOptions={serviceOptions}
            />
          )}

          {currStep === 3 && (
            <DocumentUpload
              formData={buinessData}
              errors={errors}
              handleDocumentUpload={handleDocumentUpload}
              removeDocument={removeDocument}
            />
          )}

          {currStep === 4 && (
            <ReviewDetails
              formData={buinessData}
              onEdit={(targetStep) => setCurrStep(targetStep)}
            />
          )}
        </div>

        {/* Action Buttons: Stacked on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-slate-700 gap-4">
          <button
            type="button"
            onClick={handleprev}
            disabled={currStep === 0 || isLoading}
            className="w-full sm:w-auto px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:opacity-50 transition-all flex items-center justify-center gap-2 order-2 sm:order-1"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="w-full sm:w-auto order-1 sm:order-2">
            {currStep < 4 ? (
              <button
                type="button"
                onClick={handlenext}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                {currStep === 3 ? "Review Details" : "Next Step"}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full sm:w-auto px-10 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Check size={18} />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
