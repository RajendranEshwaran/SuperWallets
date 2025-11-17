/**
 * Receiver Card Component
 * Displays a receiver with their image and name
 * @format
 */

import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export interface Receiver {
  id: string;
  name: string;
  imageUrl?: string;
}

interface ReceiverCardProps {
  receiver: Receiver;
  onPress?: () => void;
}

const ReceiverCard: React.FC<ReceiverCardProps> = ({receiver, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {receiver.imageUrl ? (
          <Image source={{uri: receiver.imageUrl}} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>
              {receiver.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {receiver.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
    width: 70,
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
  },
  placeholderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
  },
});

export default ReceiverCard;
