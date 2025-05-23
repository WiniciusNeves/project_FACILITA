import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "@/components/common/Header";
import UserCardMini from "@/components/common/UserCardMini";
import UserModal from "@/components/common/UserModal";
import BottomTabMenu from "@/components/common/BottomTabMenu";
import SearchInput from "@/components/common/SearchInput";
import ProfessionTagsList from "@/components/common/ProfessionTagsList";
import ProfessionSelectModal from "@/components/common/ProfessionSelectModal";
import { jobTagTemplates } from "@/utils/templates/jobTagTemplates";
import {
  FlatList,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: "Ronando Jubileu",
    tags: ["Eletricista", "Cozinheiro", "Camioneiro"],
    rating: 4,
    description:
      "Sou Ronando Jubileu, profissional com experiência em diversas áreas. Sempre priorizo a qualidade e a satisfação do cliente.",
    photoUrl: undefined,
  });
  const [activeTab, setActiveTab] = useState<
    "home" | "options" | "activities" | "menu"
  >("home");
  const [search, setSearch] = useState("");
  const [modalProfVisible, setModalProfVisible] = useState(false);
  const professions = jobTagTemplates.map((t) => t.label);
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);

  // Map user tags to template colors
  const userTags = selectedUser.tags.map((label) => {
    const found = jobTagTemplates.find((t) => t.label === label);
    return found || { label, color: "#6C63FF" };
  });

  const handleToggleProfession = (profession: string) => {
    setSelectedProfessions((prev) =>
      prev.includes(profession)
        ? prev.filter((item) => item !== profession)
        : [...prev, profession]
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header
          title="Página inicial"
          photo={selectedUser.photoUrl || require("@/assets/img/avatar1.png")}
        />
        <View style={styles.innerContainer}>
          <SearchInput value={search} onChangeText={setSearch} />
          <ProfessionTagsList onAllPress={() => setModalProfVisible(true)} />
          <ProfessionSelectModal
            visible={modalProfVisible}
            professions={professions}
            selectedProfessions={selectedProfessions}
            onToggle={handleToggleProfession}
            onClose={() => setModalProfVisible(false)}
          />
          <View style={styles.divider} />
          <Image
            source={require("../../assets/img/anuncio.png")}
            style={styles.adImage}
          />
          <Text style={styles.sugestoes}>Sugestões:</Text>
          <FlatList
            data={[selectedUser, selectedUser]}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({ item }) => (
              <UserCardMini
                name={item.name}
                tags={item.tags.map((label: string) => {
                  const found = jobTagTemplates.find((t) => t.label === label);
                  return found || { label, color: "#6C63FF" };
                })}
                onMoreInfo={() => setModalVisible(true)}
              />
            )}
            ListFooterComponent={
              <UserModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                name={selectedUser.name}
                specialty={userTags.map((t) => t.label).join(", ")}
                description={selectedUser.description}
                rating={selectedUser.rating}
                photoUrl={selectedUser.photoUrl}
                onAction={() => {}}
                actionLabel="Contratar"
                onProfile={() => {}}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
            style={{ flexGrow: 1, minHeight: 200 }}
          />
        </View>
        <BottomTabMenu activeTab={activeTab} onTabPress={setActiveTab} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 40,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#191919",
    marginVertical: 10,
  },
  adImage: {
    width: "100%",
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
  },
  sugestoes: {
    fontSize: 16,
    color: "#6C63FF",
    marginBottom: 8,
    marginLeft: 4,
    fontWeight: "bold",
  },
});
