import React, { FC } from 'react';
import { View,
Image,
Text,
TouchableOpacity,
ScrollView,
useColorScheme,
StyleSheet
 } from 'react-native';
import ExpensesCard, { Expenses } from './ExpensesCard';

interface ExpensesListProps {
expenses: Expenses[];
  onExpensesPress?: (expenses: Expenses) => void;
  onAddPress?: () => void;
}

const ExpensesList: React.FC<ExpensesListProps> = ({expenses,
    onExpensesPress,
    onAddPress}) => {
const isDarkMode = useColorScheme() === 'dark';
return(
    <View
    style={[
      styles.container,
      {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
    ]}>
    <Text
      style={[
        styles.title,
        {color: isDarkMode ? '#FFFFFF' : '#000000'},
      ]}>
      Recent Expenses
    </Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      {/* Add Receiver Button */}
      <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
        <View style={styles.addIconContainer}>
          <Text style={styles.addIcon}>+</Text>
        </View>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>

      {/* Receiver Cards */}
      {expenses.map(expense => (
          <ExpensesCard
            key={expense.id}
            expenses={expense}
            onPress={() => onExpensesPress?.(expense)}
          />
        ))}
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 16,
      paddingBottom: 12,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    scrollContent: {
      paddingHorizontal: 20,
    },
    addButton: {
      alignItems: 'center',
      marginRight: 16,
      width: 70,
    },
    addIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#6366F1',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
      borderWidth: 2,
      borderColor: '#818CF8',
      borderStyle: 'dashed',
    },
    addIcon: {
      fontSize: 32,
      color: '#FFFFFF',
      fontWeight: '300',
    },
    addText: {
      fontSize: 12,
      color: '#6366F1',
      textAlign: 'center',
      fontWeight: '600',
    },
  });

  export default ExpensesList