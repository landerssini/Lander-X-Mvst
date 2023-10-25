import React from 'react'
import { UserList } from '../../types';
import { UserCard } from './UserCard';


interface UserListProps {
    userResults: UserList[];
    handleSelectUser: (user: UserList) => void;
  }

  
export const UsersList: React.FC<UserListProps> = ({ userResults, handleSelectUser }) => {
    return (
        <div className={` overflow-x-hidden flex flex-col p-2 gap-3 w-full md:w-2/3  items-center`}>


            {userResults.map((user, index) => {
                if (!user.node.login) {
                    return
                }
                return <UserCard handleSelectUser={handleSelectUser} user={user} key={index}/>
            })}

        </div>
    )
}
