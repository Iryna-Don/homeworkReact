import React from 'react';
import './App.css';
import PostsComponent from "./components/Posts/PostsComponent";
import UsersComponent from "./components/Users/UsersComponent";

const App = () => {
    return (
        <div>
            <PostsComponent/>
            <UsersComponent/>
        </div>
    );
}

export default App;