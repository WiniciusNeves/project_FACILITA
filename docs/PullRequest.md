# Dashboard do Prestador e Melhorias no Fluxo Usuário/Prestador

## O que foi feito? 📝

- Implementada a tela principal do prestador (`ProviderDashboardScreen`) com serviços mockados, informações do prestador e botões de ação.
- Garantido o redirecionamento correto pós-login: clientes vão para `Main`, prestadores vão para `ProviderDashboardScreen`.
- Melhorada a experiência do usuário e o UI/UX dos dashboards de cliente e prestador.
- A imagem de perfil agora é salva no cadastro e exibida no header para ambos os papéis.

---

## Como foi feito?

1. **Implementação do Dashboard do Prestador**

   - Criada nova tela para prestadores com header exibindo informações, lista de serviços mockados e botões para adicionar/ver serviços e avaliações.

2. **Redirecionamento pós-login**

   - Lógica de login atualizada para checar o papel do usuário e navegar para o dashboard correto após autenticação.

3. **Tratamento da Imagem de Perfil**

   - Fluxo de cadastro atualizado para salvar a imagem de perfil escolhida no MMKV.
   - Header exibe a imagem do usuário ou avatar padrão para ambos os papéis.

---

## Arquivos Alterados/Criados 📄

- `src/screens/Home/ProviderDashboardScreen.tsx`
- `src/screens/Home/ClientDashboardScreen.tsx`
- `src/components/common/ProfessionTagsList.tsx`
- `src/components/common/Tag.tsx`
- `src/components/common/UserCardMini.tsx`
- `src/components/common/UserModal.tsx`
- `src/components/ProfileImagePicker.tsx`
- `src/screens/Register/Register.tsx`
- `src/components/common/Header.tsx`
- `src/screens/Auth.tsx`
- `src/types/Category.ts`
- `src/types/Provider.ts`
- `src/types/Service.ts`
- `src/types/User.ts`
- `src/utils/templates/jobTagTemplates.ts`
- `docs/PullRequest.md`

---

## Tipo de mudança 🏗️

- [x] Nova funcionalidade (mudança sem quebra que adiciona funcionalidade)
- [ ] Correção de bug (mudança sem quebra que corrige um problema)
- [ ] Refatoração (melhoria de código sem quebra)
- [ ] Chore (manutenção, build, configs, etc)
- [ ] Teste (unitário/integrado)
- [ ] Mudança com quebra 💥

---

Qualquer dúvida, só chamar! 🚀
