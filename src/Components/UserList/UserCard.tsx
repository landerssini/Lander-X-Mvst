import React from 'react'
import { UserList } from '../../types';
import followerIcon from "../../assets/followersIcon.png"


interface UserCardProps {
    user: UserList
    handleSelectUser: (user: UserList) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, handleSelectUser }) => {
    return (
        <div className="md:hover:-translate-y-1 md:hover:scale-105 transition-all flex border-2 bg-white border-gray-300 rounded-2xl items-center p-3 gap-2 cursor-pointer shadow-2xl xl:w-1/2 w-full" onClick={() => handleSelectUser(user)}>

            <img src={user.node.avatarUrl} alt="" className="w-1/6 md:w-1/12 rounded-full" />
            <div className="w-1/2">
                <p className="truncate">{user.node.login}</p>
                <p className="truncate">{user.node.location}</p>
            </div>
            <div className="hidden md:flex  items-center ml-auto gap-3">
                <img src={followerIcon} alt="" />
                <div>

                    <p>{user.node.followers.totalCount}</p>
                    <p className="hidden md:block">Followers</p>
                </div>
                <span className="md:hidden">-</span>
                <div>

                    <p>{user.node.following.totalCount}</p>
                    <p className="hidden md:block">Following</p>
                </div>

            </div>
        </div>
    )
}
