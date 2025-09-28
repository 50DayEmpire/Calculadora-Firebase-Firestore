import { types } from "../types/types";
import { googleAuthProvider, auth } from "../firebase/config-firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const googleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.error("Error Retrieving user:", error);

        // Aquí puedes dispatch una acción para manejar errores
      });
  };
};

export const register = (email, username, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: username });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.error("Error creating user:", error);

        // Aquí puedes dispatch una acción para manejar errores
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return async (dispatch) => {
    await signOut(auth);

    dispatch({ type: types.nominaClean });
    dispatch({ type: types.logout });
  };
};

export const finishChecking = () => {
  return {
    type: types.finishChecking,
  };
};
