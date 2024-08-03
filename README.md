# Weather Monitoring System

This project provides a system for monitoring weather conditions using the OpenWeatherMap API. It includes features for data retrieval, storage, alerting, and visualization.

## Features

1. **Retrieve Weather Data**: Fetch real-time weather data from the OpenWeatherMap API at configurable intervals.
2. **Temperature Conversion**: Convert temperature values from Kelvin to Celsius.
3. **Data Storage**: Store daily weather summaries in a MongoDB database.
4. **User-Configurable Alerts**: Define thresholds for alerting based on weather conditions.
5. **Visualizations**: Display daily summaries and alerts.

## Endpoints

- `GET /weather`: Fetches real-time weather data and processes it.
- `GET /summaries`: Retrieves daily weather summaries.
- `GET /alerts`: Retrieves active weather alerts.

## Data Aggregation

- **Daily Weather Summary**:
  - Average, maximum, and minimum temperatures.
  - Dominant weather conditions.

- **Alerting**:
  - Notifications triggered if conditions exceed user-defined thresholds.

## Getting Started

### Prerequisites

- Python 3.x
- MongoDB
- OpenWeatherMap API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-monitoring-system.git
   cd weather-monitoring-system
