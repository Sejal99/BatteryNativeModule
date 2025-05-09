package com.batteryapp

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TimeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "TimeModule"

    @ReactMethod
    fun getCurrentTimestamp(promise: Promise) {
        try {
            val timestamp = System.currentTimeMillis()
            promise.resolve(timestamp)
        } catch (e: Exception) {
            promise.reject("TIME_ERROR", "Unable to get timestamp", e)
        }
    }
}
