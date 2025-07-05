import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
  };
  onAddToCart: () => void;
}

export function MenuItem({ item, onAddToCart }: MenuItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          {item.badge && (
            <Text style={styles.badge}>{item.badge}</Text>
          )}
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addButtonText}>+ Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 16,
  },
  content: {
    flex: 2,
    flexDirection: 'column',
    gap: 16,
  },
  textContainer: {
    gap: 4,
  },
  badge: {
    fontSize: 14,
    color: '#97734e',
    fontWeight: '400',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b140e',
  },
  price: {
    fontSize: 14,
    color: '#97734e',
    fontWeight: '400',
  },
  addButton: {
    backgroundColor: '#f3ede7',
    borderRadius: 12,
    height: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#1b140e',
    fontSize: 14,
    fontWeight: '500',
  },
  image: {
    flex: 1,
    aspectRatio: 16 / 9,
    borderRadius: 12,
    backgroundColor: '#f3ede7',
  },
});
