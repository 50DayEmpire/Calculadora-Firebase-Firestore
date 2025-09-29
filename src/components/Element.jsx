import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nomina.js";

const Element = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(borrarRegistro(data.id));
  };

  return (
    <tr className="animate__animated animate__fadeInUp">
      <td>{data.fecha}</td>
      <td>${data.pago}</td>
      <td>
        <button
          className="btn waves-effect waves-light red"
          onClick={handleDelete}
        >
          <i className="material-icons">delete_forever</i>
        </button>
      </td>
    </tr>
  );
};

export default Element;
