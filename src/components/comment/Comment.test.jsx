import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mock axios for testing
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';

jest.mock('axios'); // Mock axios for testing

jest.mock('date-fns', () => ({
    ...jest.requireActual('date-fns'), // Mantém a implementação original de outras funções
    format: jest.fn(), // Mocka a função `format` como uma função jest.fn()
    formatDistanceToNow: jest.fn(),
  }));

describe('Comment component', () => {
  const content = 
    {
        "id": "1716420940126",
        "postId": "1",
        "comment": "4",
        "author": {
          "name": "The Worried Pug",
          "role": "Web Developer",
          "avatarUrl": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        },
        "publishedAt": "2024-05-22T23:35:40.126Z",
        "likeCount": 2
      };

  test('renders comment content correctly', () => {
    format.mockReturnValue('20 de maio de 2022 às 14:30');
    formatDistanceToNow.mockReturnValue('há 2 horas');

    render(<Comment content={content} onDeleteComment={() => {}} />);
    
    expect(screen.getByText(content.author.name)).toBeInTheDocument();
    expect(screen.getByText(content.comment)).toBeInTheDocument();
  });

    test('updates likeCount on like button click', async () => {
    format.mockReturnValue('20 de maio de 2022 às 14:30');
    formatDistanceToNow.mockReturnValue('há 2 horas');

    render(<Comment content={content} onDeleteComment={() => {}} />);
    
    const likeButton = screen.getByText('Gostei');
    fireEvent.click(likeButton);

    // Aguarda um pequeno intervalo de tempo antes de verificar o texto
    await waitFor(() => {
        expect(screen.getByText(`Gostei`)).toBeInTheDocument();
    });
    });


  test('calls handelDeleteComment when delete button is clicked', () => {
    format.mockReturnValue('20 de maio de 2022 às 14:30');
    formatDistanceToNow.mockReturnValue('há 2 horas');

    const onDeleteComment = jest.fn();
    render(<Comment content={content} onDeleteComment={onDeleteComment} />);
    
    const deleteButton = screen.getByTitle('trash');
    fireEvent.click(deleteButton);
    
    expect(onDeleteComment).toHaveBeenCalledWith(content);
  });

  test('calls axios put method when handleLikes is called', async () => {
    format.mockReturnValue('20 de maio de 2022 às 14:30');
    formatDistanceToNow.mockReturnValue('há 2 horas');
    
    render(<Comment content={content} onDeleteComment={() => {}} />);
    const putSpy = jest.spyOn(axios, 'put');
    
    const likeButton = screen.getByText('Gostei');
    fireEvent.click(likeButton);
    
    expect(putSpy).toHaveBeenCalledWith(`http://localhost:3000/comments/${content.id}`, content);
  });
});