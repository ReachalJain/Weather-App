# 🌦️ Weather App using API Integration

A responsive weather application built with React and Vite that fetches real-time weather information for cities around the world using the Open-Meteo API.
<img width="974" height="659" alt="image" src="https://github.com/user-attachments/assets/2dd31f7b-2b1f-41b8-84b6-aaeae94d6e3d" />


## ✨ Features

- 🔍 **City Search** — Search for a city to get its current weather.
- 🌡️ **Live Temperature** — View the current temperature in Celsius.
- 🌍 **Location Details** — Get the latitude and longitude of the searched city.
- ☁️ **Weather Conditions** — View weather conditions with descriptive labels and emojis.
- ⚡ **API Integration** — Fetches geographical coordinates and weather data from Open-Meteo.
- 📱 **Responsive Design** — A clean interface designed to work across desktop and mobile screens.
- ⚠️ **Error Handling** — Displays helpful messages for invalid city names and failed requests.
- ⏳ **Loading State** — Shows feedback while weather data is being fetched.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** CSS3
- **API:** Open-Meteo Geocoding API and Weather Forecast API
- **Language:** JavaScript (ES6+)

## 🌐 APIs Used

**1. Geocoding API**

Converts a city name into geographical coordinates.

`https://geocoding-api.open-meteo.com/v1/search`

**2. Weather Forecast API**

Fetches current weather data using latitude and longitude.

`https://api.open-meteo.com/v1/forecast`

Weather data is provided by [Open-Meteo](https://open-meteo.com/).

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js and npm installed
- Git installed

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/ReachalJain/Weather-App-using-API-Integration.git
```

**2. Navigate to the project directory**

```bash
cd Weather-App-using-API-Integration
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

Open the URL displayed in your terminal, usually:

`http://localhost:5173/`

## 📂 Project Structure

```text
Weather-App-using-API-Integration/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🎯 What I Learned

- Integrating external APIs into a React application.
- Using `async/await` and `fetch()` to retrieve data.
- Managing component state with React's `useState`.
- Handling loading states and API errors.
- Building responsive layouts using CSS.
- Working with geocoding data and weather codes.

## 🔮 Future Improvements

- Display weather icons based on current conditions.
- Add humidity, wind speed, and feels-like temperature.
- Show a multi-day weather forecast.
- Save recent searches.
- Add a temperature unit switch between Celsius and Fahrenheit.

## 👩‍💻 Author

**Reachal Jain**

- GitHub: [@ReachalJain](https://github.com/ReachalJain)

---

⭐ If you find this project useful, consider giving the repository a star!

*Built with React, CSS, and Open-Meteo API.*
