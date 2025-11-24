import React from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

export interface Expenses {
    id: number,
    name: string,
    icon?: string,
    imageUrl?: string
}

interface ExpensesProps {
    expenses: Expenses;
    onPress?: () => void;
}
// FC with props
const ExpensesCard: React.FC<ExpensesProps> = ({expenses, onPress}) => { return(
<TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        {expenses.icon ? (
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>
              {expenses.icon}
            </Text>
          </View>
        ) : expenses.imageUrl ? (
          <Image source={{uri: expenses.imageUrl}} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>
              {expenses.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>
        {expenses.name}
      </Text>
    </TouchableOpacity>
);};

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
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 32,
  },
  name: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
  },
});

export default ExpensesCard;