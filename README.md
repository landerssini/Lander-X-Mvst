
# Lander X MVST GitHub Repository Searcher

This project is a web application that allows users to search for other GitHub users and their repositories. The application utilizes the GitHub API to perform real-time searches and provides detailed information about users and their repositories.

Visit the web: [Netlify Deploy]([https://github.com/settings/tokens](https://github-researcher.netlify.app/)) 


# Screenshots

![App Screenshot](https://github.com/landerssini/Lander-X-Mvst/blob/main/src/assets/ReadMeImages/readMeImage1.png?raw=true)

![App Screenshot](https://github.com/landerssini/Lander-X-Mvst/blob/main/src/assets/ReadMeImages/readMeImage2.png?raw=true)

![App Screenshot](https://github.com/landerssini/Lander-X-Mvst/blob/main/src/assets/ReadMeImages/readMeImage3.png?raw=true)

![App Screenshot](https://github.com/landerssini/Lander-X-Mvst/blob/main/src/assets/ReadMeImages/readMeImage4.png?raw=true)


# Features

- User Search: Users can search for other GitHub users by entering a name in the search bar. The application displays real-time matching results as the user types.

- User Details View: When a user is selected from the search results, the user's details are displayed, including their username, location, number of followers, and following count, along with a link to their GitHub profile.

- Repository Display: If a selected user has public repositories, a list of these repositories is shown. Details of each repository include the name, description, number of stars and forks, disk size, and collaborators.

- Repository Interaction: Users can click on a repository to view additional details, such as the creation date and collaborators of the repository.


# Tech Stack

- React: The frontend of the application is built with React, a popular JavaScript library for building interactive user interfaces.

- TypeScript: TypeScript is used to add static types to JavaScript, enhancing reliability and easing code maintenance.

- GitHub API: The application utilizes the GitHub API to search for users and obtain information about them and their repositories.

- React Tooltip: The react-tooltip library is used to create interactive tooltips, enhancing user experience by providing additional context on hover.

- React Loader Spinner: The react-loader-spinner library is used to display loading spinners while data is being fetched from the API.


# Lessons
## Asynchronous Search with Debouncing:
```javascript
  useEffect(() => {
    if (timeoutIdRef.current !== null) {
      clearTimeout(timeoutIdRef.current)
    }
    if (searchQuery.length >= 3) {
      timeoutIdRef.current = window.setTimeout(async () => {
        const data = await getUsersList(searchQuery)
        setUserResults(data)
      }, 500) 
    } else {
      setUserResults([]) 
    }
  }, [searchQuery])

```
The useEffect hook in this component is responsible for handling the search functionality in the application. It utilizes the searchQuery state variable to trigger a search when the user types in the search bar.

### Debouncing:
To optimize performance and prevent excessive API requests while the user is typing, the search is debounced. This means that the actual search API call is made after a short delay (500 milliseconds) after the user stops typing.
The timeoutIdRef is used to keep track of the timeout ID to clear any existing timeouts when the searchQuery changes.

### Search Query Length Check:
When the user enters something in the searchQuery a check is made, if the length of the search query is greater than or equal to 3 characters, the search starts. If the length is less than 3 characters, it resets the state of userResults to an empty array, effectively clearing the search results.

### API Call and State Update:
When the search query meets the length requirement, an asynchronous API call (getUsersList(searchQuery)) is made to fetch user data based on the query.
Once the API call is successful, the retrieved data is set as the new userResults state using the setUserResults function.

### Dependencies:
The useEffect hook has a dependency array [searchQuery]. This means the effect will be re-run whenever searchQuery changes. It ensures that the search operation is triggered whenever the user enters or removes characters in the search bar.
This debouncing technique enhances the user experience by reducing unnecessary API calls and provides a smoother search interaction.


# Installation

## 1. Clone the Repository:
```bash
git clone https://github.com/landerssini/Lander-X-Mvst.git
cd Lander-X-Mvst
```
## 2. Install Dependencies:
```bash
npm install
```
## 3.  Create a .env.local file in the project root and add your GitHub API access key:
```bash
VITE_GITHUB_API_KEY=YOUR GITHUB API KEY
```
Get your GitHub API key here: [GitHub Tokens](https://github.com/settings/tokens)
## 4. Start the Application:
```bash
npm run dev
```
    
# Future Implementations


## 1. Adding Search Filters:
Allow users to refine search results by implementing filters, such as location, followers count for users, and stars count for repositories.
Enhances search precision, enabling users to find relevant information quickly and efficiently.

## 2. Improving Responsive Design:
Ensure the application's layout and functionality adapt seamlessly across various devices, including mobile phones, tablets, and desktops.
Provides a consistent and user-friendly experience, promoting accessibility and user retention.

## 3. Implementing Tests:
Develop unit and integration tests using tools like Jest and React Testing Library to validate component behaviors and functions.
Identifies errors early, maintaining code quality, and fostering confidence in developers' contributions.

## 4. Introducing Pagination:
Divide large search results into manageable pages, allowing users to navigate between different result sets.
Improves page load speed and enables users to access more results without overwhelming the page, especially for extensive datasets.
