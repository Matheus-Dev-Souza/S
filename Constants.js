import { Dimensions } from "react-native";

const Constants = {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  REELS: 5,
  REELS_REPEAT: 10, 
  SYMBOLS: 3
};

export default Constants;