# BatteryApp 🔋📱

A React Native application that demonstrates how to access native device functionalities, specifically retrieving the battery level on both iOS and Android platforms. This project serves as a practical example for developers looking to integrate native modules into their React Native applications. It showcases asynchronous communication between JavaScript and native code, error handling, and platform-specific implementations.

## 🚀 Features

- **Battery Level Retrieval:** Fetches the current battery level of the device using native modules.
- **Cross-Platform Compatibility:** Implements native modules for both iOS (Swift) and Android (Kotlin) to ensure functionality on both platforms.
- **Asynchronous Operations:** Uses promises to handle asynchronous calls to native modules, ensuring non-blocking UI updates.
- **Loading Indicator:** Displays a loading indicator while fetching the battery level.
- **Error Handling:** Gracefully handles errors during battery level retrieval and displays informative messages.
- **Toast Messages:** Uses native toast messages (Android) to display additional information.
- **Charging Status (Android):** Checks and displays whether the device is currently charging (Android only).
- **Timestamp Logging:** Retrieves and logs the current timestamp using a native module.

## 🛠️ Tech Stack

- **Frontend:**
    - React Native: v0.79.2
    - React: v19.0.0
    - TypeScript
- **iOS:**
    - Swift
    - Objective-C (Bridging Header)
    - UIKit
    - React Native iOS Modules
- **Android:**
    - Kotlin
    - Android SDK
    - React Native Android Modules
- **Development Tools:**
    - Node.js
    - npm/Yarn
    - Metro Bundler
    - Babel
    - ESLint
    - Jest
    - Prettier
- **Other:**
    - app.json: Application configuration
    - package.json: Project dependencies and scripts

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (>=18)
- npm or Yarn
- React Native CLI
- Xcode (for iOS development)
- Android SDK (for Android development)
- Cocoapods (for iOS dependency management)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd BatteryApp
    ```

2.  **Install JavaScript dependencies:**

    ```bash
    npm install  # or yarn install
    ```

3.  **Install iOS dependencies:**

    ```bash
    cd ios
    pod install
    cd ..
    ```

4.  **Configure Android:**

    *   Ensure that you have the Android SDK set up correctly.
    *   Set the `ANDROID_HOME` environment variable to your Android SDK path.

### Running Locally

#### Android

1.  **Start the Metro bundler:**

    ```bash
    npm start # or yarn start
    ```

2.  **Run the app on an Android emulator or device:**

    ```bash
    npm run android # or yarn android
    ```

#### iOS

1.  **Start the Metro bundler:**

    ```bash
    npm start # or yarn start
    ```

2.  **Run the app on an iOS simulator or device:**

    ```bash
    npm run ios # or yarn ios
    ```

## 📂 Project Structure

```
BatteryApp/
├── android/                  # Android platform code
│   ├── app/
│   │   ├── src/main/java/com/batteryapp/
│   │   │   ├── BatteryModule.kt        # Native module for battery level
│   │   │   ├── BatteryPackage.kt       # Registers the native module
│   │   │   ├── ChargingStatusModule.kt # Native module for charging status
│   │   │   ├── MainActivity.kt         # Main activity
│   │   │   ├── MainApplication.kt      # Main application
│   │   │   ├── TimeModule.kt           # Native module for timestamp
│   │   │   ├── ToastModule.kt          # Native module for toast messages
├── ios/                      # iOS platform code
│   ├── BatteryApp/
│   │   ├── AppDelegate.swift       # Application delegate
│   │   ├── BatteryModule.swift       # Native module for battery level
│   │   ├── BatteryApp-Bridging-Header.h # Bridging header for Objective-C
├── src/                      # React Native source code
│   ├── BatteryModule.ts        # JavaScript bridge to native module
├── App.tsx                   # Main application component
├── index.js                  # Entry point for React Native
├── app.json                  # Application configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # This file
```

## 📸 Screenshots

(Screenshots of the application running on both iOS and Android will be added here.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

[Sejal Srivastava] - [sejal8974@gmail.com]

## 💖 Thanks

Thank you for checking out this project! We hope it helps you in your React Native development journey.

