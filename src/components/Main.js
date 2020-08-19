import React, { useState } from 'react';
import Post from './Post'

function Main() {
    const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState({
        id: null,
        title: '',
        text: '',
        upvoted: false
    })

    const updateTitle = (e) => {
        setNewPost({
            ...newPost,
            id: posts.length,
            title: e.target.value
        })
    }
    const updateText = (e) => {
        setNewPost({
            ...newPost,
            id: posts.length,
            text: e.target.value
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
            upvoted: false
        })
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
                                    upvoted={e.upvoted}
                                />
                            ))
                        )
                }
            </div>
        </div>
    );
}

export default Main;
