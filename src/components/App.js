import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  const [adalabersData, setAdalabersData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });

  useEffect(() => {
    callToApi().then((response) => {
      setAdalabersData(response.results);
    });
  }, []);

  const handleChangeName = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      name: ev.currentTarget.value,
    });
  };

  const handleChangeCounselor = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      counselor: ev.currentTarget.value,
    });
  };

  const handleChangespeciality = (ev) => {
    setNewAdalaber({
      ...newAdalaber,
      speciality: ev.currentTarget.value,
    });
  };

  const handleClickNewAdalaber = () => {
    newAdalaber.id = adalabersData.length;

    setAdalabersData([...adalabersData, newAdalaber]);
    setNewAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };

  const htmlAdalabers = adalabersData.map((adalabersData, index) => (
    <tr key={index}>
      <td>{adalabersData.name}</td>
      <td>{adalabersData.counselor}</td>
      <td>{adalabersData.speciality}</td>
    </tr>
  ));

  return (
    <div>
      <header>
        <h1 className="title">Adalabers</h1>
      </header>
      <table className="adalabers__list">
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
        <form
          action=""
          className="form__title"
          onSubmit={(ev) => ev.preventDefault()}
        >
          <label className="form__text" htmlFor="name">
            Nombre:
            <input
              type="text"
              className="form__input"
              value={newAdalaber.name}
              name="name"
              id="id"
              placeholder="Patatita"
              onChange={handleChangeName}
            />
          </label>
          <label className="form__text" htmlFor="counselor">
            Tutora:
            <input
              type="text"
              className="form__input"
              value={newAdalaber.counselor}
              name="name"
              id="id"
              placeholder="Maestro Jedi"
              onChange={handleChangeCounselor}
            />
          </label>
          <label className="form__text" htmlFor="speciality">
            Especialidad:
            <input
              type="text"
              className="form__input"
              value={newAdalaber.speciality}
              name="name"
              id="id"
              placeholder="Tu superpoder"
              onChange={handleChangespeciality}
            />
          </label>
          <button className="form__btn" onClick={handleClickNewAdalaber}>
            Añadir una nueva Adalaber
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
