---
description: Realiza uma auditoria executiva e técnica da aplicação usando o Browser Sub-Agent e gera um relatório com evidências visuais.
---

# Workflow: Auditoria Executiva (`/auditoria-executiva`)

Quando o usuário acionar este workflow:

1. **Inspeção de Código e Regras de Negócio:**
   - Analise os arquivos da trilha indicada pelo usuário (ou todas as 3 trilhas no portal principal).
2. **Teste Automatizado de Ponta a Ponta (Browser Sub-Agent):**
   - Inicie ou acesse o servidor web local e utilize o **Browser Sub-Agent** para navegar pela aplicação, interagir com os controles principais e verificar a ausência de erros de execução (`console.error`) ou quebras de layout.
3. **Geração de Relatório Executivo (Walkthrough Artifact):**
   - Produza um **Walkthrough Artifact** estruturado contendo:
     - **Resumo Executivo:** O estado atual da aplicação e suas capacidades de simulação/decisão.
     - **Evidências Visuais:** Screenshots capturados durante o teste automatizado no navegador.
     - **Recomendações de Próximos Passos:** 3 sugestões de evolução estratégica que o líder poderia delegar para subagentes em paralelo.
