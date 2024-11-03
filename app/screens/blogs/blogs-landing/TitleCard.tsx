// TitleCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TitleCardProps {
  title: string;
  color: string;
  bgColor: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, bgColor, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default TitleCard;
