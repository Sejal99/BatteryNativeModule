import {NativeModules} from 'react-native';

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

export default BatteryModule;
