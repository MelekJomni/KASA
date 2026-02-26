import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Card from "../components/Card";

const logementMock = {
  id: "123",
  cover: "https://via.placeholder.com/150",
  title: "Titre du logement",
};

describe("Test du composant Card", () => {

  it("Doit afficher l'image avec le bon src et alt", () => {
    render(
      <MemoryRouter>
        <Card logement={logementMock} />
      </MemoryRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", logementMock.cover);
    expect(img).toHaveAttribute("alt", logementMock.title);
  });

  it("Doit afficher le titre du logement", () => {
    render(
      <MemoryRouter>
        <Card logement={logementMock} />
      </MemoryRouter>
    );

    expect(screen.getByText(logementMock.title)).toBeInTheDocument();
  });

  it("Le lien doit pointer vers /logement/id", () => {
    render(
      <MemoryRouter>
        <Card logement={logementMock} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/logement/${logementMock.id}`);
  });

});
