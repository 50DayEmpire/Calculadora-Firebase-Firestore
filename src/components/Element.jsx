const Element = ({ data }) => {
  return (
    <tr>
      <td>{data.fecha}</td>
      <td>{data.pago}</td>
      <td>
        <button className="btn waves-effect waves-light red">Borrar</button>
      </td>
    </tr>
  );
};

export default Element;
