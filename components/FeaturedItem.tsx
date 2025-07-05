import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface FeaturedItemProps {
  item: {
    id: number;
    title: string;
    name: string;
    description: string;
    price: string;
    image: string;
  };
  onPress?: () => void;
}

export function FeaturedItem({ item, onPress }: FeaturedItemProps) {
  return (
    <TouchableOpacity style={styles.featuredItem} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <View style={styles.featuredContent}>
        <Text style={styles.featuredTitle}>{item.title}</Text>
        <Text style={styles.featuredDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  featuredItem: {
    width: 240,
    marginRight: 12,
  },
  featuredImage: {
    width: '100%',
    height: 135,
    borderRadius: 12,
    backgroundColor: '#f3ede7',
  },
  featuredContent: {
    paddingTop: 16,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b140e',
    marginBottom: 4,
  },
  featuredDescription: {
    fontSize: 14,
    color: '#97734e',
  },
});
