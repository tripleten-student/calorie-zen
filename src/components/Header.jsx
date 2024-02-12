import headerLogo from "../assets/calorieZen.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Calorie Zen Logo" />
      <h1 className="header__title">Calorie-Zen</h1>
    </div>
  );
}

export default Header;
