/**
 * GetStarted Screen
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

interface GetStartedProps {
  onGetStarted?: () => void;
}

const GetStarted: React.FC<GetStartedProps> = ({onGetStarted}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const handleGetStarted = () => {
    console.log('Get Started button pressed');
    if (onGetStarted) {
      onGetStarted();
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#FFFFFF'},
      ]}>
      {/* Background Image 1 - Top Left */}
      <Image
        source={require('../assets/background-2.png')}
        style={styles.backgroundImage1}
        resizeMode="contain"
      />

      {/* Background Image 2 - Bottom Right */}
      <Image
        source={require('../assets/background-1.png')}
        style={styles.backgroundImage2}
        resizeMode="contain"
      />

      {/* Image Section */}
      <View style={styles.imageContainer}>
        {/* Star 1 - Left */}
        <Image
          source={require('../assets/star1.png')}
          style={styles.star1}
          resizeMode="contain"
        />

        {/* Star 2 - Right */}
        <Image
          source={require('../assets/star2.png')}
          style={styles.star2}
          resizeMode="contain"
        />

        {/* Star 3 - Top */}
        <Image
          source={require('../assets/star3.png')}
          style={styles.star3}
          resizeMode="contain"
        />

        {/* Star 4 - Bottom */}
        <Image
          source={require('../assets/star4.png')}
          style={styles.star4}
          resizeMode="contain"
        />

        <Image
          source={require('../assets/getstarted.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text
          style={[
            styles.title,
            {color: isDarkMode ? '#FFFFFF' : '#000000'},
          ]}>
          Welcome to SuperWallets
        </Text>

        {/* Body Text */}
        <Text
          style={[
            styles.bodyText,
            {color: isDarkMode ? '#CCCCCC' : '#666666'},
          ]}>
          Manage all your digital wallets in one secure place. Track your
          transactions, monitor balances, and stay in control of your finances.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleGetStarted}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage1: {
    position: 'absolute',
    top: height * 0.15,
    left: width * 0.5 - (width * 0.35),
    width: width * 0.7,
    height: height * 0.35,
    opacity: 1.0,
    zIndex: 1,
    transform: [{rotate: '15deg'}],
  },
  backgroundImage2: {
    position: 'absolute',
    top: height * 0.20,
    left: width * 0.5 - (width * 0.35),
    width: width * 0.7,
    height: height * 0.35,
    opacity: 1.0,
    zIndex: 1,
    transform: [{rotate: '10deg'}],
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    opacity: 1.0,
    zIndex: 0,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
  },
  star1: {
    position: 'absolute',
    left: width * 0.05,
    top: '50%',
    width: 35,
    height: 35,
    marginTop: -17.5,
  },
  star2: {
    position: 'absolute',
    right: width * 0.05,
    top: '50%',
    width: 60,
    height: 60,
    marginTop: -30,
  },
  star3: {
    position: 'absolute',
    top: height * 0.12,
    left: '50%',
    width: 45,
    height: 45,
    marginLeft: -22.5,
  },
  star4: {
    position: 'absolute',
    bottom: height * 0.05,
    left: '50%',
    width: 55,
    height: 55,
    marginLeft: -27.5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 40,
    zIndex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#7D73C3',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default GetStarted;
