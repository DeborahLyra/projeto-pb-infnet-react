import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

jest.mock("./Avatar.module.css", () => ({
  avatar: "avatar",
  avatarWithBorder: "avatarWithBorder",
}));

test("deve renderizar a imagem com borda por padrão", () => {
  render(<Avatar src="http://example.com/image.jpg" />);

  const imgElement = screen.getByAltText("profile");

  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveClass("avatarWithBorder");
});

test("deve renderizar a imagem com borda por padrão", () => {
  render(<Avatar src="http://example.com/image.jpg" hasBorder={false} />);

  const imgElement = screen.getByAltText("profile");

  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveClass("avatar");
});
