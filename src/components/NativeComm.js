// If TestConnectNative is an package from npm, you can think this is index.js file
import { NativeModules, Platform } from "react-native";

const nativeComm = NativeModules.NativeCommunication;

const NativeComm = {
  sendMessage: (msg) => {
    nativeComm.sendMessageToNative(msg);
  },

  sendCallback: (callback) => {
    nativeComm.sendCallbackToNative(callback);
  },

  exitRN: (tag) => {
    if (Platform.OS === "ios") {
      nativeComm.dismissViewController(tag);
    } else {
      nativeComm.finishActivity();
    }
  },

  goToNative: (tag) => {
    if (Platform.OS === "ios") {
      nativeComm.goToSecondViewController(tag);
    } else {
      nativeComm.goToSecondActivity();
    }
  },
};

export default NativeComm;
