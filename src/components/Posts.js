import React from 'react';

function Posts() {
    return (
        <div className="post">
            <div className="post-title-data">
                <h2>Title</h2>
                <p>04/07/2020</p>
            </div>
            <div className="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="post-actions">
                <div className="btn-upvote"><button>UpVote</button></div>
                <div className="div">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Posts;
