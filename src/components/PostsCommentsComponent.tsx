import React, {useEffect, useMemo, useState} from 'react';
import {useMyContextProvider} from "../context/Context";
import {PostWithCommentsType} from "../models/PostWithCommentsType";

const PostsCommentsComponent = () => {
    const {postStore: {allPosts}, commentStore: {allComments}} = useMyContextProvider();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([]);
    const postsWithComments = useMemo(() => {
        return allPosts.map(post => {
            return {...post, comments: allComments.filter(comment => post.id === comment.postId)};
        })
    }, [allPosts, allComments]);
    useEffect(() => {
        setPostsWithCommentsState(postsWithComments)
    }, [postsWithComments]);
    return (
        <div>
            {
                postsWithCommentsState.map(value => <div key={value.id}>
                    <h3>Title: {value.title}</h3>
                    <h4>Post: {value.body}</h4>
                    <div>{value.comments.map(comment => <div key={comment.id}>{comment.id} - {comment.body}</div>
                    )}</div>
                </div>)
            }
        </div>
    );
};

export default PostsCommentsComponent;