import {IPostModel} from "../models/basic-models/PostModel";
import React, {FC} from "react";

interface IProps {
    post: IPostModel
}

type IPostTypeProps = IProps & { children?: React.ReactNode }

const PostComponent: FC<IPostTypeProps> = () => {
    return (<div>

    </div>)
}

export default PostComponent

