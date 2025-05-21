import Tag from "@/components/common/Tag";
import UserCardMini from "@/components/common/UserCardMini";
import UserModal from "@/components/common/UserModal";
import BottomTabMenu from "@/components/common/BottomTabMenu";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: "Luiz Assis",
    tags: [
      { label: "tag1", color: "#FF5733" },
      { label: "tag2", color: "#f4f4f4" },
      { label: "tag3", color: "#FF5733" },
    ],
    rating: 5,
    description:
      "Sou Luiz Assis, profissional com experiência em diversas áreas. Sempre priorizo a qualidade e a satisfação do cliente.",
    photoUrl: undefined,
  });
  const [activeTab, setActiveTab] = useState<
    "home" | "options" | "activities" | "menu"
  >("home");

  const handleMoreInfo = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.description}>Welcome to the Home Screen!</Text>
        <UserCardMini
          name={selectedUser.name}
          tags={selectedUser.tags}
          onMoreInfo={handleMoreInfo}
        />
        <UserModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          name={selectedUser.name}
          specialty={selectedUser.tags.map((t) => t.label).join(", ")}
          description={selectedUser.description}
          rating={selectedUser.rating}
          photoUrl={selectedUser.photoUrl}
          onAction={() => {}}
          actionLabel="Contratar"
          onProfile={() => {}}
        />
      </View>
      <BottomTabMenu activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 40,
  },
  innerContainer: {
    flexGrow: 1,
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
});
