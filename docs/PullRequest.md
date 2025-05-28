# Dashboard do Usuário e Filtro de Prestadores

## O que foi feito? 📝

- Implementada a tela principal do cliente (dashboard) com lista de prestadores mockados, barra de busca e filtro por profissão usando tags e modal.
- Adicionada seleção de tags com destaque visual para filtrar prestadores por profissão.
- Integrados os componentes UserCardMini e UserModal para exibir detalhes do prestador em modal ao clicar em "Mais Informações".
- Garantido que a imagem de perfil do usuário seja salva no cadastro e exibida corretamente no header.
- Melhorado o componente Tag para ser clicável e indicar visualmente a seleção.
- Refatoração geral para melhor separação de responsabilidades e experiência do usuário.

---

## Como foi feito?

1. **Implementação do Dashboard do Cliente**

   - Criada FlatList de prestadores mockados com filtro por tags selecionadas e busca por nome/serviço.
   - Utilizado ProfessionTagsList e ProfessionSelectModal para filtro por profissão.
   - Utilizado UserCardMini para cards de prestadores e UserModal para detalhes.

2. **Tratamento da Imagem de Perfil**

   - Fluxo de cadastro atualizado para salvar a imagem de perfil escolhida no MMKV.
   - Header exibe a imagem do usuário ou avatar padrão.

3. **Seleção e Destaque de Tags**

   - Tag agora é clicável e destaca visualmente quando selecionada.
   - ProfessionTagsList recebe prop selectedTags para controlar destaque.

4. **Refatoração Geral**
   - Melhorias no gerenciamento de estado e organização do código para clareza e manutenção.

---

## Arquivos Alterados/Criados 📄

- `src/screens/Home/ClientDashboardScreen.tsx`
- `src/components/common/ProfessionTagsList.tsx`
- `src/components/common/Tag.tsx`
- `src/components/common/UserCardMini.tsx`
- `src/components/common/UserModal.tsx`
- `src/components/ProfileImagePicker.tsx`
- `src/screens/Register/Register.tsx`
- `src/components/common/Header.tsx`

---

## Tipo de mudança 🏗️

- [x] Nova funcionalidade (mudança sem quebra que adiciona funcionalidade)
- [x] Correção de bug (mudança sem quebra que corrige um problema)
- [x] Refatoração (melhoria de código sem quebra)
- [ ] Chore (manutenção, build, configs, etc)
- [ ] Teste (unitário/integrado)
- [ ] Mudança com quebra 💥

---

## Observações

- A imagem de perfil do usuário agora é salva e carregada corretamente para exibição no header.
- Seleção e filtro por tags estão funcionais e com feedback visual.
- O modal de detalhes do prestador é exibido sob demanda para cada card.
- Todo o código segue a estrutura feature-based e o padrão Conventional Commits.

---

Qualquer dúvida, só chamar! 🚀
