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

  return (
    <>
      <PlusButton onClick={handleAddPost}><Plus size={32} /></PlusButton>
      {topicos.map((topico, index) => {
        return (
          <Posts key={index} content={topico} />
        );
      })}
      <DialogComponent open={open} onClose= {handleAddPost}/>
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