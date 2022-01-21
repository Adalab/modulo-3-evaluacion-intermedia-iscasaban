import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [adalabersData, setAdalabersData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersData(response);
    });
  }, []);

  const htmlAdalabers = adalabersData.map((adalabersData, index) => (
    <tr key={index}>
      <td>{adalabersData.name}</td>
      <td>{adalabersData.counselor}</td>
      <td>{adalabersData.speciality}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Adalabers</h1>
      <table>
        {/* <!-- Fila de cabecera --> */}
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Primera fila --> */}
          {htmlAdalabers}
        </tbody>
      </table>
      <section>
        <h2 className="subtitle">Añadir una Adalaber</h2>

        <form action="" className="form__title">
          <label className="form__text" htmlFor="name">
            Nombre:
            <input
              type="text"
              className="form__input"
              //value={}
              name="name"
              id="id"
              placeholder="Patatita"
              //onChange={}
            />
          </label>
          <label className="form__text" htmlFor="counselor">
            Tutora:
            <input
              type="text"
              className="form__input"
              //value={}
              name="name"
              id="id"
              placeholder="Maestro Jedi"
              //onChange={}
            />
          </label>
          <label className="form__text" htmlFor="specialty">
            Especialidad:
            <input
              type="text"
              className="form__input"
              //value={}
              name="name"
              id="id"
              placeholder="Tu superpoder"
              //onChange={}
            />
          </label>
          <button className="form__btn">Añadir una nueva Adalaber</button>
        </form>
      </section>
    </div>
  );
}

export default App;
