// src/types/User.ts
export enum Role {
  COMMON = "common",
  PROVIDER = "provider",
  ADMIN = "admin",
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: Role;
  whatsapp: string;
  profile_picture?: string;
  // Adicione outros campos necessários
}
