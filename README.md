# SuperWallets

A modern React Native wallet application for managing payment cards and tracking financial analytics.

## Features

- Multiple payment card management
- Income and expenses tracking
- Interactive charts and graphs (day, week, month, year views)
- Dark mode support
- Bottom tab navigation with 4 main screens:
  - Home
  - Analytics
  - Card Details
  - More

## Tech Stack

- React Native 0.82.1
- React 19.1.1
- TypeScript
- React Navigation (Stack + Bottom Tabs)
- react-native-chart-kit (for data visualization)
- react-native-svg

## Installation

```bash
npm install
```

### iOS Setup

```bash
cd ios && pod install && cd ..
```

## Running the App

### iOS

```bash
npm run ios
```

### Android

```bash
npm run android
```

## Project Structure

```
/screens        # Main app screens
/components     # Reusable components
/tabs           # Bottom tab screens
```
