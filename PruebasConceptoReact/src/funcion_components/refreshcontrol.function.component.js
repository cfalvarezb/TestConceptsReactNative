import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from 'react-native';


function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function RefreshControlFunction() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    console.log('Pasa por aca');
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '25%',
  },
  scrollView: {
 
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});