/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment({content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    const handelDeleteComment = () => {
            onDeleteComment(content)
    }

    const handleLikes = () => {
        setLikeCount(likeCount + 1)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.autorAndTime}>
                            <strong>Suspicious Pug</strong>
                            <time title='05 de março as 12h' dateTime="2024-03-05 12:00:00">Há cerca de 20min</time>
                        </div>
                        <button title='trash'
                        onClick={handelDeleteComment}>
                            <Trash size={24}
                            />
                        </button>
                    </header>
                    <p>{content}</p>
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
