My React Native App

This is a React Native app built using Expo Go SDK version 51, Clerk for user management, and Firebase as the backend.
Installation

To install and run this project, you'll need Node.js (v14 or higher), Expo CLI, and accounts for Firebase and Clerk. First, clone the repository and navigate to the project directory. Then, install the necessary dependencies by running npm install.

Next, you'll need to configure Firebase. Create a Firebase project and add your Firebase configuration details to a FirebaseConfig.js file. The configuration should include your apiKey, authDomain, projectId, storageBucket, messagingSenderId, and appId. Initialize Firebase with these details and export the Firestore instance.

Similarly, set up Clerk by creating a Clerk project and adding your Clerk publishable key to your environment variables. This key is essential for user management functionality. Once these configurations are complete, you can start the app using expo start.
Usage

To use the app, download the Expo Go app on your mobile device. Run expo start in your project directory, and scan the QR code displayed on your terminal with Expo Go. This will load the app on your device for testing and development.
Features

The app includes user management features implemented with Clerk and uses Firebase Firestore for data storage. One of the key sections of the app is the category section, which displays a list of categories fetched from Firebase.
Error Handling

During development, an error was encountered in the category section: "TypeError: Cannot read property 'icon' of undefined." This error occurs in the CategoryItem component when rendering the category icon. It suggests that some category items might not have an icon property defined.

To handle this error, ensure that all category items in the Firebase Firestore have an icon property. Additionally, add error handling in the CategoryItem component to manage undefined icons gracefully. For example, you can conditionally render the icon or display a placeholder text if the icon is missing.
Contributing

Contributions are welcome! To contribute, please fork the repository, create a new branch for your feature or bugfix, make your changes, and submit a pull request. Ensure that your code adheres to the project's coding standards and includes necessary tests.
License

This project is licensed under the MIT License. See the LICENSE file for details.
