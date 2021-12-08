export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGNCVTjB2spesUcR90uFGBq5Szbykmgaw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Sign up failed!");
    }

    const resData = await response.json();
    console.log("sign up--->", resData);

    dispatch({
      type: SIGNUP,
    });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGNCVTjB2spesUcR90uFGBq5Szbykmgaw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Sign up failed!");
    }

    const resData = await response.json();
    console.log("login--->", resData);

    dispatch({
      type: LOGIN,
    });
  };
};
