import styles from "./modulesCss/app.module.css"
import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/Users/UsersComponent";
import {IPostModel} from "./models/IPostModel";
import {requests} from "./services/dummyjson.api.service";
import PostsComponentById from "./components/Posts/PostsComponentById";
// import PostsComponent from "./components/Posts/PostsComponent";

const App = () => {
    const[posts, setPosts]=useState<IPostModel[]>([]);
        const lift = (userId:number)=>{
            requests.usersById.getAllPostsById(userId).then(({data}) => setPosts(data.posts));
        }


    return (
        <div className={styles.wrapperForAll}>
            <UsersComponent lift={lift}/>
            {/*<PostsComponent/>*/}
            <PostsComponentById allPostsById={posts}/>
        </div>
    );
}

export default App;