# sdks/node/examples - exemplos node (canonicos)

@version 1.4.0 | criado: 30/09/2026 10:47 | atualizado: 04/10/2026 02:35

## O que e
Os 4 exemplos node (ts) dos endpoints da API, EXPORTADOS DA LANDING PAGE (fonte unica
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
| 04/10/2026 02:35 | verificacao (--check) | OK - 5 exemplos node 100% conforme a landing. |

| Arquivo | Endpoint | Status | Gerado em |
|---------|----------|--------|-----------|
| health.ts | GET  /v1/health | ok | 04/10/2026 02:21 |
| transcribe.ts | POST /v1/audio/transcriptions | ok | 04/10/2026 02:21 |
| diagnose.ts | POST /v1/analyze/diagnostic | ok | 04/10/2026 02:21 |
| audit.ts | POST /v1/analyze/riskAudit | ok | 04/10/2026 02:21 |
| whatsapp.ts | whatsapp.ts | ok | 04/10/2026 02:21 |

## Datas
- Criacao:     30/09/2026 10:47
- Atualizacao: 04/10/2026 02:35

Gerado automaticamente por _generate_node_examples.mjs - NAO edite a mao.
