# Novas Telas: Menu, Edição de Perfil e Serviços do Autônomo + Ajustes de Navegação

## O que foi feito? 📝

- Criada a tela **Menu** (`MenuScreen`) com cards para editar perfil, histórico de serviços, gerenciar serviços e sair da conta.
- Criada a tela **Editar Perfil** (`EditProfileScreen`) permitindo ao usuário visualizar e atualizar seus dados pessoais e, se for autônomo, dados de provider.
- **Adicionada a funcionalidade para autônomos adicionarem, editarem e removerem serviços oferecidos** através da tela `ManageServicesScreen`.
- Adicionada a navegação para a tela de edição de perfil e de serviços a partir do menu.
- Integrado o componente `ProfileImagePicker` para alteração da foto de perfil.
- Utilizados componentes reutilizáveis (`InputField`, `PrimaryButton`, etc) e tipos globais (`User`, `Provider`, `Role`, `Service`).
- Ajustado o `BottomTabMenu` para zerar a pilha ao trocar de aba.
- Atualizada a navegação no `AppNavigator` para incluir as novas telas no fluxo principal do app.

---

## Como foi feito?

1. **Implementação da Tela Menu**

   - Criada em `src/features/Menu/MenuScreen.tsx` com cards de navegação usando `OptionCard`.
   - Card para editar perfil navega para `EditProfileScreen`.
   - Card para gerenciar serviços navega para `ManageServicesScreen` (visível apenas para autônomos).
   - Card de histórico de serviços (placeholder para futuras features).
   - Card de sair da conta faz logout e reseta navegação.

2. **Implementação da Tela Editar Perfil**

   - Criada em `src/features/EditProfile/EditProfileScreen.tsx`.
   - Carrega dados do usuário logado do MMKV e, se for provider, dados do provider.
   - Permite editar nome, telefone, whatsapp, foto de perfil e, para autônomo, CPF/CNPJ, data de nascimento, endereço e descrição.
   - Salva alterações no MMKV e exibe mensagem de sucesso.

3. **Gerenciamento de Serviços do Autônomo**

   - Criada a tela `src/features/ManageServices/ManageServicesScreen.tsx`.
   - Permite ao autônomo visualizar, adicionar, editar e remover serviços oferecidos.
   - Utiliza formulário para cadastro/edição de serviço (nome, descrição, preço, categoria).
   - Serviços são salvos e atualizados no MMKV junto ao provider.
   - Feedback visual para operações de sucesso/erro.

4. **Ajustes de Navegação**
   - Adicionada a stack `MenuStackNavigator` ao `MainTabNavigator` em `AppNavigator.tsx`.
   - Incluída a tela `EditProfileScreen` e `ManageServicesScreen` dentro da stack do menu.
   - Ajustado o `BottomTabMenu` para zerar a pilha ao trocar de aba, garantindo navegação limpa.

---

## Arquivos Alterados/Criados 📄

- `src/features/Menu/MenuScreen.tsx`
- `src/features/EditProfile/EditProfileScreen.tsx`
- `src/features/ManageServices/ManageServicesScreen.tsx`
- `src/features/ManageServices/ServiceForm.tsx`
- `src/navigation/AppNavigator.tsx`
- `src/shared/components/BottomTabMenu.tsx`
- Componentes e tipos reutilizados de `src/shared` e `src/features/SignUp/components`

---

## Tipo de mudança 🏗️

- [x] Nova funcionalidade (mudança sem quebra que adiciona funcionalidade)
- [ ] Correção de bug (mudança sem quebra que corrige um problema)
- [x] Refatoração (melhoria de código sem quebra)
- [x] Chore (manutenção, build, configs, etc)
- [ ] Teste (unitário/integrado)
- [ ] Mudança com quebra 💥

---

## Observações

- As telas seguem o padrão feature-based e utilizam componentes globais para consistência visual e de lógica.
- O fluxo de edição de perfil é dinâmico, mostrando campos extras para autônomos.
- O menu centraliza navegação para futuras features, gerenciamento de serviços e logout.
- O gerenciamento de serviços permite ao autônomo manter seu portfólio atualizado diretamente pelo app.
- O reset da pilha nas tabs garante experiência de navegação mais previsível.

---

Qualquer dúvida, só chamar! 🚀
