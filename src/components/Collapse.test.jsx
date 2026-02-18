

import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";

const setupCollapse = (title, content) => {
  render(<Collapse title={title}>{content}</Collapse>);
  const summary = screen.getByText(title); // le titre
  const details = screen.getByText(content).parentElement; // div contenant le contenu
  return { summary, details };
};

describe("Composant Collapse", () => {
  it("devrait afficher le titre", () => {
    render(<Collapse title="Mon titre">Mon contenu</Collapse>);
    expect(screen.getByText("Mon titre")).toBeInTheDocument();
  });

  it("devrait masquer le contenu par défaut et la flèche fermée", () => {
    const { container } = render(<Collapse title="Mon titre">Mon contenu</Collapse>);
    
    const content = container.querySelector(".collapse-content");
    const arrow = container.querySelector(".collapse-arrow");

    // contenu fermé
    expect(content).toHaveClass("collapse-content");
    expect(content).not.toHaveClass("open");

    // flèche fermée
    expect(arrow).toHaveClass("collapse-arrow");
    expect(arrow).not.toHaveClass("open");
  });

  it("devrait afficher le contenu et ouvrir la flèche au clic", () => {
    const { container } = render(<Collapse title="Mon titre">Mon contenu</Collapse>);

    const button = screen.getByRole("button", { name: /Mon titre/i });
    const content = container.querySelector(".collapse-content");
    const arrow = container.querySelector(".collapse-arrow");

    fireEvent.click(button);

    expect(content).toHaveClass("collapse-content open");
    expect(arrow).toHaveClass("collapse-arrow open");
  });

  it("devrait basculer l'état au clic multiple", () => {
    const { container } = render(<Collapse title="Mon titre">Mon contenu</Collapse>);

    const button = screen.getByRole("button", { name: /Mon titre/i });
    const content = container.querySelector(".collapse-content");
    const arrow = container.querySelector(".collapse-arrow");

    // premier clic → ouverture
    fireEvent.click(button);
    expect(content).toHaveClass("collapse-content open");
    expect(arrow).toHaveClass("collapse-arrow open");

    // deuxième clic → fermeture
    fireEvent.click(button);
    expect(content).not.toHaveClass("open");
    expect(arrow).not.toHaveClass("open");
  });
});