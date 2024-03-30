import styles from "./Dashboard.module.css";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";
import { Trash, ThumbsUp, ArrowCircleDown } from 'phosphor-react'
import { useState } from "react";

export function Dashboard() {
  
  const data = [
    {
      nome: "The Worried Pug",
      comentarios: false,
    },
    {
      nome: "The Worried Cat",
      comentarios: false,
    },
  ];

  const [topicos, setTopicos] = useState(data);

  const atualizarComentarios = (index) => {
    const novosTopicos = [...topicos];
    novosTopicos[index].comentarios = !novosTopicos[index].comentarios;
    setTopicos(novosTopicos);
  };

  return (
    <>
      {topicos.map((topico, index) => {
        return (
          <article className={styles.posts}>
            <header>
              <div className={styles.author}>
                <Avatar
                  src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                  alt=""
                />
                <div className={styles.authorInfo}>
                  <strong>{topico.nome}</strong>
                </div>
              </div>
              <time title="05 de março as 12h" dateTime="2024-03-05 12:00:00">
                Publicado há 1 hora
              </time>
            </header>

            <div className={styles.content}>
                  <p>Fala galeraa 👋</p>
                  <p>
                    {" "}
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no evento da Infnet. O nome do
                    projeto é DoctorCare 🚀{" "}
                  </p>
                  <p>
                    👉<a href="#"> jane.design/doctorcare </a>
                  </p>
                  <p>
                    <a href="#">#novoprojeto</a> <a href="#">#dev</a>{" "}
                    <a href="#">#infnet</a>{" "}
                  </p>
                  <div className="flex mt-3 gap-2">
                    <button onClick={() => atualizarComentarios(index)}>
                      <ArrowCircleDown size={24} />
                    </button>
                    <button>
                        <ThumbsUp size={24} />
                    </button>
                    <button title='trash'>
                        <Trash size={24} />
                    </button>
                  </div>
            </div>

            {topico.comentarios ? (
              <>
                <form className={styles.commentForm}>
                  <strong>Deixe seu comentário</strong>
                  <textarea placeholder="deixe um comentário" />
                  <footer>
                    <button type="submit">Publicar</button>
                  </footer>
                  {/* precisou criar esse footer para alterar o bnt no css */}
                </form>

                <div className={styles.commentList}>
                  <Comment />
                  <Comment />
                  <Comment />
                </div>
              </>
            ) : null}
          </article>
        );
      })}
    </>
  );
}
