import "../styles/main.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src="/banner.png" alt="Bannière Kasa" className="banner-img" />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}