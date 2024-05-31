const baseURL = "https://dummyjson.com"
const users = "/users"

const posts = "/posts"
const postsById = (id:string) => `/posts/user/${id}`

const commentByPostId = (id:string) => `/comments/post/${id}`

const urls = {
    users,
    posts,
    postsById,
    commentByPostId
}


export {
    urls,
    users,
    baseURL
}