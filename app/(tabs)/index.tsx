import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { FeaturedItem } from '../../components/FeaturedItem';
import { CategoryItem } from '../../components/CategoryItem';
import { CoffeeItem } from '../../components/CoffeeItem';
import { OrderingModal } from '../../components/OrderingModal';

const featuredItems = [
  {
    id: 1,
    title: 'Morning Latte',
    name: 'Morning Latte',
    description: 'Start your day with our signature latte.',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Iced Coffee Delight',
    name: 'Iced Coffee Delight',
    description: 'Cool down with our refreshing iced coffee.',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Fresh Pastries',
    name: 'Fresh Pastries',
    description: 'Enjoy our freshly baked pastries.',
    price: '$2.75',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
  },
];

const categories = [
  {
    id: 1,
    name: 'Coffee',
    icon: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=40&h=40&fit=crop',
    active: true,
  },
  {
    id: 2,
    name: 'Tea',
    icon: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=40&h=40&fit=crop',
    active: false,
  },
  {
    id: 3,
    name: 'Snacks',
    icon: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=40&h=40&fit=crop',
    active: false,
  },
];

const coffeeItems = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Strong and bold',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Creamy and rich',
    price: '$3.75',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Americano',
    description: 'Classic black coffee',
    price: '$3.00',
    image: 'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=150&h=150&fit=crop',
  },
  {
    id: 4,
    name: 'Latte',
    description: 'Milky and smooth',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=150&h=150&fit=crop',
  },
];

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleItemPress = (item: any) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const handleAddToCartFromModal = (customization: { milk: string; sugar: string }) => {
    // Here you would add the customized item to cart
    console.log('Added to cart:', selectedItem, customization);
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BrewBuddy</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#1b140e" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#97734e" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for drinks or snacks"
            placeholderTextColor="#97734e"
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Featured Items */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredSection}
          contentContainerStyle={styles.featuredContainer}
        >
          {featuredItems.map((item) => (
            <FeaturedItem 
              key={item.id} 
              item={item} 
              onPress={() => handleItemPress(item)}
            />
          ))}
        </ScrollView>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              onPress={() => console.log('Category pressed:', category.name)}
            />
          ))}
        </View>

        {/* Coffee Grid */}
        <View style={styles.gridContainer}>
          {coffeeItems.map((item) => (
            <CoffeeItem
              key={item.id}
              item={item}
              onPress={() => handleItemPress(item)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Ordering Modal */}
      <OrderingModal
        visible={isModalVisible}
        item={selectedItem}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCartFromModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fcfaf8',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
  },
  cartButton: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3ede7',
    borderRadius: 12,
    height: 48,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1b140e',
  },
  content: {
    flex: 1,
  },
  featuredSection: {
    paddingVertical: 16,
  },
  featuredContainer: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e7dbd0',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});