import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { bottomTabMenuStyles } from "./BottomTabMenu.style";

export interface BottomTabMenuProps {
  activeTab: "home" | "options" | "activities" | "menu";
  onTabPress: (tab: "home" | "options" | "activities" | "menu") => void;
}

const TABS = [
  { key: "home", icon: "house", label: "início" },
  { key: "options", icon: "ellipsis", label: "opções" },
  { key: "activities", icon: "file", label: "atividades" },
  { key: "menu", icon: "bars", label: "menu" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const BottomTabMenu: React.FC<BottomTabMenuProps> = ({
  activeTab,
  onTabPress,
}) => {
  return (
    <View style={bottomTabMenuStyles.container}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={bottomTabMenuStyles.tab}
            onPress={() => onTabPress(tab.key as TabKey)}
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
