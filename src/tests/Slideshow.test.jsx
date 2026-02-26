import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Slideshow from "../components/Slideshow";

const pictures = [
  "https://via.placeholder.com/150/0000FF",
  "https://via.placeholder.com/150/FF0000",
];

describe("Test du composant Slideshow", () => {
  
  it("Doit afficher la première image et le compteur", () => {
    render(<Slideshow pictures={pictures} />);
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  it("Doit pouvoir changer d'image si on appuie sur la flèche droite", () => {
    render(<Slideshow pictures={pictures} />);
    const rightArrow = screen.getByText("›"); 
    fireEvent.click(rightArrow);
    expect(screen.getByText("2/2")).toBeInTheDocument();
  });

  it("Doit pouvoir changer d'image si on appuie sur la flèche gauche", () => {
    render(<Slideshow pictures={pictures} />);
    const leftArrow = screen.getByText("‹"); 
    fireEvent.click(leftArrow);
    expect(screen.getByText("2/2")).toBeInTheDocument();
  });

  it("Doit revenir à la première image après la dernière", () => {
    render(<Slideshow pictures={pictures} />);
    const rightArrow = screen.getByText("›");
    fireEvent.click(rightArrow); // 2/2
    fireEvent.click(rightArrow); // 1/2
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

it("Ne doit pas afficher les flèches si une seule image", () => {
  render(<Slideshow pictures={["https://via.placeholder.com/150"]} />);
  
  expect(screen.queryByText("›")).not.toBeInTheDocument();
  expect(screen.queryByText("‹")).not.toBeInTheDocument();
});
});
