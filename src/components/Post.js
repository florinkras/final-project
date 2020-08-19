import React from 'react';

function Post(props) {
    return (
        <div className="post">
            <div className="post-title-data">
                <h2>{props.title}</h2>
                <p>04/07/2020</p>
            </div>
            <div className="post-content">
                <p>{props.text}</p>
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

export default Post;
