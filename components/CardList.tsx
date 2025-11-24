/**
 * Card List Component
 * Horizontal scrollable list of cards with add button
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import Card, {Card as CardType} from './Card';

interface CardListProps {
  cards: CardType[];
  onCardPress?: (card: CardType) => void;
  onAddPress?: () => void;
}

const CardList: React.FC<CardListProps> = ({
  cards,
  onCardPress,
  onAddPress,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
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
        My Cards
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Add Card Button */}
        <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
          <View style={styles.addIconContainer}>
            <Text style={styles.addIcon}>+</Text>
          </View>
          <Text style={styles.addText}>Add Card</Text>
        </TouchableOpacity>

        {/* Card Items */}
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onPress={() => onCardPress?.(card)}
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
    justifyContent: 'center',
    width: 160,
    height: 130,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#6366F1',
    borderStyle: 'dashed',
  },
  addIconContainer: {
    marginBottom: 8,
  },
  addIcon: {
    fontSize: 36,
    color: '#6366F1',
    fontWeight: '300',
  },
  addText: {
    fontSize: 12,
    color: '#6366F1',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default CardList;
