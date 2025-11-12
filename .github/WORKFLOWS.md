# GitHub Actions Workflows

This document describes the GitHub Actions workflows configured for the SuperWallets project.

## Workflows

### 1. PR Build (`pr-build.yml`)

Automatically builds both iOS and Android apps when a pull request is created or updated.

**Triggers:**
- Pull request opened, synchronized, or reopened
- Target branches: `main`, `develop`

**Jobs:**

#### Android Build
- **Runner:** Ubuntu Latest
- **Timeout:** 30 minutes
- **Steps:**
  1. Checkout code
  2. Set up JDK 17
  3. Set up Node.js 20
  4. Install npm dependencies
  5. Set up Ruby 3.4
  6. Cache Gradle dependencies
  7. Build Android Debug APK using Fastlane
  8. Upload APK as artifact (retained for 14 days)
  9. Comment on PR with build info

**Output:** `android-debug-apk` artifact containing the debug APK

#### iOS Simulator Build
- **Runner:** macOS 14
- **Timeout:** 60 minutes
- **Steps:**
  1. Checkout code
  2. Set up Node.js 20
  3. Install npm dependencies
  4. Set up Ruby 3.4
  5. Cache CocoaPods
  6. Install CocoaPods dependencies
  7. Build for iOS Simulator using Fastlane
  8. Upload build logs (retained for 7 days)
  9. Comment on PR with build info

**Output:** iOS simulator build (no IPA for simulator builds)

#### Build Summary
- **Runner:** Ubuntu Latest
- **Depends on:** Android Build, iOS Build
- **Steps:**
  1. Post comprehensive build summary with status table
  2. Comment on PR with results

**Output:** Summary comment with build statuses

---

### 2. Code Quality (`code-quality.yml`)

Runs linting and tests on every pull request.

**Triggers:**
- Pull request opened, synchronized, or reopened
- Target branches: `main`, `develop`

**Jobs:**

#### Lint & Type Check
- **Runner:** Ubuntu Latest
- **Timeout:** 10 minutes
- **Steps:**
  1. Checkout code
  2. Set up Node.js 20
  3. Install npm dependencies
  4. Run ESLint
  5. Run TypeScript type check
  6. Comment on PR with results

#### Test
- **Runner:** Ubuntu Latest
- **Timeout:** 10 minutes
- **Steps:**
  1. Checkout code
  2. Set up Node.js 20
  3. Install npm dependencies
  4. Run tests with coverage
  5. Upload coverage report as artifact (retained for 7 days)
  6. Comment on PR with test results

**Output:** `coverage-report` artifact containing test coverage

---

## Concurrency

Both workflows use concurrency groups to ensure only one workflow runs per PR at a time. When a new commit is pushed, the currently running workflow is cancelled.

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.event.pull_request.number }}
  cancel-in-progress: true
```

---

## Artifacts

### Available Artifacts

1. **android-debug-apk** (14 days retention)
   - Contains: Debug APK for Android
   - Location: `android/app/build/outputs/apk/debug/app-debug.apk`

2. **ios-build-logs** (7 days retention)
   - Contains: Fastlane and Xcode build logs
   - Location: `~/Library/Logs/fastlane/`, `ios/build/`

3. **coverage-report** (7 days retention)
   - Contains: Test coverage reports
   - Location: `coverage/`

### Downloading Artifacts

1. Go to the PR page
2. Click on "Checks" tab
3. Select the workflow run
4. Scroll down to "Artifacts" section
5. Click on the artifact name to download

---

## Caching Strategy

### Android Build
- **Gradle Cache:** Caches Gradle dependencies and wrapper
  - Key: Based on Gradle files hash
  - Restore keys: OS-specific fallback

### iOS Build
- **CocoaPods Cache:** Caches installed pods
  - Key: Based on `Podfile.lock` hash
  - Restore keys: OS-specific fallback

### Both Platforms
- **npm Cache:** Built into `actions/setup-node@v4`
- **Ruby Gems Cache:** Built into `ruby/setup-ruby@v1` with `bundler-cache: true`

---

## PR Comments

The workflows automatically comment on PRs with:

1. **Android Build Status**
   - APK size
   - Build time
   - Download link

2. **iOS Build Status**
   - Platform (Simulator)
   - Build time
   - Status message

3. **Code Quality Results**
   - ESLint status
   - TypeScript status

4. **Test Results**
   - Test status
   - Coverage report link

5. **Build Summary Table**
   - Overall status for both platforms
   - Links to workflow runs

---

## Troubleshooting

### Android Build Fails
- Check Java version (requires JDK 17)
- Verify Gradle wrapper is committed
- Check Android SDK versions in `android/build.gradle`

### iOS Build Fails
- Ensure `Podfile.lock` is committed
- Check Ruby version compatibility
- Verify Xcode version on macOS runner

### Code Quality Fails
- Run `npm run lint` locally
- Run `npx tsc --noEmit` for TypeScript errors
- Fix issues before pushing

### Tests Fail
- Run `npm test` locally
- Check test configuration in `jest.config.js`
- Ensure all test dependencies are in `package.json`

---

## Local Testing

Before pushing, you can test locally:

```bash
# Android build
bundle exec fastlane android debug_build

# iOS simulator build
bundle exec fastlane ios debug_simulator

# Linting
npm run lint

# Type check
npx tsc --noEmit

# Tests
npm test
```

---

## Future Enhancements

Potential improvements for the workflows:

1. **Add Release Builds**
   - Build and sign release APK/IPA
   - Upload to distribution platforms

2. **Add Performance Testing**
   - Bundle size analysis
   - Lighthouse CI for performance metrics

3. **Add Security Scanning**
   - Dependency vulnerability scanning
   - Code security analysis

4. **Add E2E Testing**
   - Detox or Appium integration
   - Automated UI testing

5. **Add Deploy Workflows**
   - Firebase App Distribution
   - TestFlight for iOS
   - Google Play Internal Testing for Android

---

## Status Badges

Add these badges to your README.md:

```markdown
![PR Build](https://github.com/YOUR_USERNAME/SuperWallets/actions/workflows/pr-build.yml/badge.svg)
![Code Quality](https://github.com/YOUR_USERNAME/SuperWallets/actions/workflows/code-quality.yml/badge.svg)
```

Replace `YOUR_USERNAME` with your GitHub username or organization name.
