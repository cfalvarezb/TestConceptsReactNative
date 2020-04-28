import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';


export default function AppScrollView() {
  return (
    <View>
      <ScrollView style={styles.scrollView} horizontal={true} alwaysBounceHorizontal={true} alwaysBounceVertical={true}>
        <Text style={styles.text}>
          Is a example about the core component ScrollView Horizontal
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});