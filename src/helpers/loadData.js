import { db } from "../firebase/config-firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const loadData = async (uid) => {
  const snapshot = await getDocs(collection(db, uid, "nominas", "nomina"));
  const data = [];

  snapshot.forEach((nomina) => {
    const nominaData = nomina.data();
    data.push({
      id: nomina.id,
      ...nominaData,
    });
  });

  return data;
};
