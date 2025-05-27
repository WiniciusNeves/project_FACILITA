import { StyleSheet } from "react-native";

export const userCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
    padding: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#EEE",
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  specialty: {
    fontSize: 14,
    color: "#6C63FF",
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  actionButton: {
    marginTop: 16,
    backgroundColor: "#6C63FF",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalCard: {
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 35,
    alignItems: "stretch",
  },
  rowTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EEE",
    marginLeft: 12,
  },
  profileLink: {
    marginTop: 18,
    alignItems: "center",
  },
  profileLinkText: {
    color: "#6C63FF",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
