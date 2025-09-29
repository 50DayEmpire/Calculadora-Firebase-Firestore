import Navbar from "../components/Navbar.jsx";
import { useSelector } from "react-redux";
import FormAdd from "../components/FormAdd.jsx";
import Element from "../components/Element.jsx";

const AppScreen = () => {
  const nombre = useSelector((state) => state.auth.displayName);

  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <Navbar />

      <div className="container animate__animated animate__backInUp">
        <h1 className="center">Hola {nombre}</h1>
        <hr />

        <FormAdd />

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.map((registro) => {
              return <Element key={registro.id} data={registro} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
