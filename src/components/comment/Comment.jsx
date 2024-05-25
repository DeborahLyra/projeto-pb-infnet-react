/* eslint-disable react/prop-types */
import React from "react";
import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import axios from 'axios';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(content.likeCount)

    const putData = async () => {
        const response = await axios.put(`http://localhost:3000/comments/${content.id}`, content)
      }

    const handelDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikes = () => {
        setLikeCount(likeCount + 1)
        content.likeCount = likeCount
        putData()
    }

    const dateFormated = (publishedAt) =>
        format(publishedAt, "dd 'de' LLLL 'as' HH:mm'h'", {
            locale: ptBr,
        });

    const dateFromNow = (publishedAt) =>
        formatDistanceToNow(publishedAt, {
            locale: ptBr,
            addSuffix: true,
        });
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={content.author.avatarUrl} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.autorAndTime}>
                            <strong>{content.author.name}</strong>
                            <time title={dateFormated(content.publishedAt)}>
                                {dateFromNow(content.publishedAt)}
                            </time>
                        </div>
                        <button title='trash'
                            onClick={handelDeleteComment}>
                            <Trash size={24}
                            />
                        </button>
                    </header>
                    <p>{content.comment}</p>
                </div>
                <footer>
                    <button onClick={(handleLikes)}>
                        <ThumbsUp />
                        Gostei <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
