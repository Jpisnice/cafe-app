import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const orderTrackingSteps = [
  { id: 1, title: 'Order Placed', completed: true },
  { id: 2, title: 'Preparing', completed: true },
  { id: 3, title: 'Ready for Pickup', completed: false },
  { id: 4, title: 'Picked Up', completed: false },
];

const pastOrders = [
  {
    id: 1,
    date: 'May 15, 2024',
    items: 2,
    orderNumber: '67890',
  },
  {
    id: 2,
    date: 'April 20, 2024',
    items: 3,
    orderNumber: '54321',
  },
  {
    id: 3,
    date: 'March 5, 2024',
    items: 1,
    orderNumber: '98765',
  },
];

export default function OrderScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Order Tracking Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Tracking</Text>
          
          {/* Order Number Badge */}
          <View style={styles.orderBadgeContainer}>
            <View style={styles.orderBadge}>
              <Text style={styles.orderBadgeText}>Order #12345</Text>
            </View>
          </View>

          {/* Order Tracking Steps */}
          <View style={styles.trackingContainer}>
            {orderTrackingSteps.map((step, index) => (
              <View key={step.id} style={styles.trackingStep}>
                <View style={styles.trackingIconContainer}>
                  {index > 0 && (
                    <View style={styles.trackingLineTop} />
                  )}
                  <View style={styles.trackingIcon}>
                    <Ionicons 
                      name="ellipse-outline" 
                      size={24} 
                      color="#1b140e" 
                    />
                  </View>
                  {index < orderTrackingSteps.length - 1 && (
                    <View style={styles.trackingLineBottom} />
                  )}
                </View>
                <View style={styles.trackingTextContainer}>
                  <Text style={styles.trackingText}>{step.title}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Past Orders Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Past Orders</Text>
          
          {pastOrders.map((order) => (
            <View key={order.id} style={styles.pastOrderItem}>
              <View style={styles.pastOrderIcon}>
                <Ionicons name="checkmark" size={24} color="#1b140e" />
              </View>
              <View style={styles.pastOrderDetails}>
                <Text style={styles.pastOrderDate}>{order.date}</Text>
                <Text style={styles.pastOrderInfo}>{order.items} items</Text>
                <Text style={styles.pastOrderInfo}>Order #{order.orderNumber}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfaf8',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fcfaf8',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b140e',
    letterSpacing: -0.015,
    marginBottom: 12,
  },
  orderBadgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  orderBadge: {
    backgroundColor: '#f3ede7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  orderBadgeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1b140e',
  },
  trackingContainer: {
    marginLeft: 4,
  },
  trackingStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 60,
  },
  trackingIconContainer: {
    alignItems: 'center',
    width: 40,
    paddingTop: 12,
  },
  trackingIcon: {
    marginBottom: 4,
  },
  trackingLine: {
    width: 1.5,
    height: 20,
    backgroundColor: '#e7dcd0',
    flex: 1,
  },
  trackingLineTop: {
    width: 1.5,
    height: 8,
    backgroundColor: '#e7dcd0',
    marginBottom: 4,
  },
  trackingLineBottom: {
    width: 1.5,
    height: 8,
    backgroundColor: '#e7dcd0',
    marginTop: 4,
    flex: 1,
  },
  trackingTextContainer: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 20,
    paddingLeft: 8,
  },
  trackingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b140e',
  },
  pastOrderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 16,
  },
  pastOrderIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f3ede7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pastOrderDetails: {
    flex: 1,
  },
  pastOrderDate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b140e',
    marginBottom: 4,
  },
  pastOrderInfo: {
    fontSize: 14,
    color: '#97734e',
    marginBottom: 2,
  },
});
