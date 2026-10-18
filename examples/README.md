# sdks/node/examples - exemplos node (canonicos)

@version 1.4.0 | criado: 15/10/2026 18:52 | atualizado: 18/10/2026 00:29

## O que e
Os 7 exemplos node (.ts) - 4 endpoints + 3 variantes do WhatsApp - EXPORTADOS DA LANDING PAGE (fonte unica
de verdade). Nunca editados a mao.

## Fonte unica de verdade
- FalaAI_landing/lib/sandbox-examples.ts -> SANDBOX_EXAMPLES[<endpoint>].node
- que INTERPOLA FalaAI_landing/lib/sandbox-json-example.ts (SANDBOX_JSON_EXAMPLE = dados reais).

## Script (ferramenta)
_generate_node_examples.mjs (prefixo _ = ferramenta, nao exemplo)

| Comando                                      | Acao                                                      |
|----------------------------------------------|-----------------------------------------------------------|
| node _generate_node_examples.mjs             | Exporta (escreve os ts a partir da landing + README)     |
| node _generate_node_examples.mjs --check     | Verifica (compara ts x landing; exit 1 se divergir)      |

- Roda de QUALQUER pasta (resolve a landing pelo proprio caminho).
- Pre-requisito: Node (v22+).
- NUNCA edite os ts nem este README a mao: edite a landing e reexecute o script.

## Ordem obrigatoria (regra)
1. Altere a FONTE (landing / SANDBOX_JSON_EXAMPLE).
2. Valide o cURL primeiro:  node _generate_node_examples.mjs --check   (exit 0 = ok)
3. So depois espelhe nas linguagens.
4. Cadeia integrada no pipeline: scripts/regenerate_all.py (T11) exporta via node.

## Relatorio da ultima execucao
| Data | Modo | Resultado |
|------|------|-----------|
| 18/10/2026 00:29 | exportacao | OK - 7 exemplos node exportados da landing. |

| Arquivo | Endpoint | Status | Gerado em |
|---------|----------|--------|-----------|
| health.ts | GET  /v1/health | exportado (361 chars) | 18/10/2026 00:29 |
| transcribe.ts | POST /v1/audio/transcriptions | exportado (860 chars) | 18/10/2026 00:29 |
| diagnose.ts | POST /v1/analyze/diagnostic | exportado (4406 chars) | 18/10/2026 00:29 |
| audit.ts | POST /v1/analyze/riskAudit | exportado (3286 chars) | 18/10/2026 00:29 |
| whatsapp_preview.ts | POST /v1/whatsapp/extractConversations | exportado (1012 chars) | 18/10/2026 00:29 |
| whatsapp_periodo.ts | POST /v1/whatsapp/extractConversations | exportado (1027 chars) | 18/10/2026 00:29 |
| whatsapp_janelas.ts | POST /v1/whatsapp/extractConversations | exportado (1114 chars) | 18/10/2026 00:29 |

## Datas
- Criacao:     15/10/2026 18:52
- Atualizacao: 18/10/2026 00:29

Gerado automaticamente por _generate_node_examples.mjs - NAO edite a mao.
