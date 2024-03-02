# This is an RN project with BUG

I've hit a major bug. 
After installing the **react-native-webview** dependency, both **web3modal** and **react-native-actions-sheet** crash when I try to open it. 
So, I'm guessing there's some similarity between web3modal and react-native-actions-sheet causing this issue.

# ENV
System:
  OS: macOS 14.2.1
  CPU: (10) arm64 Apple M1 Pro
  Memory: 95.77 MB / 16.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 20.9.0
    path: /usr/local/bin/node
  Yarn:
    version: 1.22.19
    path: /usr/local/bin/yarn
  npm:
    version: 9.4.0
    path: /usr/local/bin/npm
  Watchman:
    version: 2024.01.22.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods:
    version: 1.15.2
    path: /Users/zhujunyang/.rubies/ruby-3.3.0/bin/pod
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 23.2
      - iOS 17.2
      - macOS 14.2
      - tvOS 17.2
      - watchOS 10.2
  Android SDK: Not Found
IDEs:
  Android Studio: Not Found
  Xcode:
    version: 15.1/15C65
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 18.0.2
    path: /usr/bin/javac
  Ruby:
    version: 3.3.0
    path: /Users/zhujunyang/.rubies/ruby-3.3.0/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react: Not Found
  react-native: Not Found
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: false
iOS:
  hermesEnabled: true
  newArchEnabled: true

  # Version
  "@react-native-async-storage/async-storage": "^1.22.3",
    "@react-native-community/netinfo": "^11.3.1",
    "@walletconnect/react-native-compat": "^2.11.2",
    "@web3modal/wagmi-react-native": "^1.2.0",
    "react": "18.2.0",
    "react-native": "0.73.5",
    "react-native-actions-sheet": "^0.9.2",
    "react-native-gesture-handler": "^2.15.0",
    "react-native-get-random-values": "^1.10.0",
    "react-native-modal": "^13.0.1",
    "react-native-svg": "^15.0.0",
    "react-native-webview": "13.8.1",
    "viem": "1.21.4",
    "wagmi": "1.4.13"