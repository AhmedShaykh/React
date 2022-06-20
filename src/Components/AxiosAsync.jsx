import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosAsync() {

  const [post, setPost] = useState([{}]);

  const apiRequest = "https://api.github.com/users/SyedMuhammedBilal/repos";

  useEffect(() => {
    axios.get(apiRequest)
      .then((json) => {
        console.log(json.data)
        setPost(json.data)
      })
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