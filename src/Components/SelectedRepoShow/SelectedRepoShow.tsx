import { Tooltip as ReactTooltip } from "react-tooltip"
import memoryIcon from "../../assets/memoryIcon.svg"
import linkIcon from "../../assets/linkIcon.svg"
import starIcon from "../../assets/starIcon.svg"
import forkIcon from "../../assets/forkIcon.svg"
import lockIcon from "../../assets/lockIcon.svg"
import publicIcon from "../../assets/publicIcon.svg"
import { Repository } from "../../types"

interface SelectedRepoShowProps {
    selectedRepo: Repository
    handleQuitSelectedRepo: () => void
}

export const SelectedRepoShow: React.FC<SelectedRepoShowProps> = ({selectedRepo, handleQuitSelectedRepo}) => {
    return (
        <div className="flex flex-col items-center gap-3 w-full xl:w-1/2">

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 " onClick={handleQuitSelectedRepo}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    See all repositories
                </span>
            </button>
            <div className="bg-white rounded-2xl p-4 w-full flex flex-col gap-3 md:w-2/3">
                <div className="flex w-full">
                    <div>

                        <div className="flex gap-2">
                            <h2 className="text-xl font-semibold">{selectedRepo.name}</h2>
                            {selectedRepo.isPrivate ? <img src={lockIcon} alt="" data-tooltip-id="isPrivate" /> : <img src={publicIcon} alt="" data-tooltip-id="isPrivate" />}
                            <a href={selectedRepo.url} data-tooltip-id="url" target="_blank" rel="noopener noreferrer"><img src={linkIcon} alt="" /></a>
                            <ReactTooltip
                                id="isPrivate"
                                place="bottom"
                                content={selectedRepo.isPrivate ? "Private" : "Public"}
                            />
                            <ReactTooltip
                                id="url"
                                place="bottom"
                                content={selectedRepo.url}
                            />
                        </div>
                        <p> {new Date(selectedRepo.createdAt).toLocaleDateString()}</p>

                    </div>
                    <div className="ml-auto md:flex-row flex flex-col">
                        <div className="flex items-center">
                            <img src={starIcon} alt="" className="ml-auto" />
                            <h2 className="text-sm font-semibold">{selectedRepo.stargazerCount}</h2>
                        </div>
                        <div className="flex items-center">
                            <img src={forkIcon} alt="" className="ml-auto" />
                            <h2 className="text-sm font-semibold">{selectedRepo.forkCount}</h2>
                        </div>
                    </div>
                </div>
                <p>{selectedRepo.description}</p>

                <div className="flex gap-3">
                    <div className="flex">
                        <img src={memoryIcon} alt="" className="w-6 h-6" />
                        <p>{selectedRepo.diskUsage} bytes</p>
                    </div>
                    {selectedRepo.collaborators ?
                        <div className="flex gap-2">
                            <p><strong>Collaborators:</strong></p>
                            <div className="flex gap-2">
                                {
                                    selectedRepo.collaborators.nodes.map((collaborator, index) => {
                                        return <div data-tooltip-id={`${index}avatar`} key={index} className="w-8 h-8">

                                            <img src={collaborator.avatarUrl} alt="" key={index} className="rounded-full" />
                                            <ReactTooltip
                                                id={`${index}avatar`}
                                                place="bottom"
                                                content={collaborator.login}
                                            />
                                        </div>
                                    })
                                }
                            </div>

                        </div> : null}
                </div>
            </div>

        </div>
    )
}
