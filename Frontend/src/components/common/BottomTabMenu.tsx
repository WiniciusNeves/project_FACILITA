import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { bottomTabMenuStyles } from "./BottomTabMenu.style";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const TABS = [
  { key: "HomeTab", icon: "house", label: "início" },
  { key: "OptionTab", icon: "ellipsis", label: "opções" },
  { key: "Activities", icon: "file", label: "atividades" },
  { key: "Menu", icon: "bars", label: "menu" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const BottomTabMenu: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={bottomTabMenuStyles.container}>
      {TABS.map((tab, idx) => {
        const isActive = state.index === idx;
        return (
          <TouchableOpacity
            key={tab.key}
            style={bottomTabMenuStyles.tab}
            onPress={() => navigation.navigate(tab.key as never)}
            activeOpacity={0.7}
          >
            <FontAwesome6
              name={tab.icon}
              size={32}
              style={bottomTabMenuStyles.icon}
              color={isActive ? "#6C63FF" : "#B3AEE6"}
              solid={isActive}
            />
            <Text
              style={[
                bottomTabMenuStyles.label,
                !isActive && bottomTabMenuStyles.labelInactive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabMenu;
