
# CryptoChart

CryptoChart is a simple application for displaying a cryptocurrency chart with vertical candlesticks. When the screen is tapped, all new candlesticks turn green. If the screen is not tapped, the price gradually decreases, and the candlesticks remain red.

## Features

- **Chart Display:** The application displays a chart consisting of vertical candlesticks, which update every 10 seconds.
- **Green Candlesticks on Tap:** When the screen is tapped, all new candlesticks created within the next 10 seconds turn green.
- **Gradual Price Decrease:** If the screen is not tapped, the price on the chart gradually decreases, and new candlesticks remain red.

## Technologies Used

- **React:** Used for building the user interface.
- **Chart.js:** A library for creating charts.
- **React-Chartjs-2:** A wrapper for using Chart.js with React.

## Installation

1. Clone the repository:

   ### `git clone https://github.com/Alex-Shipula/crypto-chart.git`

2. Navigate to the project directory:

   ### `cd crypto-chart`

3. Install the dependencies:

   ### `npm install`

4. Start the application:

   ### `npm start`

5. Open the application in your browser at `http://localhost:3000`.

## Project Structure

- **`src/`**
  - **`App.js:`** The main component of the application.
  - **`App.css:`** The styles for the application.
  - **`index.js:`** The entry point of the application.
- **`public/`** Static files and HTML template.

## How to Use

1. Open the application in your browser.
2. A chart with 20 initial candlesticks will be displayed.
3. The chart updates every 10 seconds, adding a new candlestick.
4. If you tap the screen, all new candlesticks added within the next 10 seconds will be green.
5. If you do not tap the screen, new candlesticks will reflect a decreasing price (red).

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
