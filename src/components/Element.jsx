import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nomina.js";

const Element = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(borrarRegistro(data.id));
  };

  return (
    <tr>
      <td>{data.fecha}</td>
      <td>{data.pago}</td>
      <td>
        <button
          className="btn waves-effect waves-light red"
          onClick={handleDelete}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default Element;
