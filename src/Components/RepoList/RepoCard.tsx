import { formatNumber } from "../../Functions"
import { Tooltip as ReactTooltip } from "react-tooltip"
import starIcon from "../../assets/starIcon.svg"
import forkIcon from "../../assets/forkIcon.svg"
import { Repository } from "../../types" 

interface RepoCardProps {
    handleSelectRepo: (repository: Repository) => void 
    repository: Repository
}

export const RepoCard: React.FC<RepoCardProps>  = ({ handleSelectRepo, repository }) => {

    const createdDate: string = new Date(repository.createdAt).toLocaleDateString()

    return (
        <div className=" md:hover:-translate-y-1 md:hover:scale-105 bg-white border-2 border-gray-300 transition-all rounded-2xl flex p-3 shadow-2xl xl:w-2/3 md:w-11/12 w-full cursor-pointer" onClick={() => handleSelectRepo(repository)}>
            <div className="w-full">
                <h2 className="text-xl font-semibold">{repository.name}</h2>
                <h2 className="text-sm text-gray-500">{createdDate}</h2>
                <h2 className="line-clamp-2">{repository.description}</h2>
            </div>
            <div className="flex flex-col justify-center md:flex-row">

                <div className="flex items-center">
                    <img src={starIcon} alt="" className="ml-auto" />
                    <h2 className="text-sm font-semibold w-8 text-center" data-tooltip-id={`stargazerCount${repository.id}`}>{formatNumber(repository.stargazerCount)}</h2>
                    {repository.stargazerCount > 1000 ? <ReactTooltip
                        id={`stargazerCount${repository.id}`}
                        place="bottom"
                        content={`${repository.stargazerCount}`}
                    /> : null}
                </div>
                <div className="flex items-center">
                    <img src={forkIcon} alt="" className="ml-auto" />
                    <h2 className="text-sm font-semibold w-8 text-center" data-tooltip-id={`forkCount${repository.id}`}>{formatNumber(repository.forkCount)}</h2>
                    {repository.forkCount > 1000 ? <ReactTooltip
                        id={`forkCount${repository.id}`}
                        place="bottom"
                        content={`${repository.forkCount}`}
                    /> : null}
                </div>
            </div>
        </div>
    )
}
