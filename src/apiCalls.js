import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:4000/v1/auth/login"
    , userCredential);
  // axios.defaults.baseURL = 'http://localhost:1010/'
  axios.defaults.headers.common = {'Authorization': `bearer ${res.data.accessToken}`}
  
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};



