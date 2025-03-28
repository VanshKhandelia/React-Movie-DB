import "./about.css";
import camera_img from "/images/FinalLogo.svg";
import tmdb_logo from "/images/tmdb_logo.png";
function About() {
  return (
    <div className="about-container">
      <h2 className="page-header">About</h2>
      <div className="content">
        <img src={camera_img} alt="camera" className="about-logo" />
        <div className="right-column">
          <p className="about-text">
            This is a free and open website where anyone can find information
            about movies, TV shows, actors, and other entertainment. It's kind
            of like IMDb, but because it's open source, anyone can use it,
            change it, and help make it better. We have lots of details about
            films and TV programs, including who was in them, who directed them,
            what genre they are, ratings, reviews, and much more. Because it's
            run by the community, everyone is welcome to add new information,
            fix mistakes, and help grow the database. We believe that by working
            together, we can create a really complete resource for entertainment
            information. All movies and data are taken from the{" "}
            <a href="https://www.themoviedb.org/?language=en-CA">TMDB API</a>.
          </p>
          <img src={tmdb_logo} alt="tmdb logo" className="tmdb-logo" />
        </div>
      </div>
    </div>
  );
}
export default About;
