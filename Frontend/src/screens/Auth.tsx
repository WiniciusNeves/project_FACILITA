import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";

const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/authLogo.png")} style={styles.logo} />
            <Text style={styles.welcomeText}>Bem vindo de volta</Text>
            <Text style={styles.description}>
                Acesse sua conta para encontrar e se conectar com os melhores profissionais da sua região. 
                Se ainda não tem uma conta, cadastre-se em poucos passos e comece agora mesmo!
            </Text>

            <Button
                mode="contained"
                onPress={() => {}}
                style={styles.googleButton}
            >
                <View style={styles.googleButtonContent}>
                    <Image 
                        source={require("../../assets/googleIcon.png")} 
                        style={styles.googleIconImage}
                    />
                    <View style={styles.verticalLine} />
                    <Text style={styles.googleButtonText}>Entra pela conta do google</Text>
                </View>
            </Button>

            <Text style={styles.orText}>OU</Text>

            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>esqueceu a sua <Text style={{ fontWeight: "bold" }}>senha?</Text></Text>
            </TouchableOpacity>

            <Button mode="contained" onPress={() => {}} style={styles.loginButton} labelStyle={styles.loginButtonText}>
                Entrar
            </Button>

            <TouchableOpacity>
                <Text style={styles.registerText}>se nao tiver conta <Text style={{ fontWeight: "bold" }}>registre agora!</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 24,
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginBottom: 16,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        color: "#333",
        marginBottom: 16,
        lineHeight: 20,
    },
    googleButton: {
        backgroundColor: "#0060FF",
        width: 310,
        borderRadius: 0,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    googleButtonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    verticalLine: {
        width: 1,
        height: 20,
        backgroundColor: "#fff",
        marginHorizontal: 12,
    },
    googleIconImage: {
        width: 28,
        height: 28,
    },
    googleButtonText: {
        color: "#fff",
        fontSize: 14,
    },
    orText: {
        textAlign: "center",
        marginBottom: 16,
        fontSize: 14,
        color: "#333",
    },
    inputContainer: {
        marginBottom: 0,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 18,
        borderWidth: 1,
        borderColor: "#6C63FF",
        padding: 16,
        paddingLeft: 24,
        marginBottom: 20,
        fontSize: 14,
        boxShadow: "0 4px 4px rgba(108, 99, 255, 1)",
        width: 310,
        alignSelf: "center",
    },
    forgotPasswordText: {
        textAlign: "right",
        color: "#6C63FF",
        fontSize: 12,
        marginBottom: 16,
        marginRight: 30,
        textDecorationLine: "underline",
    },
    loginButton: {
        backgroundColor: "#6C63FF",
        borderRadius: 16,
        paddingVertical: 6,
        marginBottom: 16,
        width: 215,
        alignSelf: "center",
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 20,
    },
    registerText: {
        textAlign: "center",
        color: "#6C63FF",
        fontSize: 12,
        textDecorationLine: "underline",
    },
});

export default AuthScreen;
