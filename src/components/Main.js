import React from 'react';
import Posts from './Posts'

function Main() {
    return (
        <div className="container">
            <form>
                <input type="text" placeholder="title..." />
                <textarea name="post-content" id="post-content" placeholder="content..."></textarea>
                <button id="btn-submit">POST</button>
            </form>
            <div className="border"></div>
            <div className="posts-container">
                <Posts />
                <Posts />
                <Posts />

            </div>

        </div>
    );
}

export default Main;
