package com.example.helloworldrn

import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NativeCommunication internal constructor(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "NativeCommunication"
    }

    @ReactMethod
    fun sendMessageToNative(rnMessage: String?) {
        Log.d("This log is generated from RN", rnMessage ?: "")
    }

    @ReactMethod
    fun sendCallbackToNative(rnCallback: Callback) {
        rnCallback.invoke("A greeting from java")
    }

    @ReactMethod
    fun finishActivity() {
        currentActivity?.finish()
    }

    companion object

}
