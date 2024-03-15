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
      <h1 className="user__name">Vincent LISITA</h1>
      <p className="user__profession">Développeur Front-end</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          43 rue Bourgonner, 49000 ANGERS
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33660469119">06 60 46 91 19</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:lisita_vincent@yahoo.fr">lisita_vincent@yahoo.fr</a>
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance : 26 décembre 1986
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Lieu de naissance : Les-Pavillons-sous-Bois
        </p>
      </div>
    </div>
  );
};

export default User;
