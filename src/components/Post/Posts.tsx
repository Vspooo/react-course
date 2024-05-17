import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../models/basicModels/postModel";
import {postsService} from "../../services/api.service.posts";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data.posts))
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;