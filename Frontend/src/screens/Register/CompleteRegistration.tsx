import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Modal,
    FlatList,
    StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import InputAuth from "@/components/InputAuth";
import AuthButton from "@/components/AuthButton";
import Icon from "react-native-vector-icons/FontAwesome6";
import { container, subtitle, avatarImage, highlightedText, inputContainer, primaryButton } from "@/styles/auth";
import { useNavigation } from "@react-navigation/native";

export default function CompleteRegistration() {
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const navigation = useNavigation();

    const professions = ["Encanador", "Jardineiro", "Eletricista", "Pintor", "Pedreiro"];

    const toggleProfession = (profession: string) => {
        if (selectedProfessions.includes(profession)) {
            setSelectedProfessions(selectedProfessions.filter((item) => item !== profession));
        } else {
            setSelectedProfessions([...selectedProfessions, profession]);
        }
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setBirthDate(selectedDate);
        }
    };

    const handleCompleteRegistration = () => {
        console.log("Registration completed with:", { cpfCnpj, birthDate, selectedProfessions });
        navigation.navigate("AuthScreen");
    };

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={container.base}>
                    <Image source={require("../../assets/img/avatar1.png")} style={avatarImage.base} />
                    <Text style={subtitle.base}>
                        Você pode <Text style={highlightedText.base}>adicionar mais informações</Text> ao seu perfil para se destacar como contador. <Text style={highlightedText.base}>Mantenha seus dados atualizados e aumente suas chances de ser contratado!</Text>
                    </Text>

                    <InputAuth
                        placeholder="CPF/CNPJ"
                        icon="id-card"
                        value={cpfCnpj}
                        onChangeText={setCpfCnpj}
                    />
                    <Text style={{ color: "red", fontSize: 14, marginBottom: 16 }}>
                        Se você não possui uma empresa cadastrada como MEI ou Simples Nacional, basta manter o seu CPF registrado.
                    </Text>

                    {/* Botão para abrir o modal */}
                    <TouchableOpacity
                        style={[inputContainer.base, { padding: 12 }]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: selectedProfessions.length ? "#000" : "#999" }}>
                            {selectedProfessions.length
                                ? selectedProfessions.join(", ")
                                : "Selecione suas capacidades"}
                        </Text>
                    </TouchableOpacity>

                    {/* Tags das profissões selecionadas */}
                    <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 16 }}>
                        {selectedProfessions.map((profession) => (
                            <Text
                                key={profession}
                                style={{
                                    backgroundColor: "#6C63FF",
                                    color: "#FFF",
                                    paddingHorizontal: 12,
                                    paddingVertical: 6,
                                    borderRadius: 16,
                                    marginRight: 8,
                                    marginBottom: 8,
                                }}
                            >
                                {profession}
                            </Text>
                        ))}
                    </View>

                    {/* Modal para seleção de profissões */}
                    <Modal
                        visible={modalVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <FlatList
                                    data={professions}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={[
                                                styles.option,
                                                selectedProfessions.includes(item) && styles.optionSelected,
                                            ]}
                                            onPress={() => toggleProfession(item)}
                                        >
                                            <Text
                                                style={[
                                                    styles.optionText,
                                                    selectedProfessions.includes(item) && styles.optionTextSelected,
                                                ]}
                                            >
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.closeButtonText}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    {/* Campo de data com calendário */}
                    <TouchableOpacity
                        style={inputContainer.base}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Icon name="calendar" size={24} color="#6C63FF" />
                        <Text style={{ marginLeft: 8, color: birthDate ? "#000" : "#999", fontSize: 16 }}>
                            {birthDate
                                ? birthDate.toLocaleDateString("pt-BR")
                                : "Data de nascimento ou cadastro da empresa"}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={birthDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    <AuthButton
                        label="Atualizar"
                        onPress={handleCompleteRegistration}
                        disabled={!cpfCnpj || !birthDate || selectedProfessions.length === 0}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 16,
    },
    option: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
    },
    optionSelected: {
        backgroundColor: "#6C63FF",
    },
    optionText: {
        fontSize: 16,
        color: "#000",
    },
    optionTextSelected: {
        color: "#FFF",
    },
    closeButton: {
        marginTop: 16,
        alignItems: "center",
        padding: 12,
        backgroundColor: "#6C63FF",
        borderRadius: 8,
    },
    closeButtonText: {
        color: "#FFF",
        fontSize: 16,
    },
});
