import { StyleSheet } from "react-native";

export const userCardMiniStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#EEE",
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 4,
  },
  moreInfo: {
    marginLeft: 12,
  },
  moreInfoText: {
    color: "#6C63FF",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
