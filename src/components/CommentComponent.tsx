import React, {FC} from 'react';
import {IComment} from "../interfaces/IComment";
import styles from "./commentComponent.module.css"

interface IProps {
    comments: IComment[],
}

const CommentComponent: FC<IProps> = ({comments}) => {
    return (
        <div  className={styles.commentWrap}>
            {
                comments.map(({postId, id, body}) =>
                    <div className={styles.commentCard} key={id}>
                        <p><span>Comment ID:</span> {id}</p>
                        <p><span>Post ID:</span> {postId}</p>
                        <p><span>Comment:</span> {body}</p>
                    </div>
                )
            }
        </div>
    );
};

export default CommentComponent;