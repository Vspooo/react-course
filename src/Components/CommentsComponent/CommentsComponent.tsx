import React, {FC} from 'react';
import {ICommentModel} from "../../Models/basicModels/commentModel";
import CommentComponent from "./CommentComponent";

interface IProps {
    comments: ICommentModel[]
}

const CommentsComponent:FC<IProps> = ({comments}) => {

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;