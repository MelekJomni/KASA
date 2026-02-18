import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import "../styles/logement.css";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not Found");
        }
        return res.json();
      })
      .then((data) => {
        setLogement(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (notFound) return <Navigate to="*" replace />;

  const ratingNumber = Number(logement?.rating) || 0;
  const picturesArray = Array.isArray(logement?.pictures) ? logement.pictures : [];

  return (
    <main className="logement">
      <Slideshow pictures={picturesArray} title={logement?.title || "Logement"} />

      <section className="logement-header">
        <div className="logement-info">
          <h1>{logement?.title}</h1>
          <p className="location">{logement?.location}</p>

          <div className="tags">
            {(logement?.tags ?? []).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host">
            <span>{logement?.host?.name}</span>
            <img src={logement?.host?.picture} alt={logement?.host?.name || "Hôte"} />
          </div>

          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= ratingNumber ? "active" : ""}>
                ★
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="logement-collapses">
        <Collapse title="Description">
          <p>{logement?.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {(logement?.equipments ?? []).map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}