import "./User.css";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const User = () => {
  return (
    <div className="user">
      <img src="./media/avatar.png" alt="" className="user__avatar" />
      <h1 className="user__name">ALY DiabirA</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          Rosny sous bois, 93110
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33660469119">0768020081</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:d-aly@outlook.fr">d-aly@outlook.fr</a>
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance : 01-12-1991
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Lieu de naissance : Montreuil
        </p>
      </div>
    </div>
  );
};

export default User;
