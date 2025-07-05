import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface FeaturedItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

export function FeaturedItem({ item }: FeaturedItemProps) {
  return (
    <View style={styles.featuredItem}>
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <View style={styles.featuredContent}>
        <Text style={styles.featuredTitle}>{item.title}</Text>
        <Text style={styles.featuredDescription}>{item.description}</Text>
      </View>
    </View>
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
