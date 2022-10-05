import "react-native-gesture-handler/jestSetup";

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

jest.mock("../../node_modules/react-native/Libraries/Utilities/Platform.ios");

jest.mock(
  "../../node_modules/react-native/Libraries/BatchedBridge/NativeModules",
  () => ({
    RNConfig: { buildEnvironment: "sandbox" },
    UIManager: { RCTView: () => ({ directEventTypes: {} }) },
    KeyboardObserver: {},
    PlatformConstants: {
      forceTouchAvailable: true
    },
    BraintreeModule: {
      showPayPal: jest.fn(),
      getBraintreeDeviceData: jest.fn()
    },
    DeviceInfo: {
      getConstants: () => ({
        Dimensions: {
          get: jest.fn(() => ({ width: 750, height: 1624 })),
          window: { width: 750, height: 1624 }
        }
      })
    },
    StatusBarManager: {
      getConstants: jest.fn(() => ({
        HEIGHT: 42,
        DEFAULT_BACKGROUND_COLOR: 1
      })),
      HEIGHT: 42,
      setTranslucent: jest.fn(),
      setStyle: jest.fn(),
      setHidden: jest.fn(),
      setNetworkActivityIndicatorVisible: jest.fn()
    },
    RNGestureHandlerModule: {
      attachGestureHandler: jest.fn(),
      createGestureHandler: jest.fn(),
      dropGestureHandler: jest.fn(),
      updateGestureHandler: jest.fn(),
      State: {},
      Directions: {}
    },
    RNBranch: {
      // Mock constants exported by native layers // Branch integration // https://github.com/kmagiera/react-native-gesture-handler/issues/344 // From react-native-gesture-handler
      ADD_TO_CART_EVENT: "Add to Cart",
      ADD_TO_WISHLIST_EVENT: "Add to Wishlist",
      PURCHASE_INITIATED_EVENT: "Purchase Started",
      PURCHASED_EVENT: "Purchased",
      REGISTER_VIEW_EVENT: "View",
      SHARE_COMPLETED_EVENT: "Share Completed",
      SHARE_INITIATED_EVENT: "Share Started"
    },
    ImagePickerManager: {
      showImagePicker: jest.fn((_options, callback) => callback({})),
      launchCamera: jest.fn((_options, callback) => callback({})),
      launchImageLibrary: jest.fn((_options, callback) => callback({}))
    }
  })
);

// @ts-ignore mock setup
// eslint-disable-next-line @typescript-eslint/no-empty-function
global.__reanimatedWorkletInit = () => {};
// @ts-ignore mock setup
global.ReanimatedDataMock = {
  now: () => Date.now()
};
jest.mock("react-native-reanimated", () => {
  const reanimatedMock = require("react-native-reanimated/mock");
  const actualLib = jest.requireActual("react-native-reanimated");

  return {
    ...reanimatedMock,
    ...actualLib
  };
});
