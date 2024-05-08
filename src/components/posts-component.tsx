import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/basic-models/PostModel";
import {getAllPosts} from "../services/posts.api.service";


interface IProps {
    userId: number
}




const PostsComponent:FC<IProps> = ({userId}) => {
    const [post, setPost] = useState<IPostModel[]>([])
    useEffect(() => {
        if (userId !== 0 ){

            getAllPosts(userId).then(value => setPost(value.data.posts))
        }
    }, [userId]);
    return (
        <div>
            {
                post
                    .map(post=> <div key={post.id}>{post.id}.{post.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;