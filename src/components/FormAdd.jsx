import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina.js";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState({
    horas: 0,
    precioHoras: 0,
  });

  const { horas, precioHoras } = cantidadPago;

  const handleAgregar = () => {
    setViewForm(!viewForm);
  };

  const handleCambio = (e) => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    const precioFinal = horas * precioHoras;
    dispatch(crearRegistro(precioFinal));
  };

  return (
    <>
      <button className="btn green" onClick={handleAgregar}>
        {viewForm ? "Cancelar" : "Agregar"}
      </button>
      {viewForm && (
        <>
          <input
            type="text"
            placeholder="Ingrese cantidad de pago por hora"
            value={precioHoras}
            onChange={handleCambio}
            name="precioHoras"
          />
          <input
            type="text"
            placeholder="Ingrese cantidad de horas"
            value={horas}
            onChange={handleCambio}
            name="horas"
          />
          <button className="btn purple" onClick={handleSave}>
            Calcular y Guardar
          </button>
        </>
      )}
    </>
  );
};

export default FormAdd;
