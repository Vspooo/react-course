import React, {FC} from 'react';
import {IPostModel} from "../../Models/basicModels/postModel";
import * as timers from "timers";
import {useNavigate} from "react-router-dom";

interface IProps {
    post : IPostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    const navigate = useNavigate()
    const handleButtonClick = () =>{
        navigate(`/comments/posts/${post.id}`)
    }
    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <h3>{post.body}</h3>
            <p>tags: {post.tags}</p>
            <button onClick={()=>{
                handleButtonClick()
            }}>show post`s comments</button>

        </div>
    );
};

export default PostComponent;