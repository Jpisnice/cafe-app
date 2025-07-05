import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface CoffeeItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
  onPress: () => void;
}

export function CoffeeItem({ item, onPress }: CoffeeItemProps) {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.gridImage} />
      <View style={styles.gridContent}>
        <Text style={styles.gridTitle}>{item.name}</Text>
        <Text style={styles.gridDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    width: (width - 48) / 2,
    marginBottom: 24,
  },
  gridImage: {
    width: '100%',
    height: (width - 48) / 2,
    borderRadius: 12,
    backgroundColor: '#f3ede7',
  },
  gridContent: {
    paddingTop: 12,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b140e',
    marginBottom: 4,
  },
  gridDescription: {
    fontSize: 14,
    color: '#97734e',
  },
});
