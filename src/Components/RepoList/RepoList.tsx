import { Repository } from "../../types" 
import { RepoCard } from "./RepoCard" 


interface RepoListProps {
    repoResults: Repository[]
    searchQuery: string
    handleSelectRepo: (repository: Repository) => void
}

export const RepoList: React.FC<RepoListProps> = ({ repoResults, searchQuery, handleSelectRepo }) => {

    return (
        <div className=" overflow-x-hidden flex flex-col p-2 w-full gap-3 md:w-3/4 items-center">
            {repoResults.filter((repo) => {
                if (searchQuery.trim() === '') {
                    return true 
                }
                else if (repo.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    return true 
                }
                return false 
            }).map((repository, index) => {
                return <RepoCard handleSelectRepo={handleSelectRepo} repository={repository} key={index}/>
            })}
        </div>
    )
}
