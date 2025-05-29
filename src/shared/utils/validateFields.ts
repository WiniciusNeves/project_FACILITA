export const isFullName = (name: string) => {
  return name.trim().split(' ').length >= 2;
};

export interface ValidateFieldsParams {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  password: string;
  confirmPassword: string;
  role: string;
  cpfCnpj?: string;
  dateOfBirth?: string;
  address?: string;
}

export function validateFields(params: ValidateFieldsParams): {
  valid: boolean;
  message: string;
} {
  const {
    name,
    email,
    phone,
    whatsapp,
    password,
    confirmPassword,
    role,
    cpfCnpj = '',
    dateOfBirth = '',
    address = '',
  } = params;

  if (!isFullName(name)) {
    return {
      valid: false,
      message: 'Informe seu nome completo (nome e sobrenome).',
    };
  }
  if (!email.includes('@') || !email.includes('.')) {
    return {
      valid: false,
      message: "O e-mail deve conter '@' e '.' para ser válido.",
    };
  }
  if (!/^[0-9]{10,11}$/.test(phone.replace(/\D/g, ''))) {
    return {valid: false, message: 'Informe um telefone válido (com DDD).'};
  }
  if (!/^[0-9]{10,11}$/.test(whatsapp.replace(/\D/g, ''))) {
    return {valid: false, message: 'Informe um WhatsApp válido (com DDD).'};
  }
  if (password.length < 8) {
    return {valid: false, message: 'A senha deve ter pelo menos 8 caracteres.'};
  }
  if (password !== confirmPassword) {
    return {valid: false, message: 'As senhas não coincidem.'};
  }
  if (role === 'PROVIDER') {
    const cleanedCpfCnpj = cpfCnpj.replace(/\D/g, '');
    if (
      !cleanedCpfCnpj ||
      (cleanedCpfCnpj.length !== 11 && cleanedCpfCnpj.length !== 14)
    ) {
      return {
        valid: false,
        message: 'Informe um CPF (11 dígitos) ou CNPJ (14 dígitos) válido.',
      };
    }
    if (!dateOfBirth.trim()) {
      return {valid: false, message: 'Informe a data de nascimento.'};
    }
    if (!address.trim()) {
      return {valid: false, message: 'Informe o endereço completo.'};
    }
    // Descrição NÃO é mais obrigatória
  }
  return {valid: true, message: ''};
}
