import Collapse from "../components/Collapse-about";
import "../styles/About.css"
export default function About() {
  const faqs = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent des informations fiables."
    },
    {
      title: "Respect",
      content: "Le respect des autres utilisateurs est obligatoire."
    },
    {
      title: "Service",
      content: "Notre service client est disponible 24h/24 et 7j/7."
    },
    {
      title: "Sécurité",
      content: "Vos données personnelles sont protégées et sécurisées."
    }
  ];

  return (
    <main>
  
      <div className="banner-about">
        <img src="/public/about-banner.png" className="banner-img" alt="Bannière Kasa"/>
        </div>
        <div className="banner-content">
      {faqs.map((faq, index) => (
        <Collapse key={index} title={faq.title}>
          <p>{faq.content}</p>
        </Collapse>
      ))}
      </div>
    </main>
  );
}