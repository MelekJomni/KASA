import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

const logementMock = {
  id: "123",
  cover: "https://via.placeholder.com/150",
  title: "Titre du logement",
};

describe("Composant Card", () => {
  it("doit afficher l'image avec le bon src et alt", () => {
    render(
      <MemoryRouter>
        <Card logement={logementMock} />
      </MemoryRouter>
    );

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", logementMock.cover);
    expect(img).toHaveAttribute("alt", logementMock.title);
  });

  it("doit afficher le titre du logement", () => {
    render(
      <MemoryRouter>
        <Card logement={logementMock} />
      </MemoryRouter>
    );

    const title = screen.getByText(logementMock.title);
    expect(title).toBeInTheDocument();
  });

  it("le lien doit pointer vers /logement/id", () => {
    render(
      <MemoryRouter>
        <Card logement={logementMock} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/logement/${logementMock.id}`);
  });
});