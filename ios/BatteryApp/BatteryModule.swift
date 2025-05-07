import Foundation
import UIKit

@objc(BatteryModule)
class BatteryModule: NSObject {

  @objc
  func getBatteryLevel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    UIDevice.current.isBatteryMonitoringEnabled = true
    let level = UIDevice.current.batteryLevel

    if level < 0 {
      reject("BATTERY_ERROR", "Battery level unavailable", nil)
    } else {
      let batteryPercentage = Int(level * 100)
      resolve(batteryPercentage)
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
