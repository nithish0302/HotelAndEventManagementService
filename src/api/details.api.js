import api from "./axios";

export const updatevendorApi = (data) => {
  return api.post("/updateVendorDetails", data);
};
