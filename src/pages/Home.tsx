import LoadingDots from "../components/LoadingDots";
import logo from "../assets/LOGO.png";

const Home = () => {
  return (
    <div className="container">
      <div className="logo-section">
        <img
          src={logo}
          alt="CM - Desarrollo de Software"
          className="logo-image"
        />
      </div>

      <div className="status-section">
        <h1 className="status-title">En Proceso...</h1>
        <LoadingDots />
      </div>
    </div>
  );
};

export default Home;
