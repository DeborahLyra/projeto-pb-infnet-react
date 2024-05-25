import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './Login';

describe('Login component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Login />);

    // Verificar se o título está presente
    expect(getByText('ForunTalk')).toBeInTheDocument();

    // Verificar se o campo de e-mail está presente
    expect(getByText('Email')).toBeInTheDocument();

    // Verificar se o campo de senha está presente
    expect(getByText('Senha')).toBeInTheDocument();

    // Verificar se o botão de login está presente
    expect(getByText('Login')).toBeInTheDocument();

    // Verificar se os links de registro e login sem login estão presentes
    expect(getByText('Crie sua conta')).toBeInTheDocument();
    expect(getByText('Entrar sem login')).toBeInTheDocument();
  });
});
