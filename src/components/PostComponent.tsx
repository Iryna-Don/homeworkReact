import React, {FC} from 'react';
import {IPost} from "../interfaces/IPost";
import styles from "./postComponent.module.css"
import {Link} from "react-router-dom";

interface IProps {
    posts: IPost[],
}

const PostComponent: FC<IProps> = ({posts}) => {
    return (
        <div className={styles.wrap}>
            {
                posts.map(({userId, id, title, body}) =>
                    <Link className={styles.link} to={'../posts/' + id.toString() + '/comments'} key={id}>
                        <div className={styles.postCard}>
                            <p><span>Post Id: </span>{id}</p>
                            <p><span>User Id: </span>{userId}</p>
                            <p><span>Title: </span> {title}</p>
                            <p>{body}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default PostComponent;