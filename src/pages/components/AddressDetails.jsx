
import React from "react";
import { MapPin } from "lucide-react";
import InputTypeWithLabel from "../../components/common/InputTypeWithLabel";

const AddressDetails = ({ formData, errors, handleAddressChange }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <MapPin className="text-blue-500" size={24} />
        Address Details
      </h2>

      {/* Full Width: Street Address */}
      <div className="bg-slate-800/40 p-1 rounded-lg">
        <InputTypeWithLabel
          label="Street Address"
          id="street"
          type="text"
          placeholder="Building no., street name, locality"
          value={formData.address.street}
          onChange={(e) => handleAddressChange("street", e.target.value)}
          icon={MapPin}
          labelClassName="text-[16px] font-medium mb-2"
          inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 ${
            errors["address.street"] ? "border-red-500" : ""
          }`}
        />
        {errors["address.street"] && (
          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
            {errors["address.street"]}
          </p>
        )}
      </div>

      {/* Grid: City & State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-slate-800/40 p-1 rounded-lg">
          <InputTypeWithLabel
            label="City"
            id="city"
            type="text"
            placeholder="Enter city"
            value={formData.address.city}
            onChange={(e) => handleAddressChange("city", e.target.value)}
            labelClassName="text-[16px] font-medium mb-2"
            inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 ${
              errors["address.city"] ? "border-red-500" : ""
            }`}
          />
          {errors["address.city"] && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
              {errors["address.city"]}
            </p>
          )}
        </div>

        <div className="bg-slate-800/40 p-1 rounded-lg">
          <InputTypeWithLabel
            label="State"
            id="state"
            type="text"
            placeholder="Enter state"
            value={formData.address.state}
            onChange={(e) => handleAddressChange("state", e.target.value)}
            labelClassName="text-[16px] font-medium mb-2"
            inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 ${
              errors["address.state"] ? "border-red-500" : ""
            }`}
          />
          {errors["address.state"] && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
              {errors["address.state"]}
            </p>
          )}
        </div>
      </div>

      {/* Grid: Country & Pincode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-slate-800/40 p-1 rounded-lg">
          <InputTypeWithLabel
            label="Country"
            id="country"
            type="text"
            placeholder="Enter country"
            value={formData.address.country}
            onChange={(e) => handleAddressChange("country", e.target.value)}
            labelClassName="text-[16px] font-medium mb-2"
            inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 ${
              errors["address.country"] ? "border-red-500" : ""
            }`}
          />
          {errors["address.country"] && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
              {errors["address.country"]}
            </p>
          )}
        </div>

        <div className="bg-slate-800/40 p-1 rounded-lg">
          <InputTypeWithLabel
            label="Pincode"
            id="pincode"
            type="text"
            placeholder="e.g. 110001"
            value={formData.address.pincode}
            onChange={(e) => handleAddressChange("pincode", e.target.value)}
            labelClassName="text-[16px] font-medium mb-2"
            inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 ${
              errors["address.pincode"] ? "border-red-500" : ""
            }`}
          />
          {errors["address.pincode"] && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
              <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
              {errors["address.pincode"]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
