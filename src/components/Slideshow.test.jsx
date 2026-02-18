import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Slideshow from "./Slideshow";


const pictures = [
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000",
];


describe("Composant Slideshow", () => {
  it("doit afficher la première image et le compteur", () => {
    render(<Slideshow pictures={pictures} title="Test" />);
    const img = screen.getByRole("img");
    const counter = screen.getByText("1/2");

    expect(img).toHaveAttribute("src", pictures[0]);
    expect(counter).toBeInTheDocument();
  });

  it("doit passer à l'image suivante quand on clique sur la flèche droite", () => {
    render(<Slideshow pictures={pictures} title="Test" />);
    const rightArrow = screen.getByText("›"); // flèche droite

    fireEvent.click(rightArrow);

    const counter = screen.getByText("2/2");
    expect(counter).toBeInTheDocument();
  });

  it("doit passer à l'image précédente quand on clique sur la flèche gauche", () => {
    render(<Slideshow pictures={pictures} title="Test" />);
    const leftArrow = screen.getByText("‹"); // flèche gauche

    fireEvent.click(leftArrow);

    const counter = screen.getByText("2/2"); // boucle arrière
    expect(counter).toBeInTheDocument();
  });

  it("doit revenir à la première image après la dernière", () => {
    render(<Slideshow pictures={pictures} title="Test" />);
    const rightArrow = screen.getByText("›");

    fireEvent.click(rightArrow); // 2/2
    fireEvent.click(rightArrow); // 1/2

    const counter = screen.getByText("1/2");
    expect(counter).toBeInTheDocument();
  });
});