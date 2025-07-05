import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FilterChip } from '../../components/FilterChip';
import { MenuItem } from '../../components/MenuItem';
import { OrderingModal } from '../../components/OrderingModal';
import { CartModal } from '../../components/CartModal';

const filterOptions = ['Hot', 'Cold', 'Vegan', 'Bestsellers'];

const featuredItems = [
  {
    id: 1,
    name: 'Iced Caramel Macchiato',
    price: '$4.50',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Pumpkin Spice Latte',
    price: '$5.00',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
  },
];

const drinkItems = [
  {
    id: 3,
    name: 'Cappuccino',
    price: '$3.75',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Latte',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop',
  },
  {
    id: 5,
    name: 'Americano',
    price: '$3.00',
    image: 'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=300&h=200&fit=crop',
  },
  {
    id: 6,
    name: 'Espresso',
    price: '$2.50',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&h=200&fit=crop',
  },
  {
    id: 7,
    name: 'Mocha',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
  },
  {
    id: 8,
    name: 'Iced Coffee',
    price: '$3.50',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
  },
  {
    id: 9,
    name: 'Cold Brew',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=300&h=200&fit=crop',
  },
  {
    id: 10,
    name: 'Iced Latte',
    price: '$4.25',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop',
  },
  {
    id: 11,
    name: 'Iced Mocha',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
  },
];

export default function MenuScreen() {
  const [activeFilter, setActiveFilter] = useState('Hot');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (item: any) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const handleAddToCartFromModal = (customization: { milk: string; sugar: string }) => {
    if (selectedItem) {
      const customizationText = `${customization.sugar === 'None' ? 'No Sugar' : customization.sugar}, ${customization.milk}`;
      
      const newCartItem = {
        id: Date.now(), // Simple ID generation
        name: selectedItem.name,
        price: parseFloat(selectedItem.price.replace('$', '')),
        quantity: 1,
        customization: customizationText,
      };

      setCartItems(prevItems => {
        // Check if item with same name and customization already exists
        const existingItemIndex = prevItems.findIndex(
          item => item.name === newCartItem.name && item.customization === newCartItem.customization
        );

        if (existingItemIndex >= 0) {
          // Update quantity of existing item
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        } else {
          // Add new item
          return [...prevItems, newCartItem];
        }
      });

      console.log('Added to cart:', selectedItem, customization);
    }
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const handleCartPress = () => {
    setIsCartVisible(true);
  };

  const handleCartClose = () => {
    setIsCartVisible(false);
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout with items:', cartItems);
    setIsCartVisible(false);
    // You might navigate to a payment screen or show a success message
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
        <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
          <Ionicons name="cart-outline" size={24} color="#1b140e" />
          {cartItems.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Filter Chips */}
      <View style={styles.filterSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {filterOptions.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onPress={() => setActiveFilter(filter)}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Featured Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured</Text>
        </View>

        <View style={styles.menuSection}>
          {featuredItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </View>

        {/* Drinks Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Drinks</Text>
        </View>

        <View style={styles.menuSection}>
          {drinkItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToCart={() => handleAddToCart(item)}
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

      {/* Cart Modal */}
      <CartModal
        visible={isCartVisible}
        cartItems={cartItems}
        onClose={handleCartClose}
        onCheckout={handleCheckout}
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
    flex: 1,
    textAlign: 'center',
    paddingLeft: 48, // To center the title accounting for the cart button
  },
  cartButton: {
    padding: 8,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#e57f19',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#1b140e',
    fontSize: 12,
    fontWeight: 'bold',
  },
  filterSection: {
    paddingVertical: 12,
    backgroundColor: '#fcfaf8',
  },
  filterContainer: {
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 32,
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
  menuSection: {
    paddingHorizontal: 16,
  },
});
