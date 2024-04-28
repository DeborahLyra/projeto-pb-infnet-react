/* eslint-disable react/jsx-key */
import styles from "./Posts.module.css";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";
import { Trash, ThumbsUp, ArrowCircleDown } from "phosphor-react";
import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import axios from "axios";

export function Posts({ content }) {
  const [topico, setTopico] = useState(content);
  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState([]);


  const getData = async () => {
    const response = await axios.get(`http://localhost:3000/comments?postId=${topico.id}`)
    const dataJson = await response.data
    setComments(dataJson)
  }

  const postData = async (content) => {
    const response = await axios.post(`http://localhost:3000/comments`, content)
  }

  const deleteData = async (id) => {
    const response = await axios.delete(`http://localhost:3000/comments/${id}`)
  }

  useEffect(() => {
    getData()
  }, [])

  const dateFormated = (publishedAt) =>
    format(publishedAt, "dd 'de' LLLL 'as' HH:mm'h'", {
      locale: ptBr,
    });

  const dateFromNow = (publishedAt) =>
    formatDistanceToNow(publishedAt, {
      locale: ptBr,
      addSuffix: true,
    });

  const atualizarComentarios = () => {
    setTopico({
      ...topico,
      showComments: !topico.showComments
    });
  };

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentToDelete) => {
    deleteData(commentToDelete.id)
    getData() 
  };

  const handleNewComment = () => {
    event.preventDefault();

    const comment = {
      "id": comments.length + 10,
      "postId": topico.id,
      "comment": newCommentText,
      "author": {
        "name": "The Worried Pug",
        "role": "Web Developer",
        "avatarUrl": "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
      },
      "publishedAt": new Date(),
      "likeCount": 2
    }
    postData(comment)
    setNewCommentText(""); 
    getData() 
  };

  const isBtnDisabled = newCommentText.length === 0;

  return (
    <>
      <article className={styles.posts}>
        <header>
          <div className={styles.author}>
            <Avatar src={topico.author.avatarUrl} alt="" />
            <div className={styles.authorInfo}>
              <strong>{topico.author.name}</strong>
            </div>
          </div>
          <time title={dateFormated(topico.publishedAt)}>
            {dateFromNow(topico.publishedAt)}
          </time>
        </header>

        <div className={styles.content}>
          {topico.content.map((line) => {
            if (line.type == "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type == "link") {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>
        <div className="flex mt-3 gap-2">
          <button onClick={() => atualizarComentarios()}>
            <ArrowCircleDown size={24} />
          </button>
          <button>
            <ThumbsUp size={24} />
          </button>
          <button title="trash">
            <Trash size={24} />
          </button>
        </div>
      
      
      {topico.showComments ? (
        <>
          <form onSubmit={handleNewComment} className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>
            <textarea
              placeholder="deixe um comentário"
              onChange={handleNewCommentChange}
              value={newCommentText}
            />
            <footer>
              <button type="submit" disabled={isBtnDisabled}>
                Publicar
              </button>
            </footer>
          </form>

          <div className={styles.commentList}>
            {comments.map((comment) => {
              return (
                <Comment
                  content={comment}
                  key={comment.id}
                  onDeleteComment={deleteComment}
                />
              );
            })}
          </div>
        </>
      ) : null}
      </article>
    </>
  );
}
