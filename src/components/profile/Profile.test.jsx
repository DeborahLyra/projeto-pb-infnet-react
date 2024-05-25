import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component', () => {
  test('renders profile information correctly', () => {
    // Arrange
    const fullName = 'Bruce Foster';
    const email = 'brucefoster@example.com';
    const username = 'Centenario22';
    const about = 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.';

    // Act
    render(<Profile />);

    // Assert
    expect(screen.getByText('Informações do Perfil')).toBeInTheDocument();
    expect(screen.getByText(fullName)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(username)).toBeInTheDocument();
    expect(screen.getByText(about)).toBeInTheDocument();
  });
});
