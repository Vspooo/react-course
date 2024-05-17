import React, {FC, PropsWithChildren} from 'react';
import {IPostModel} from "../../models/basicModels/postModel";


interface IProps extends PropsWithChildren{
    post:IPostModel
}

const Post:FC<IProps> = ({post}) => {
    return (
        <div>
          <h2>{post.id}.{post.title}</h2>
            <p>{post.body}</p>
            <hr></hr>
        </div>
    );
};

export default Post;