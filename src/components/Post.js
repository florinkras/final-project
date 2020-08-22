import React from 'react';

function Post(props) {
    return (
        <div className="post">
            <div className="post-title-data">
                <h2>{props.title}</h2>
                <p>{props.date}</p>
            </div>
            <div className="post-content">
                <p>{props.text}</p>
            </div>
            <div className="post-actions">
                <div className="btn-upvote">
                    {
                        props.upvote ? (
                            <button onClick={() => props.downVotePost(props.id)}>DownVote</button>
                        ) : (
                                <button onClick={() => props.upVotePost(props.id)}>UpVote</button>
                            )
                    }
                </div>
                <div className="div">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-delete" onClick={() => props.handleRemove(props.id)}>Delete</button>

                </div>
            </div>
        </div>
    );
}

export default Post;
