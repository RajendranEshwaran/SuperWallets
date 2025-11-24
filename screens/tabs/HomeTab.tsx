/**
 * Home Tab Screen
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ReceiverList from '../../components/ReceiverList';
import {Receiver} from '../../components/ReceiverCard';
import ExpensesList from '../../components/ExpensesList';
import { Expenses } from '../../components/ExpensesCard';
import CardList from '../../components/CardList';
import {Card} from '../../components/Card';
import NavigationBar from '../../components/NavigationBar';

type NavigationProp = NativeStackNavigationProp<any>;

const HomeTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp>();

  // Sample receivers data
  const [receivers, setReceivers] = useState<Receiver[]>([
    {
      id: '1',
      name: 'John Doe',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: '2',
      name: 'Jane Smith',
      imageUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: '3',
      name: 'Mike Wilson',
      imageUrl: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: '4',
      name: 'Sarah Johnson',
    },
  ]);

  // Sample expenses data
  const [expenses, setExpenses] = useState<Expenses[]>([
    {
      id: 1,
      name: 'Groceries',
      icon: '🛒',
    },
    {
      id: 2,
      name: 'Transportation',
      icon: '🚗',
    },
    {
      id: 3,
      name: 'Dining',
      icon: '🍽️',
    },
    {
      id: 4,
      name: 'Shopping',
      icon: '🛍️',
    },
  ]);

  // Sample cards data
  const [cards, setCards] = useState<Card[]>([
    {
      id: '1',
      cardType: 'Visa',
      lastFourDigits: '4242',
      cardHolderName: 'John Doe',
      backgroundColor: '#667EEA',
    },
    {
      id: '2',
      cardType: 'Mastercard',
      lastFourDigits: '8888',
      cardHolderName: 'John Doe',
      backgroundColor: '#F56565',
    },
    {
      id: '3',
      cardType: 'Amex',
      lastFourDigits: '1234',
      cardHolderName: 'John Doe',
      backgroundColor: '#48BB78',
    },
  ]);

  const handleReceiverPress = (receiver: Receiver) => {
    Alert.alert('Receiver Selected', `You selected ${receiver.name}`);
  };

  const handleExpensePress = (expense: Expenses) => {
    Alert.alert('Expense Selected', `You selected ${expense.name}`);
  };

  const handleAddPress = () => {
    Alert.alert('Add Receiver', 'Add new receiver functionality');
  };

  const handleAddExpensePress = () => {
    Alert.alert('Add Expense', 'Add new expense functionality');
  };

  const handleCardPress = (card: Card) => {
    Alert.alert('Card Selected', `You selected ${card.cardType} ending in ${card.lastFourDigits}`);
  };

  const handleAddCardPress = () => {
    navigation.navigate('AddNewCard');
  };

  const handleMenuPress = () => {
    Alert.alert('Menu', 'Menu navigation functionality');
  };

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'View your notifications');
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
      ]}>
      {/* Navigation Bar */}
      <NavigationBar
        title="My Wallet"
        onLeftPress={handleMenuPress}
        onRightPress={handleNotificationPress}
      />

      {/* Main Content */}
      <ScrollView style={styles.scrollContent}>
        {/* Balance Card */}
        <View style={[styles.balanceCard, {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'}]}>
          <Text style={[styles.balanceLabel, {color: isDarkMode ? '#CCCCCC' : '#666666'}]}>
            Total Balance
          </Text>
          <Text style={[styles.balanceAmount, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
            $12,345.67
          </Text>
        </View>

        {/* Card List */}
        <CardList
          cards={cards}
          onCardPress={handleCardPress}
          onAddPress={handleAddCardPress}
        />
      </ScrollView>

{/* Expenses List at Bottom */}
<View style={styles.bottomContainer}>
        <ExpensesList
          expenses={expenses}
          onExpensesPress={handleExpensePress}
          onAddPress={handleAddExpensePress}
        />
      </View>
      
      {/* Receiver List at Bottom */}
      <View style={styles.bottomContainer}>
        <ReceiverList
          receivers={receivers}
          onReceiverPress={handleReceiverPress}
          onAddPress={handleAddPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    marginTop: 4,
  },
  balanceCard: {
    margin: 20,
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default HomeTab;
