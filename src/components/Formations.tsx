import formationsData from "../data/formations";

const Formations = () => {
  return (
    <div className="cursus mb3">
      <h2 className="h2">Formations</h2>
      {formationsData.map((formation, key) => (
        <div className="grid__row" key={key}>
          <div className="grid__item">
            <p className="grid__date">{formation.date}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{formation.title}</h3>
            <p className="grid__location">{formation.location}</p>
            <ul className="grid__missions">
              {formation.missions.map((mission, k) => (
                <li className="grid_missions" key={k}>
                  {mission}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formations;
