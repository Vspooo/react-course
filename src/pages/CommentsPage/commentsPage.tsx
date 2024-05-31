import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../../Models/basicModels/commentModel";
import {commentApiService} from "../../services/comment.api.service";
import CommentsComponent from "../../Components/CommentsComponent/CommentsComponent";

const CommentsPage = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    const{id} =useParams()
    useEffect(() => {
        if (id){
            commentApiService.getCommentsByPost(id)
                .then(value => setComments(value.data.comments))
        }
    }, []);
    return (
        <div>
           <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;