import { useState, useEffect } from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import "../styles/main.css"

export default function Home() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des logements");
        return res.json();
      })
      .then((data) => {
        setLogements(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <main>
      <Banner />
      <div className="cards-container">
        {logements.slice(0, 20).map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </main>
  );
  
}
