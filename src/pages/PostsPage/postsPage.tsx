import React, {useEffect, useState} from 'react';
import PostsComponent from "../../Components/PostsComponent/PostsComponent";
import {IPostModel} from "../../Models/basicModels/postModel";
import {Outlet, useParams} from "react-router-dom";
import {postsApiService} from "../../services/posts.api.service";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPostModel[]>([])
    const {id} = useParams()
    useEffect(() => {
        if (id){
            postsApiService.getPostsOfUser(id)
                .then(value => setPosts(value.data.posts))
        }
    }, [id]);
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;