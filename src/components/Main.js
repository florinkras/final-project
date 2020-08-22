import React, { useState, useEffect } from 'react';
import Post from './Post'

function Main() {
    const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState({
        id: null,
        title: '',
        text: '',
        upvote: false,
        date: ""
    })



    let date = new Date();

    const updateTitle = (e) => {
        setNewPost({
            ...newPost,
            id: posts.length,
            title: e.target.value,
            date: date.toDateString()
        })
    }
    const updateText = (e) => {
        setNewPost({
            ...newPost,
            id: posts.length,
            text: e.target.value,
            date: date.toLocaleString()
        })
    }

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

    const handleRemove = (id) => {
        const newerList = posts.filter((e) => e.id !== id)
        setPosts(newerList);
    }

    const upVotePost = (id) => {
        setPosts(prevState => prevState.map((element) => {
            if (element.id === id) {
                element.upvote = true
            }
            return element
        })
        )
    }

    const downVotePost = (id) => {
        setPosts(prevState => prevState.map((element) => {
            if (element.id === id) {
                element.upvote = false
            }
            return element
        })
        )
    }

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
