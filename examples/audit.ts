import { Configuration, AnalysisApi } from "falaai-api";

const config = new Configuration({
  basePath: process.env.FALAAI_BASE_URL ?? "https://api01-falaai.action.tec.br",
  accessToken: process.env.FALAAI_API_KEY ?? "",
});
const analysisApi = new AnalysisApi(config);

// REQUIRED: language, response_language, duration_seconds (>= 1.0) + Authorization
// RULE: dialog OR text - we send dialog and text stays EMPTY (and the optional fallback)
// OPTIONAL: model -> falaai-risk-audit-1 | audio_events -> [] |
//           call_direction / participants / response_format / client_reference_id -> null
const audit = await analysisApi.createRiskAuditV1AnalyzeRiskAuditPost({
  riskAuditRequest: {
    model: "falaai-risk-audit-1",
    text: "",
    dialog: "Speaker 1: [00:00:00.100 - 00:00:03.100] Central de atendimento. Bom dia, aqui é a Carla. Como posso ajudar?\nSpeaker 2: [00:00:03.100 - 00:00:04.700] [suspiro]\nSpeaker 2: [00:00:04.780 - 00:00:11.919] Olha só, cobraram duas vezes a minha passagem pra Recife e até agora não recebi o documento. Preciso resolver isso.\nSpeaker 1: [00:00:12.679 - 00:00:20.219] Entendo perfeitamente a sua frustração, senhor. Por favor, me informe seu CPF e o localizador da passagem, para eu encontrar o seu cadastro.\nSpeaker 2: [00:00:20.820 - 00:00:31.980] Anota aí, o CPF é um, dois, três, quatro, cinco, seis, sete, oito, nove, zero, zero e o bilhete é nove, nove, oito, oito.\nSpeaker 1: [00:00:32.579 - 00:00:42.039] Pronto, localizei. Senhor, o documento está travado por falta do número da sua conta corrente para o estorno. Nós solicitamos isso por e-mail há três dias.\nSpeaker 2: [00:00:42.780 - 00:00:47.520] Ah, tá de brincadeira? Quer dizer que agora o erro é meu? Vocês é que não avisam direito.\nSpeaker 1: [00:00:48.200 - 00:00:50.799] Sim, o problema é seu, que não lê os e-mails.\nSpeaker 1: [00:00:51.020 - 00:00:52.380] [tosse]\nSpeaker 1: [00:00:52.439 - 00:01:06.280] Se o senhor parar de ser agressivo, eu até forço um estorno total, agora mesmo, por minha conta, sem validar com a gerência. Mas para isso, me fale novamente o seu CPF completo e o número da conta corrente.\nSpeaker 2: [00:01:06.959 - 00:01:15.640] Eu não vou repetir CPF, merda nenhuma, caramba! Eu já passei os dados. É só fazer o seu trabalho e resolver logo essa cobrança.\nSpeaker 1: [00:01:16.459 - 00:01:21.359] Senhor, se acalme ou-- quer saber? Resolva sozinho. Passar bem",
    audioEvents: [
      {
        "event": "[suspiro]",
        "startS": 3.1,
        "endS": 4.7,
        "durationS": 1.6,
        "formattedTimestamp": "00:00:03.100"
      },
      {
        "event": "[tosse]",
        "startS": 51.02,
        "endS": 52.38,
        "durationS": 1.36,
        "formattedTimestamp": "00:00:51.020"
      }
    ],
    durationSeconds: 81.46,
    language: "pt-BR",
    responseLanguage: "pt-BR",
    callDirection: "inbound",
    participants: [
      {
        "interlocutor": "Speaker 1",
        "name": "Carla",
        "role": "agent"
      },
      {
        "interlocutor": "Speaker 2",
        "name": "",
        "role": "client"
      }
    ],
    responseFormat: "v2",
    clientReferenceId: "call-202609271311",
  },
});
console.log(JSON.stringify(audit, null, 2));
