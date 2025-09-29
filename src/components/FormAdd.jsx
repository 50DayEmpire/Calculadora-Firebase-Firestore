import { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina.js";

const FormAdd = () => {
  const dispatch = useDispatch();
  const [viewForm, setViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState({
    horas: "",
    precioHoras: "",
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
    setCantidadPago({ horas: "", precioHoras: "" });
    setViewForm(false);
  };

  return (
    <>
      <button className="btn green" onClick={handleAgregar}>
        {viewForm ? "Cancelar" : "Agregar"}
      </button>
      {viewForm && (
        <div className="animate__animated animate__fadeIn">
          <div className="input-field col s12">
            <label htmlFor="precioHoras">Pago por Hora:</label>
            <input
              type="text"
              value={precioHoras}
              onChange={handleCambio}
              name="precioHoras"
              id="precioHoras"
            />
          </div>

          <div className="input-field col s12">
            <label htmlFor="horas">Horas Laboradas</label>
            <input
              type="text"
              value={horas}
              onChange={handleCambio}
              name="horas"
              id="horas"
            />
          </div>
          <button className="btn purple" onClick={handleSave}>
            Calcular y Guardar
          </button>
        </div>
      )}
    </>
  );
};

export default FormAdd;
