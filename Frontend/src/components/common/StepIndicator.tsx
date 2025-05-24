import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  indicatorContainer,
  indicator,
} from "../../styles/onboarding";

export interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
  style?: StyleProp<ViewStyle>;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  totalSteps,
  currentStep,
  style,
}) => {
  const stepDots = [];

  for (let i = 0; i < totalSteps; i++) {
    const isActive = i === currentStep;
    stepDots.push(
      <View
        key={`step-dot-${i}`} 
        style={[
          indicator.base,
          isActive ? indicator.active : {},
        ]}
      />
    );
  }

  return (
    // Usa o estilo base do seu container de indicadores e permite um estilo adicional via props
    <View style={[indicatorContainer.base, style]}>
      {stepDots}
    </View>
  );
};

export default StepIndicator;
