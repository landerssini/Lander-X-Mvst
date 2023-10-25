import React from 'react'
import { UserList } from '../../types'
import user from "../../assets/user.png"
import closeIcon from "../../assets/closeIcon.png"
import githubIcon from "../../assets/githubIcon.png"

interface SelectedUserShowProps {
    selectedUser: UserList | undefined
    handleQuitSelectedUser: () => void
    handleClickSelectedRepoShowComponent: () => void
}

export const SelectedUserShow: React.FC<SelectedUserShowProps> = ({ selectedUser, handleQuitSelectedUser, handleClickSelectedRepoShowComponent }) => {

    const handleClick = selectedUser ? () => {} : handleClickSelectedRepoShowComponent;
    return (

        <div className="flex  rounded-2xl items-center p-3 gap-3 w-fit border-2 " onClick={handleClick} >
            <img src={selectedUser ? selectedUser.node.avatarUrl : user} alt="" className="rounded-full w-[7vh] h-[7vh]" />
            <div>
                <p className="truncate text-white">{selectedUser ? selectedUser.node.login : "Select a user."}</p>
                <p className="truncate font-light hidden md:block text-white">{selectedUser ? selectedUser.node.location : null}</p>
            </div>
            {selectedUser ? <div className="ml-auto  gap-3 hidden md:flex md:items-center">
                <div>
                    <p className=' text-white'>{selectedUser.node.followers.totalCount}</p>
                    <p className="hidden md:block text-white">Followers</p>
                </div>
                <span className="md:hidden">-</span>
                <div>
                    <p className=' text-white'>{selectedUser.node.following.totalCount}</p>
                    <p className="hidden md:block text-white">Following</p>
                </div>
                <div>
                    <a href={selectedUser.node.url} target='_blank' className='cursor-pointer'>
                        <img src={githubIcon} alt="" className='w-[3vh] h-[3vh] invert' />
                    </a>
                </div>
            </div> : null}
            {selectedUser ? <img src={closeIcon} alt="" className="w-6 h-6 ml-auto md:ml-5 cursor-pointer bg-red-500 rounded-full p-1" onClick={handleQuitSelectedUser} /> : null}

        </div>
    )
}
