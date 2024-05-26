import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/Users/UsersComponent";
import PostsComponent from "./components/Posts/PostsComponent";
import {IPostModel} from "./models/IPostModel";
import {requests} from "./services/dummyjson.api.service";

const App = () => {
    const[posts, setPosts]=useState<IPostModel[]>([]);
        const lift = (userId:number)=>{
            requests.usersById.getAllPostsById(userId).then(({data}) => setPosts(data.posts));
        }


    return (
        <div>
            <UsersComponent lift={lift}/>
            <PostsComponent allPostsById={posts}/>
        </div>
    );
}

export default App;