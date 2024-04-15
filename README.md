# Smart Metering Energy Management App

Welcome to the Smart Metering Energy Management App! This web application helps you manage energy meter data efficiently. Whether you're a homeowner, business owner, or energy manager, this app makes it easy to track and monitor your energy consumption.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the Smart Metering Energy Management App, follow these steps:

1. Clone this repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Install any necessary dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Features

- **User Authentication**: Secure login functionality to access meter data.
- **Meter Selection**: Choose a meter from a dropdown list for viewing credentials.
- **Meter Credentials**: View details such as location, type, current reading, previous reading, and bill.
- **Update Current Reading**: Ability to update the current reading of the meter.
- **Reset Reading**: Reset the current reading of the meter to zero.
- **Dark Mode**: Toggle between light and dark mode for better visibility.

## Usage

1. **Login**: Enter your username, password, and select a meter number from the dropdown list. Then click the "Login" button.
2. **View Meter Credentials**: After logging in, the second container will display the credentials of the selected meter.
3. **Update Current Reading**: Enter a new value for the current reading and click the "Update" button to save changes.
4. **Reset Reading**: Click the "Reset" button to reset the current reading of the meter to zero.
5. **Toggle Dark Mode**: Click anywhere on the page to switch between light and dark mode.

## File Structure

- `index.html`: HTML file containing the structure of the web page.
- `style.css`: CSS file containing styles for the application.
- `index.js`: JavaScript file containing client-side logic for fetching data and handling user interactions.
- `db.json`: JSON file containing mock data for meters.

## Contributing

Contributions are welcome! If you have any ideas for improvement or find any issues, feel free to open an issue or submit a pull request.

