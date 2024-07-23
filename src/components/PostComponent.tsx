import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";
import styles from "./postComponent.module.css"

interface IProps {
    posts: IPost[],
}

const PostComponent: FC<IProps> = ({posts}) => {
    return (
        <div className={styles.wrap}>
            {
                posts.map(({userId, id, title, body}) =>
                    <div className={styles.postCard} key={id}>
                        <p><span>Post Id: </span>{id}</p>
                        <p><span>User Id: </span>{userId}</p>
                        <p><span>Title: </span> {title}</p>
                        <p>{body}</p>
                    </div>)
            }
        </div>
    );
};

export default PostComponent;