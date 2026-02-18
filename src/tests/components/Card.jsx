import { Link } from "react-router-dom";

export default function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} /> 
      <div className="card-overlay">
      <h3>{logement.title}</h3>
      </div>
    </Link>
  );
}
