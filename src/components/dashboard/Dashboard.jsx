/* eslint-disable react/jsx-key */
import styles from "./Dashboard.module.css";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";
import { Trash, ThumbsUp, ArrowCircleDown } from 'phosphor-react'
import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Posts } from "../posts/Posts";

export function Dashboard() {

  const [topicos, setTopicos] = useState([]);

  const fetchData = async () => {
    const response = await fetch('src/mock/posts.json')
    const dataJson = await response.json()
    setTopicos(dataJson)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {topicos.map((topico, index) => {
        return (
          <Posts content={topico} />
        );
      })}
    </>
  );
}
