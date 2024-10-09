import kuromiVideo from "../assets/kuromi.mp4";

const Header = () => {
  return (
    <header className="header">
      <video className="video-banner" autoPlay muted loop>
        <source src={kuromiVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Lore Dev Projects</h1>
    </header>
  );
};

export default Header;
