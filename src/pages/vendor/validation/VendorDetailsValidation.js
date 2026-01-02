export const BuissnessInformationValidation = (formData) => {
  const errors = {};
  if (!formData.buinessName.trim()) {
    errors.buinessName = "Buiness Name is Required";
  }
  if (!formData.buinessType) {
    errors.buinessType = "Select the Buiness Type";
  }
  return errors;
};

export const AddressDetailsValidation = (formData) => {
  const errors = {};

  const { address } = formData;

  if (!address.street.trim()) {
    errors["address.street"] = "Street is Required";
  }
  if (!address.city.trim()) {
    errors["address.city"] = "City is Required";
  }
  if (!address.state.trim()) {
    errors["address.state"] = "State is Required";
  }
  if (!address.country.trim()) {
    errors["address.country"] = "Country is Required";
  }

  if (!/^\d{5,6}$/.test(address.pincode))
    errors["address.pincode"] = "Invalid pincode";
  return errors;
};

export const ServiceAndTaxInformationValidation = (formData) => {
  const errors = {};
  if (!formData.gstNumber) {
    errors.gstNumber = "GST Number is required";
  } else if (
    !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}Z[A-Z\d]{1}$/.test(
      formData.gstNumber.toUpperCase()
    )
  ) {
    errors.gstNumber =
      "Please enter a valid 15-digit GST number (e.g., 22AAAAA0000A1Z5)";
  }

  if (
    formData.buinessType === "hotel" ||
    formData.buinessType === "hotel and event"
  ) {
    if (!formData.minPrice) {
      errors.minPrice = "Minimum Price is Required";
    } else if (formData.minPrice < 100) {
      errors.minPrice = "Minimum Price should be greater than 100";
    }

    if (!formData.maxPrice) {
      errors.minPrice = "Maximim Price is Required";
    }
  }

  if (
    (formData.buinessType === "event" ||
      formData.buinessType === "hotel and event") &&
    formData.servicesOffered.length === 0
  ) {
    errors.servicesOffered = "Select at least one service";
  }

  return errors;
};

export const DocumentValidation = (formData) => {
  const errors = {};

  // 1. Check for minimum quantity
  if (formData.documents.length < 2) {
    errors.documents =
      "Upload at least 2 documents (e.g., GST and Business Reg)";
  }

  const fileNames = formData.documents.map((doc) => doc.name.toLowerCase());
  const hasDuplicates = fileNames.some(
    (name, index) => fileNames.indexOf(name) !== index
  );

  if (hasDuplicates) {
    errors.documents =
      "Duplicate files detected. Please remove redundant documents.";
  }

  return errors;
};
