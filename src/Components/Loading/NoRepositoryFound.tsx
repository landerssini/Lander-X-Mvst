import noResults from "../../assets/no-results.png"

export const NoRepositoryFound = () => {
    return (
        <div className="flex flex-col items-center gap-3">
            <img src={noResults} alt="" className="w-16 h-16" />
            <p>Oops, this user has not any repository</p>
        </div>
    )
}
