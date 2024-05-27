# Baby University

## Client: Dr Christopher Ferrie

## Project Description
This project, alongside Dr Christopher Ferrrie, aims to convert the book series 'Baby University' into an interactive IOS application with simple animations and sounds aimed at younger children.
## Team - Contributors
- **Thomas Separovich** - 14273546
- **Arpitha Thoagrapalli Dinesh** - 24967174
- **Joshua Tangendjaja** - 24442143
- **Abhishek Chand** - 24555245
- **Yazan El-Taha** - 14397448
- **Mudra Dongare** - 24481424
- **Kimleng Thai** - 24577494
- **Ali Jafari** - 24419638

## Requirements 
- MacOS (required to run Xcode for iPad simulator)
- NPM 

## Getting Started
1. Clone the repository: `git clone https://github.com/TomSeparovich/BabyUniversity.git`
2. Navigate to the project directory: `cd BabyUniversity`
- Directory: Frontend <br>
      - Built in React Native <br>
      - In your terminal access via `cd front-end` <br>
      - Install the necessary dependencies: `npm i` <br>
      - Run the Expo development server: `npx expo start` or `npm start` <br>
      - Download Xcode from the App Store and grant the necessary permission <br>
      - In your terminal, press `i` to open the iOS simulator <br>
  
- Directory: Backend <br>
      - Built in React Native <br>
      - In your terminal access via `cd back-end` <br>
      - Install the necessary dependencies: `npm i` <br>
      - Run `npm start` in the back-end terminal <br>

## Usage
1. Use the Expo Go app in the iOS Simulator to interact with the front-end application.
2. The back-end server will be running on `https://localhost:3000`.

## Steps to overcome the below error at (front-end directory)
Error : EMFILE: too many open files, watch at FSEvent.FSWatcher._handle.onchange (node:internal/fs/watchers:207:21)

1- To install Homebrew, run the following command in front-end directory:
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2- After installing Homebrew, you need to add it to your system's PATH to use it from the terminal. Follow the instructions that the Homebrew installer outputs. Typically, you will need to add the following line to your .zshrc or .bash_profile file:

      For zsh (which is the default shell on macOS Catalina and later):
      
      echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
      source ~/.zshrc
      
      For bash:
      echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile
      source ~/.bash_profile
3- After adding Homebrew to your PATH, verify the installation by running:
      brew --version
4- Now that Homebrew is installed and configured, you can use it to install watchman:
      brew install watchman
5- npm start
6- shift i ( to choose ipad pro (11-inch) (4th generation)





