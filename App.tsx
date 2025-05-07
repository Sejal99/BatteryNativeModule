import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import BatteryModule from './src/BatteryModule';

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  const fetchBatteryLevel = async () => {
    try {
      const level = await BatteryModule.getBatteryLevel();
      setBatteryLevel(`${level}%`);
    } catch (e) {
      setBatteryLevel('Error fetching battery level');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Get Battery Level" onPress={fetchBatteryLevel} />
      {batteryLevel && <Text style={styles.text}>Battery: {batteryLevel}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {marginTop: 20, fontSize: 18},
});

export default App;
