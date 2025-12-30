import api from "./axios";

export const signupApi = (data) => {
  return api.post("/createuser", data);
};

export const signinApi = (data) => {
  return api.post("/login", data);
};

export const signoutApi = () => {
  return api.post("/logout");
};
