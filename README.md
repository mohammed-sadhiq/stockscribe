# $tocksScriber Application

This is a React application that displays a list of articles with filtering and sorting capabilities. Users can filter articles by categories and authors, and sort them by date or title.

## Features

- Fetch articles from a remote API.
- Display articles with pagination.
- Filter articles by categories and authors.
- Sort articles by date (earliest to latest or latest to earliest) and title (ascending or descending order).
- Responsive design with a sidebar for filters.

## Technologies Used

- React
- TypeScript
- Axios
- SCSS
- React Hooks

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React and TypeScript.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohammed-sadhiq/stockscribe.git

2.	Navigate to the project directory:
    ```bash
    cd stockscribe

3.	Install the dependencies:
    ```bash
    npm install

Running the Application

1.	Start the development server:
    ```bash
    npm start
2.	Open your browser and go to http://localhost:3000.


Components

	*	ArticleCard: Displays individual article details.
	*	Filters: Provides UI for filtering articles by categories and authors, and sorting them.
	*	Loader: Displays a loading spinner while fetching data.
	*	Pagination: Provides pagination controls.
    *   Upon clicking on ArticleCard, it leads to news article in new tab


Containers

	*	ArticlesList: Main container component that fetches data, handles filtering and sorting, and manages pagination.


API

The application fetches articles from a remote API. The API endpoint used is:
        https://dummy-rest-api.specbee.site/api/v1/news

SCSS

    The styles for the application are located in src/assets/styles/articlelist.scss.