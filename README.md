# 📝 Convenções de Contribuição — Projeto FACILITA

## 📂 Organização de Pastas: Feature Based

- O projeto segue o padrão **Feature Based**, organizando os arquivos por funcionalidades.
- Cada tela ou funcionalidade principal deve ter sua própria pasta em `/src/screens`.
- Componentes reutilizáveis ficam em `/src/components/common`.
- Serviços, hooks e utilities também podem seguir a divisão por feature, quando fizer sentido.

**Exemplo de estrutura:**

```
src/
  components/
    common/
      Button.tsx
  screens/
    home/
      HomeScreen.tsx
      homeSlice.ts
    perfil/
      PerfilScreen.tsx
  services/
  utils/
```

---

## 🌳 Fluxo de Trabalho: Git Flow

1. **Sempre parta da branch `develop`** para criar sua branch de feature.
2. **Nomeie a branch** seguindo o padrão: `feature/nome-da-feature`.
   - Exemplo: `feature/tela-perfil`, `feature/component-button`
3. **Nunca faça merge direto na branch `develop` ou `main`**.
4. Antes de criar um **Pull Request (PR)**, dê um `git pull origin develop` para pegar o código atualizado e puxar para a sua branch, evitando conflitos na hora de dar merge.
5. Sempre crie um **Pull Request (PR)** da sua branch de feature para a branch `develop`.
6. Aguarde revisão (pelo menos 1 aprovação do time) antes de mergear.

---

## ✍️ Commits: Conventional Commits

- Utilize o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para os commits, facilitando o entendimento e rastreabilidade das alterações.
- Exemplos de prefixos:
  - `feat`: nova funcionalidade
  - `fix`: correção de bug
  - `docs`: alterações na documentação
  - `refactor`: refatoração de código
  - `test`: criação ou ajuste de testes
  - `chore`: tarefas de manutenção (build, configs, etc)

**Exemplo de commit (em inglês):**

```
feat(profile): add avatar field to user profile
fix(home): fix highlights loading bug
docs(readme): update contribution guidelines and project structure
```

---

## 🗂️ Padronização de Pull Requests

- **Título:** Descritivo e objetivo — Ex: `[Feature] Tela de perfil`
- **Descrição:** Detalhe as alterações, explique pontos importantes e cite issues relacionadas.
- **Checklist:** Adicione o que foi feito, pontos pendentes e dependências, se existirem.
- **Utilize a IA:** A IA pode sugerir sumários, títulos de PR e checklist de alterações.

---

## 📝 Documentação das Alterações

- Sempre documente:
  - Quais arquivos/telas/componentes foram alterados ou criados.
  - O objetivo da alteração.
  - Pontos de atenção para revisão.
- Utilize comentários no PR, markdown no corpo do PR ou adicione um changelog breve.

---

## 💬 Comunicação & Colaboração

- Comunique no grupo (WhatsApp ou Discord) antes de iniciar uma nova feature ou alteração grande.
- Avise sobre possíveis impactos em outras áreas do projeto.
- Revise e consulte o board de issues antes de começar para evitar retrabalho.
- Dê preferência por reutilizar componentes já existentes. Caso precise de um novo, consulte o time antes de criar.

---

## 🚫 Evite

- **Código duplicado:** Antes de criar um novo componente/função, verifique se já existe algo semelhante.
- **Falta de comunicação:** Sempre alinhe o que está sendo feito para não haver sobreposição de tarefas.
- **Merges diretos:** Não faça merge direto na develop ou main, sempre use PR.

---

## ✅ Resumo das Boas Práticas

- Organização por feature.
- Utilização do Git Flow.
- Commits seguindo o padrão Conventional Commits.
- Pull Requests detalhados e revisados.
- Comunicação constante para evitar retrabalho.
- Documentação clara das alterações.

---

**Qualquer dúvida, pergunte no grupo e mantenha a colaboração ativa!**
