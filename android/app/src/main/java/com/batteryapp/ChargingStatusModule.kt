package com.batteryapp

import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ChargingStatusModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ChargingStatus"

    @ReactMethod
    fun isDeviceCharging(promise: Promise) {
        try {
            val intentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
            val batteryStatus = reactApplicationContext.registerReceiver(null, intentFilter)
            val status = batteryStatus?.getIntExtra(BatteryManager.EXTRA_STATUS, -1)
            val isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING || status == BatteryManager.BATTERY_STATUS_FULL
            promise.resolve(isCharging)
        } catch (e: Exception) {
            promise.reject("CHARGING_ERROR", "Could not check charging status", e)
        }
    }
}
