import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../models/basicModels/commentModel";
import {commentService} from "../../services/api.service.comments";
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        commentService.getAll().then(({data})=> setComments(data.comments))
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;