import React, {FC} from 'react';
import {ICommentModel} from "../../Models/basicModels/commentModel";

interface IProps{
    comment: ICommentModel
}

const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <p>{comment.user.username}</p>
            <h4>{comment.body}</h4>
            <p>likes:{comment.likes}</p>
            <hr/>
        </div>
    );
};

export default CommentComponent;