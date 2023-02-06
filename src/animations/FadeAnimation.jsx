import { useRef, useEffect } from "react";
import { Animated } from "react-native";

const FadeAnimation = ({ children, style }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(
      fadeAnimation,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start()
  }, [fadeAnimation]);
  return (
    <Animated.View style={{ ...style, opacity: fadeAnimation }}>
      {children}
    </Animated.View>
  )
}

export default FadeAnimation;