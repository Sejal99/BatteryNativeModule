package com.batteryapp

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ToastModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "ToastModule"

    @ReactMethod
    fun showToast(message: String, duration: Int) {
        Toast.makeText(reactApplicationContext, message, duration).show()
    }
}
