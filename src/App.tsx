import { useEffect, useRef, useState } from "react"
import { getUserRepositories, getUsersList } from "./API/Github";
import { Repository, UserList } from "./types";
import { UsersList } from "./Components/UserList/UsersList";
import { LoadingRepos } from "./Components/Loading/LoadingRepos";
import { NoRepositoryFound } from "./Components/Loading/NoRepositoryFound";
import { RepoList } from "./Components/RepoList/RepoList";
import { SelectedRepoShow } from "./Components/SelectedRepoShow/SelectedRepoShow";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { SelectedUserShow } from "./Components/SelectedUserShow/SelectedUserShow";
import { Logo } from "./Components/Logo/Logo";

/**
 * Main App component for the application.
 * @component
 */
export const App = () => {
  // State variables for managing user input, selected user, repositories, and alerts
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedUser, setSelectedUser] = useState<UserList>()
  const [selectedRepo, setSelectedRepo] = useState<Repository>()
  const [userResults, setUserResults] = useState<UserList[]>([])
  const [repoResults, setRepoResults] = useState<Repository[]>([])
  const [noRepoAlert, setNoRepoAlert] = useState<boolean>(false)
  const timeoutIdRef = useRef<number | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickSelectedRepoShowComponent = () => {
    if (inputRef.current && inputRef.current instanceof HTMLInputElement) {
      inputRef.current.focus();
    }
  };

  /**
   * Event handler for input change in the search bar.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)

  }
  useEffect(() => {
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current)
    }
    if (searchQuery.length >= 3) {
      timeoutIdRef.current = window.setTimeout(async () => {
        const data = await getUsersList(searchQuery)
        setUserResults(data)
        console.log(data);


      }, 500);
    } else {
      setUserResults([]);
    }
  }, [searchQuery])
  /**
  * Event handler for selecting a user.
  * @param {UserList} user - The selected user.
  */
  const handleSelectUser = async (user: UserList) => {
    setSelectedUser(user)
    setSearchQuery("")
    const data = await getUserRepositories(user.node.login)
    console.log(data)
    if (data.length == 0) {
      setNoRepoAlert(true)
    }
    setRepoResults(data)
  }
  const handleQuitSelectedUser = async () => {
    setSelectedUser(undefined)
    setSelectedRepo(undefined)
    setNoRepoAlert(false)
    setRepoResults([])
  }
  /**
   * Event handler for selecting a repository.
   * @param {Repository} repository - The selected repository.
   */
  const handleSelectRepo = async (repository: Repository) => {
    setSelectedRepo(repository)
  }
  const handleQuitSelectedRepo = async () => {
    setSelectedRepo(undefined)
  }

  return (
    <>
      <div className="h-screen w-screen pt-2 flex flex-col items-center px-3 relative gap-3 bg-[url('./assets/bg/bg.svg')] bg-cover">
        <Logo />
        <SelectedUserShow handleQuitSelectedUser={handleQuitSelectedUser} selectedUser={selectedUser} handleClickSelectedRepoShowComponent={handleClickSelectedRepoShowComponent} />
        <SearchBar handleSearchInputChange={handleSearchInputChange} searchQuery={searchQuery} selectedUser={selectedUser} inputRef={inputRef} />
        {selectedRepo ? (
          <SelectedRepoShow handleQuitSelectedRepo={handleQuitSelectedRepo} selectedRepo={selectedRepo} />
        ) : selectedUser ? (
          repoResults ? repoResults.length > 0 ? (
            <RepoList handleSelectRepo={handleSelectRepo} repoResults={repoResults} searchQuery={searchQuery} />
          ) : noRepoAlert ? (
            <NoRepositoryFound />
          ) : (
            <LoadingRepos />
          ) : null
        ) : userResults ? (userResults.length > 0 ? (
          <UsersList handleSelectUser={handleSelectUser} userResults={userResults} />
        ) : null) : null}
      </div>
    </>
  );
};

export default App

