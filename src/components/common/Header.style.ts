import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    marginTop: 6,
  },
  avatarCircle: {
    backgroundColor: "#7DD3FC",
    borderRadius: 50,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -8,
  },
  avatarImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  arrowImg: {
    width: 300,
    alignSelf: "flex-start",
    marginRight: 20,
    marginTop: -8,
    marginBottom: 30,
  },
});
