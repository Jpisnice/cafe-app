import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FilterChipProps {
  label: string;
  active?: boolean;
  onPress: () => void;
}

export function FilterChip({ label, active = false, onPress }: FilterChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.chipActive]}
      onPress={onPress}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: 32,
    paddingHorizontal: 16,
    backgroundColor: '#f3ede7',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  chipActive: {
    backgroundColor: '#e57f19',
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1b140e',
  },
  chipTextActive: {
    color: '#ffffff',
  },
});
