fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios debug_simulator

```sh
[bundle exec] fastlane ios debug_simulator
```

Builds the iOS app for simulator (no signing required)

### ios debug_build

```sh
[bundle exec] fastlane ios debug_build
```

Builds the iOS app in Debug configuration for device (requires code signing)

### ios install_pods

```sh
[bundle exec] fastlane ios install_pods
```

Install iOS dependencies

----


## Android

### android debug_build

```sh
[bundle exec] fastlane android debug_build
```

Builds the Android debug APK

### android clean

```sh
[bundle exec] fastlane android clean
```

Clean Android build artifacts

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
