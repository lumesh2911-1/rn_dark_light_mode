import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react-native';

export default function HomeScreen() {
  const { theme, toggleTheme, darkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Icon */}
      {darkMode ? (
        <Moon size={80} color={theme.text} />
      ) : (
        <Sun size={80} color={theme.text} />
      )}

      {/* Title */}
      <Text style={[styles.title, { color: theme.text }]}>
        {darkMode ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️'}
      </Text>

      {/* Description */}
      <Text style={[styles.desc, { color: theme.text }]}>
        Tap the button below to switch theme
      </Text>

      {/* Toggle Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.primary }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
  },

  desc: {
    fontSize: 16,
    marginTop: 10,
    opacity: 0.7,
  },

  button: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
