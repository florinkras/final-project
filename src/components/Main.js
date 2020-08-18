import React from 'react';

function Main() {
    return (
        <div className="container">
            <form>
                <input type="text" placeholder="title..." />
                <textarea name="post-content" id="post-content" placeholder="content..."></textarea>
                <button id="btn-submit">POST</button>
            </form>
            <div className="border"></div>
        </div>
    );
}

export default Main;
