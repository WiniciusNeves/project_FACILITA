# Reorganização da Estrutura de Pastas para Feature-Based

## O que foi feito? 📝

- Reestruturada toda a organização de pastas do projeto para o padrão feature-based.
- Criadas pastas para cada funcionalidade principal em `src/features`, agrupando telas e componentes específicos de cada feature.
- Componentes reutilizáveis movidos para `src/shared/components`.
- Estilos, tipos e utilitários globais organizados em `src/shared`.
- Assets globais mantidos em `src/assets/img`.
- Atualizados todos os imports para refletir a nova estrutura.
- Removidas as antigas pastas `components`, `common`, `screens` e `styles` do nível raiz.

---

## Como foi feito?

1. **Criação da Estrutura Feature-Based**
   - Para cada tela/fluxo principal, foi criada uma pasta em `src/features` contendo a tela e seus componentes exclusivos.
   - Componentes, estilos, tipos e utils compartilhados foram movidos para `src/shared`.

2. **Organização dos Assets**
   - Imagens e ícones globais mantidos em `src/assets/img`.
   - Possibilidade de assets específicos dentro de cada feature, se necessário.

3. **Atualização dos Imports**
   - Todos os caminhos de importação foram revisados e atualizados para refletir a nova estrutura.

4. **Limpeza de Pastas Antigas**
   - Pastas antigas que não seguiam o padrão feature-based foram removidas após a migração.

---

## Arquivos Alterados/Criados 📄

- Estrutura de pastas em `src/features` e `src/shared`
- Atualização de todos os arquivos de tela, componente, estilo, tipo e utilitário para a nova estrutura
- Atualização dos imports em todo o projeto
- Remoção das pastas antigas `components`, `common`, `screens` e `styles`

---

## Tipo de mudança 🏗️

- [ ] Nova funcionalidade (mudança sem quebra que adiciona funcionalidade)
- [ ] Correção de bug (mudança sem quebra que corrige um problema)
- [x] Refatoração (melhoria de código sem quebra)
- [x] Chore (manutenção, build, configs, etc)
- [ ] Teste (unitário/integrado)
- [ ] Mudança com quebra 💥

---

## Observações

- A nova estrutura facilita a manutenção, escalabilidade e onboarding de novos desenvolvedores.
- Componentes e arquivos agora estão agrupados por contexto de uso, seguindo as melhores práticas de organização feature-based.
- Todos os imports foram revisados para evitar erros de build.

---

Qualquer dúvida, só chamar! 🚀
