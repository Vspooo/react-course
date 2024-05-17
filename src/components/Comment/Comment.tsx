import React, {FC, PropsWithChildren} from 'react';
import {ICommentModel} from "../../models/basicModels/commentModel";

interface IProps extends PropsWithChildren{
    comment: ICommentModel
}
const Comment:FC<IProps> = ({comment}) => {

    return (
        <div>
         <h2>PostId:{comment.postId}. {comment.body}</h2>
        </div>
    );
};

export default Comment;