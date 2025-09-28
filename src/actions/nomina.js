import { db } from "../firebase/config-firebase.js";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { types } from "../types/types.js";

export const crearRegistro = (pago) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const datos = {
      fecha: new Date().toLocaleString(),
      pago: pago,
    };

    try {
      const docRef = await addDoc(
        collection(db, uid, "nominas", "nomina"),
        datos
      );
      dispatch({
        type: types.nominaAdd,
        payload: { id: docRef.id, ...datos },
      });
      // Aquí puedes dispatch una acción para actualizar el estado
    } catch (error) {
      console.error("Error añadiendo documento: ", error);
      // Aquí puedes dispatch una acción para manejar errores
    }
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.nominaRead,
    payload: data,
  };
};

export const borrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await deleteDoc(doc(db, uid, "nominas", "nomina", id));

    dispatch({ type: types.nominaDelete, payload: id });
  };
};
