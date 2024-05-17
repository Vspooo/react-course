import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayOut from "./layouts/MainLayOut";
import UsersPage from "./pages/UsersPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";

let router = createBrowserRouter([
    {
        path: "/", element: <MainLayOut></MainLayOut>, children: [
            {index : true, element: <Navigate to={"users"}/>},
            {path: "users", element: <UsersPage></UsersPage>},
            {path: "comments", element: <CommentsPage></CommentsPage>},
            {path: "posts", element: <PostsPage></PostsPage>}
        ]
    }
]);

export {
    router
}