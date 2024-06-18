import React from 'react';
import { render, screen } from '@testing-library/react';
import Ranking from './Ranking';

describe('Ranking component', () => {
  test('renders user ranking correctly', () => {
    const usuarios = [
      {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        score: 1000,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ];

    render(<Ranking />);

    usuarios.forEach((usuario) => {
      expect(screen.getByText(usuario.name)).toBeInTheDocument();
      expect(screen.getByText(usuario.email)).toBeInTheDocument();
      expect(screen.getByText(`${usuario.score} pontos`)).toBeInTheDocument();
    });
  });
});
