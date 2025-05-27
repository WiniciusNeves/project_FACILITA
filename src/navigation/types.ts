// src/navigation/types.ts

export type AuthStackParamList = {
  Onboarding: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Policy: undefined;
  AuthScreen?: { showSuccessModal?: boolean };
  RestorePassword: undefined;
  Register: undefined;
  EmailVerification: undefined;
  CompleteRegistration: undefined;
};

export type MainStackParamList = {
  Home: undefined; // Tela principal do app
  Option: undefined; // Tela de opções
  Atividade: undefined; // Tela de atividades
  // Adicione outras telas principais aqui
};
