/* eslint-disable react/jsx-key */
import styles from "./Dashboard.module.css";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";
import { Trash, ThumbsUp, ArrowCircleDown } from 'phosphor-react'
import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function Dashboard() {

  const [topicos, setTopicos] = useState([]);
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState([
    'muito bacana',
  ])

  const fetchData = async () => {
    const response = await fetch('src/mock/posts.json')
    const dataJson = await response.json()
    setTopicos(dataJson)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const dateFormated = (publishedAt) => format(publishedAt, "dd 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBr,
  })

  const dateFromNow = (publishedAt) => formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  const atualizarComentarios = (index) => {
    const novosTopicos = [...topicos];
    novosTopicos[index].comment = !novosTopicos[index].comment;
    setTopicos(novosTopicos);
  };


  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value)

  }

  const deleteComment = (commentToDelete) => {
    const newCommentList = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(newCommentList)
  }

  const handleNewComment = () => {
    event.preventDefault()

    //const newCommentText = event.target.comment.value //coloca o name na textarea aí consegue pegar com o target

    setComments([...comments, newCommentText])

    //event.target.comment.value = ''

    setNewCommentText('') //precisa colocar que o value da textarea é = ao newComment para que possa apagar o  que tem escrito na textarea
  }


  const isBtnDisabled = newCommentText.length === 0

  return (
    <>
      {topicos.map((topico, index) => {
        return (
          <article className={styles.posts}>
            <header>
              <div className={styles.author}>
                <Avatar
                  src={topico.author.avatarUrl}
                  alt=""
                />
                <div className={styles.authorInfo}>
                  <strong>{topico.author.name}</strong>
                </div>
              </div>
              <time title={dateFormated(topico.publishedAt)} >
                {dateFromNow(topico.publishedAt)}
              </time>
            </header>

            <div className={styles.content}>
              {
                topico.content.map(line => {
                  if (line.type == 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                  } else if (line.type == 'link') {
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                  }
                })
              }
            </div>
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

            {topico.comment ? (
              <>
                <form onSubmit={handleNewComment} className={styles.commentForm}>
                  <strong>Deixe seu comentário</strong>
                  <textarea
                    placeholder="deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText} />
                  <footer>
                    <button type='submit' disabled={isBtnDisabled}>Publicar</button>
                  </footer>

                </form>

                <div className={styles.commentList}>
                  {
                    comments.map(comment => {
                      return <Comment
                        content={comment}
                        key={comment}
                        onDeleteComment={deleteComment}
                      />
                    })
                  }
                </div>
              </>
            ) : null}
          </article>
        );
      })}
    </>
  );
}
