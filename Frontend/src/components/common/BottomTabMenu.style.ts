import { StyleSheet } from "react-native";

export const bottomTabMenuStyles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#FFF",
    borderTopWidth: 2,
    borderTopColor: "#6C63FF",
    paddingBottom: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginTop: 20,
    marginBottom: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 2,
    color: "#6C63FF",
    textTransform: "lowercase",
  },
  labelInactive: {
    color: "#B3AEE6",
  },
  iconInactive: {
    color: "#B3AEE6",
  },
});
