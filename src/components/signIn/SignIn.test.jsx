import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';

describe('SignIn Component', () => {
  it('renders sign-in form correctly', () => {
    const { getByText, getByLabelText } = render(<SignIn />);
    expect(getByText('ForunTalk')).toBeInTheDocument();
    expect(getByLabelText('Nome Completo')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Nome de usuário')).toBeInTheDocument();
    expect(getByLabelText('Sobre')).toBeInTheDocument();
    expect(getByText('Foto de perfil')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
  });

});
