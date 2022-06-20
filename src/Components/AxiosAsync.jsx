import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosAsync() {

    const [post, setPost] = useState([{}]);

    useEffect(() => {
        async function getPost() {
            await axios("https://api.github.com/users/ziaukhan/repos")
                .then((api) => {
                    console.log(api.data)
                    setPost(api.data)
                })
        }

        getPost();
    }, [])

    return (
        <div>
            <h1>Axios Async Await Get API</h1>
            <ol>
                {post.map((postObj, index) => {
                    return (
                        <h5>
                            <li key={post.index}>{postObj.name}</li>
                        </h5>
                    )
                })}
            </ol>
        </div>
    )
}

export default AxiosAsync;