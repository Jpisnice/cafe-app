import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

interface OrderingModalProps {
  visible: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
  };
  onAddToCart: (customization: {
    milk: string;
    sugar: string;
  }) => void;
}

const milkOptions = ['Whole Milk', 'Almond Milk', 'Soy Milk', 'Oat Milk'];
const sugarOptions = ['None', 'Half Sweet', 'Regular', 'Extra Sweet'];

export function OrderingModal({ visible, onClose, item, onAddToCart }: OrderingModalProps) {
  const [selectedMilk, setSelectedMilk] = useState('Whole Milk');
  const [selectedSugar, setSelectedSugar] = useState('Regular');

  const handleAddToCart = () => {
    onAddToCart({
      milk: selectedMilk,
      sugar: selectedSugar,
    });
    // Reset selections after adding to cart
    setSelectedMilk('Whole Milk');
    setSelectedSugar('Regular');
    onClose();
  };

  const handleClose = () => {
    // Reset selections when closing without adding to cart
    setSelectedMilk('Whole Milk');
    setSelectedSugar('Regular');
    onClose();
  };

  // Don't render the modal if item is null
  if (!item) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleClose} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#1b140e" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>BrewBuddy</Text>
          </View>

          {/* Product Image */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
          </View>

          {/* Product Details */}
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>
              Our signature espresso with steamed milk and a thin layer of foam. Customize your milk and sweetness level below.
            </Text>
          </View>

          {/* Milk Options */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Milk</Text>
            <View style={styles.optionsContainer}>
              {milkOptions.map((milk) => (
                <TouchableOpacity
                  key={milk}
                  style={[
                    styles.optionButton,
                    selectedMilk === milk && styles.selectedOption,
                  ]}
                  onPress={() => setSelectedMilk(milk)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedMilk === milk && styles.selectedOptionText,
                    ]}
                  >
                    {milk}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Sugar Options */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sugar</Text>
            <View style={styles.optionsContainer}>
              {sugarOptions.map((sugar) => (
                <TouchableOpacity
                  key={sugar}
                  style={[
                    styles.optionButton,
                    selectedSugar === sugar && styles.selectedOption,
                  ]}
                  onPress={() => setSelectedSugar(sugar)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedSugar === sugar && styles.selectedOptionText,
                    ]}
                  >
                    {sugar}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Spacer for bottom button */}
          <View style={styles.spacer} />
        </ScrollView>

        {/* Add to Cart Button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf8',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 16,
    backgroundColor: '#fcfaf8',
  },
  backButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
    flex: 1,
    textAlign: 'center',
    paddingRight: 48,
  },
  imageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  productImage: {
    width: '100%',
    height: 218,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  productDetails: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#1b140e',
    lineHeight: 24,
    marginBottom: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e7dbd0',
    backgroundColor: '#fcfaf8',
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    borderWidth: 3,
    borderColor: '#e57f19',
    paddingHorizontal: 14, // Slightly reduce padding to account for thicker border
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1b140e',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#1b140e',
  },
  spacer: {
    height: 100, // Space for the bottom button
  },
  bottomContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: 32,
    backgroundColor: '#fcfaf8',
  },
  addToCartButton: {
    backgroundColor: '#e57f19',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: 0.015,
  },
});
