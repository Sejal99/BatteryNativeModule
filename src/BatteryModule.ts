import {NativeModules, ToastAndroid} from 'react-native';

const {BatteryModule} = NativeModules;

/**
 * Fetch the battery level from the native module.
 * This works on both Android and iOS, if properly implemented on both sides.
 */
export const getBatteryLevel = async () => {
  try {
    const level = await BatteryModule.getBatteryLevel();
    console.log('Battery Level:', level + '%');
    return level;
  } catch (error) {
    console.error('Failed to get battery level:', error);
    return null;
  }
};
NativeModules.ToastModule.showToast('Hello from Kotlin!', ToastAndroid.SHORT);

NativeModules.TimeModule.getCurrentTimestamp()
  .then((ts: any) => console.log('Current Timestamp:', ts))
  .catch((err: any) => console.error(err));
export default BatteryModule;
