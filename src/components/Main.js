import React, { useState } from 'react';
import Post from './Post';

// react-id-generator
import nextId from "react-id-generator";

function Main() {

    //define a random id
    const htmlId = nextId();

    // localStorage
    const localStorageItem = JSON.parse(localStorage.getItem('posts'));

    // Set items to localStorage or set an empty array
    const [posts, setPosts] = useState(
        (localStorageItem) ? (localStorageItem) : []
    );

    const [newPost, setNewPost] = useState({
        id: null,
        title: '',
        text: '',
        upvote: false,
        date: ""
    })

    // Get new date for posts
    let date = new Date();


    // set title,date,id of post
    const updateTitle = (e) => {
        setNewPost({
            ...newPost,
            id: htmlId,
            title: e.target.value,
            date: date.toDateString()
        })
    }

    // set text of post
    const updateText = (e) => {
        setNewPost({
            ...newPost,
            id: htmlId,
            text: e.target.value,
            date: date.toLocaleString()
        })
    }

    // Post it
    const post = (e) => {
        e.preventDefault();
        if (newPost.title && newPost.text) {
            setPosts([newPost, ...posts])
        } else {
            alert("Fill fields")
        }
        setNewPost({
            id: null,
            title: '',
            text: '',
            upvote: false
        })
    }

    // Delete post
    const handleRemove = (id) => {
        const newerList = posts.filter((e) => e.id !== id)
        setPosts(newerList);
    }


    // upvote
    const upVotePost = (id) => {
        setPosts(prevState => prevState.map((element) => {
            if (element.id === id) {
                element.upvote = true
            }
            return element
        })
        )
    }

    // downvote
    const downVotePost = (id) => {
        setPosts(prevState => prevState.map((element) => {
            if (element.id === id) {
                element.upvote = false
            }
            return element
        })
        )
    }

    // set items to localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    return (
        <div className="container">
            <form onSubmit={post}>
                <input type="text" placeholder="title..." value={newPost.title} onChange={updateTitle} />
                <textarea name="post-content" id="post-content" placeholder="content..." value={newPost.text} onChange={updateText}></textarea>
                <button id="btn-submit">POST</button>
            </form>
            <div className="border"></div>
            <div className="posts-container">
                {
                    posts.length === 0 ? (
                        <div className="no-posts-div">
                            <p>No Recent Posts ☹</p>
                        </div>
                    ) : (
                            posts.map(e => (
                                <Post
                                    key={e.id}
                                    id={e.id}
                                    title={e.title}
                                    text={e.text}
                                    date={e.date}
                                    upvote={e.upvote}
                                    handleRemove={handleRemove}
                                    upVotePost={upVotePost}
                                    downVotePost={downVotePost}
                                />
                            ))
                        )
                }
            </div>
        </div>
    );
}

export default Main;
