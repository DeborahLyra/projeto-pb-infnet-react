/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Posts } from "../posts/Posts";
import axios from "axios";

export function Dashboard() {

  const [topicos, setTopicos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/posts')
    const dataJson = await response.data
    setTopicos(dataJson)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {topicos.map((topico, index) => {
        return (
          <Posts key={index} content={topico} />
        );
      })}
    </>
  );
}
