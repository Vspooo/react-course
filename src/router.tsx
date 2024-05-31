import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import React from "react";
import UsersPage from "./pages/UsersPage/usersPage";
import PostsPage from "./pages/PostsPage/postsPage";
import CommentsPage from "./pages/CommentsPage/commentsPage";

export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut/>,
        errorElement: "smth went wrong",
        children: [
            {index: true, element: <Navigate to={"users"}/>},
            {path: "users", element: <UsersPage/>},
            {path: "posts/users/:id", element: <PostsPage/>},
            {path:"comments/posts/:id", element: <CommentsPage/>}
        ]
    }
])