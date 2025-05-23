import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Tag from "./Tag";
import { jobTagTemplates } from "@/utils/templates/jobTagTemplates";

interface ProfessionTagsListProps {
  onAllPress: () => void;
  maxToShow?: number;
}

const ProfessionTagsList: React.FC<ProfessionTagsListProps> = ({
  onAllPress,
  maxToShow = 5,
}) => {
  const tagsToShow = jobTagTemplates.slice(0, maxToShow);
  return (
    <View style={styles.row}>
      {tagsToShow.map((tag) => (
        <Tag key={tag.label} label={tag.label} color={tag.color} />
      ))}
      <TouchableOpacity onPress={onAllPress} style={styles.allButton}>
        <Text style={styles.allText}>Todos os serviços +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 12,
  },
  allButton: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
  },
  allText: {
    color: "#6C63FF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default ProfessionTagsList;
