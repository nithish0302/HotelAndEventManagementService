
import React from "react";
import {
  Building2,
  Hotel,
  PartyPopper,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import InputTypeWithLabel from "../../components/common/InputTypeWithLabel";

const BuinessInformation = ({
  formData,
  errors,
  handleChange,
  handleProfileImageUpload,
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <Building2 className="text-blue-500" size={24} />
        Business Information
      </h2>

      {/* Profile Image Section */}
      <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
        <label className="block text-sm font-medium text-slate-300 mb-4 text-[16px]">
          Profile Image (Optional)
        </label>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Image Preview Box */}
          <div className="relative w-24 h-24 rounded-xl bg-slate-900 border-2 border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
            {formData.profileImage ? (
              <img
                src={URL.createObjectURL(formData.profileImage)}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <Upload className="text-slate-500" size={28} />
            )}
          </div>

          {/* Upload Area */}
          <label className="cursor-pointer w-full max-w-md">
            {formData.profileImage ? (
              <div className="flex items-center justify-between p-4 bg-slate-900 border border-blue-500/30 rounded-lg hover:border-blue-500/60 transition-all group">
                <div className="flex flex-col overflow-hidden pr-4">
                  <span className="text-sm text-blue-400 font-medium truncate">
                    {formData.profileImage.name}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1">
                    {(formData.profileImage.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <span className="text-xs text-blue-400 font-semibold group-hover:text-blue-300 whitespace-nowrap">
                  Change
                </span>
              </div>
            ) : (
              <div className="w-full px-4 py-8 border-2 border-dashed border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5 bg-slate-900/50 rounded-lg transition-all text-center group">
                <span className="text-slate-400 text-sm group-hover:text-slate-300">
                  Click to select a logo or image
                </span>
              </div>
            )}

            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleProfileImageUpload}
            />
          </label>
        </div>
        <p className="text-[11px] text-slate-500 mt-3 italic">
          Supported formats: JPG, PNG (Max 5MB)
        </p>
      </div>

      {/* Business Name */}
      <div className="max-w-2xl">
        <InputTypeWithLabel
          label="Business Name *"
          id="buinessName"
          type="text"
          placeholder="e.g. Grand Plaza Events"
          value={formData.buinessName}
          onChange={(e) => handleChange("buinessName", e.target.value)}
          icon={Building2}
          labelClassName="text-[16px] font-semiBold mb-2"
          inputClassName={`w-full bg-slate-900 border-slate-700 focus:border-blue-500 focus:ring-blue-500/20 ${
            errors?.buinessName ? "border-red-500" : ""
          }`}
        />
        {errors?.buinessName && (
          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
            {errors.buinessName}
          </p>
        )}
      </div>

      {/* Business Type Selection */}
      <div>
        <label className="block text-[16px] font-medium text-slate-300 mb-4">
          Business Type *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              id: "hotel",
              label: "Hotel",
              sub: "Accommodation services",
              icon: Hotel,
            },
            {
              id: "event",
              label: "Event Planning",
              sub: "Events & celebrations",
              icon: PartyPopper,
            },
            {
              id: "hotel and event",
              label: "Both",
              sub: "Hotel + Event services",
              icon: Sparkles,
            },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => handleChange("buinessType", type.id)}
              className={`flex flex-row sm:flex-col items-center sm:text-center p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 group ${
                formData.buinessType === type.id
                  ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/5"
                  : "border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800"
              }`}
            >
              <div
                className={`p-3 rounded-lg mr-4 sm:mr-0 sm:mb-3 transition-colors ${
                  formData.buinessType === type.id
                    ? "text-blue-400"
                    : "text-slate-500 group-hover:text-slate-400"
                }`}
              >
                <type.icon size={28} />
              </div>
              <div className="text-left sm:text-center">
                <div
                  className={`font-semibold ${
                    formData.buinessType === type.id
                      ? "text-white"
                      : "text-slate-300"
                  }`}
                >
                  {type.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  {type.sub}
                </div>
              </div>
            </button>
          ))}
        </div>
        {errors?.buinessType && (
          <p className="text-red-400 text-xs mt-3 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-400 rounded-full inline-block"></span>
            {errors.buinessType}
          </p>
        )}
      </div>
    </div>
  );
};

export default BuinessInformation;
