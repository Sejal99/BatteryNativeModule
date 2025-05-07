import {NativeModules} from 'react-native';

const {BatteryModule} = NativeModules;

BatteryModule.getBatteryLevel()
  .then(level => {
    console.log('Battery Level (iOS):', level + '%');
  })
  .catch(err => {
    console.error('Failed to get battery level:', err);
  });
export default BatteryModule;
