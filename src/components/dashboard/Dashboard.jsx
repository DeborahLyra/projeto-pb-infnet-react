/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Posts } from "../posts/Posts";
import axios from "axios";
import { Plus } from "phosphor-react";
import styled from "styled-components";
import {DialogComponent} from "../dialog/Dialog";

export function Dashboard() {

  const [topicos, setTopicos] = useState([]);
  const [open, setOpen] = useState(false)

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/posts')
    const dataJson = await response.data
    setTopicos(dataJson)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAddPost = () => {
    setOpen(!open)
  }

  const handleSubmitNewPost = async (newPost) => {
    if (newPost.trim()) {

      const post = {
        "id": String(new Date().getTime()),
        "showComments": false,
        "author": {
          "name": "The Worried Pug",
          "role": "Web Developer",
          "avatarUrl": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        },
        "content": [
          {
            "type": "paragraph",
            "content": newPost
          },
          {
            "type": "link",
            "content": "jane.design/doctorcare"
          },
          {
            "type": "link",
            "content": "#novoprojeto"
          },
          {
            "type": "link",
            "content": "#infnet"
          }
        ],
        "publishedAt": new Date(),
        "likes": 0
      }

      try {
        const response = await axios.post('http://localhost:3000/posts',  post );
        setTopicos([...topicos, response.data]);
        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onDelete = async(id) => {
    await deleteData(id);
    await fetchData();
  }

  const deleteData = async (id) => {
    const response = await axios.delete(`http://localhost:3000/posts/${id}`);
    return response;
  }


  return (
    <>
      <PlusButton onClick={handleAddPost}><Plus size={32} /></PlusButton>
      {topicos.map((topico, index) => {
        return (
          <Posts key={index} content={topico} onDelete={onDelete} />
        );
      })}
      <DialogComponent 
      open={open} 
      onClose= {handleAddPost}
      onSubmit={handleSubmitNewPost}
      />
    </>
  );
}


const PlusButton = styled.button`
  border: 3px solid var(--green-500);
  color:var(--green-500);
  border-radius: 50%;
  padding: 8px;
  margin-bottom: 1rem;
  margin-right: 5rem;
  background-color: #0000;
  cursor: pointer;

  position: fixed;
  bottom: 0;
  right: 0;

  &:hover{
    background-color: var(--green-500);
    color: black;
  }
`