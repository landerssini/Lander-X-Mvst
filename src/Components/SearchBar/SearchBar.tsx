import React, { MutableRefObject } from 'react'
import { UserList } from '../../types'

interface SearchBar {
    selectedUser: UserList | undefined
    searchQuery: string
    handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    inputRef: MutableRefObject<HTMLInputElement | null>
}


export const SearchBar: React.FC<SearchBar> = ({ selectedUser, searchQuery, handleSearchInputChange, inputRef }) => {
    return (
        <div className=" w-full flex justify-center">
            <input type="search" ref={inputRef as MutableRefObject<HTMLInputElement | null>} className=" p-4 text-sm  text-gray-900 border border-gray-300 bg-slate-50 rounded-2xl w-2/3 lg:w-2/6 " placeholder={selectedUser ? `Search ${selectedUser.node.login} Repositories` : "Search Users"} value={searchQuery} onChange={handleSearchInputChange} />
        </div>
    )
}
