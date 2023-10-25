import { MagnifyingGlass } from 'react-loader-spinner'

export const LoadingRepos = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
            <p>Downloading Repositories</p>
        </div>
    )
}
