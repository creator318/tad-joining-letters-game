import { Link } from "react-router-dom";
// import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const clicked = () => {
    const msg = new SpeechSynthesisUtterance("");
    window.speechSynthesis.speak(msg);
  };
  return (
    <>
      <section className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="m-5">Connecting Letters - Bridging</h1>
          <div className="card  border border-4 " style={{ maxWidth: "350px", minWidth: "280px" }}>
            <div className="card-body d-flex flex-column flex-wrap justify-content-center">
              <img
                src="/Game.jpg"
                alt="Game Logo"
                className="img-fluid rounded-3 border border-4 border-black"
              />
              <p className="card-text">
                Connect a letter on Left Side of the page to a letter on right side of the page by
                following the line.
              </p>
              <Link
                to="/game"
                type="button"
                className="btn btn-primary d-block"
                clicked={clicked}
              >
                Start
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
