import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

interface CategoryItemProps {
  category: {
    id: number;
    name: string;
    icon: string;
    active: boolean;
  };
  onPress: () => void;
}

export function CategoryItem({ category, onPress }: CategoryItemProps) {
  return (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        category.active && styles.categoryItemActive,
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: category.icon }}
        style={styles.categoryIcon}
      />
      <Text
        style={[
          styles.categoryText,
          category.active && styles.categoryTextActive,
        ]}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 12,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  categoryItemActive: {
    borderBottomColor: '#e57f19',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f3ede7',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#97734e',
  },
  categoryTextActive: {
    color: '#1b140e',
  },
});
