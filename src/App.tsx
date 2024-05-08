import React, {useState} from 'react';
import UsersComponent from "./components/users-component";
import PostsComponent from "./components/posts-component";

const App = () => {
    const [userId, setUserId] = useState<number|null>(null)
    let choseUser = (id:number)=>{
        setUserId(id)
    }

    return (
        <div>
      <UsersComponent choseUser={choseUser}></UsersComponent>
            {
                !!userId && <PostsComponent userId={userId}></PostsComponent>
            }
        </div>
    );
};

export default App;