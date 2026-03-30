"use strict";

if (typeof Blockly !== "undefined") {
  Blockly.Sendto = Blockly.Sendto || {};
  Blockly.Sendto.HUE = Blockly.Sendto.HUE || 160;

  // Define custom translations for the blockly block
  Blockly.Words["ntfy"] = {
    en: "ntfy-client notification",
    de: "ntfy-client Benachrichtigung",
    ru: "ntfy-client уведомление",
    pt: "ntfy-client notificação",
    nl: "ntfy-client melding",
    fr: "ntfy-client notification",
    it: "ntfy-client notifica",
    es: "ntfy-client notificación",
    pl: "ntfy-client powiadomienie",
    uk: "ntfy-client сповіщення",
    "zh-cn": "ntfy-client 通知",
  };
  Blockly.Words["ntfy_anyInstance"] = {
    en: "all instances",
    de: "alle Instanzen",
    ru: "все экземпляры",
    pt: "todas as instâncias",
    nl: "alle instanties",
    fr: "toutes les instances",
    it: "tutte le istanze",
    es: "todas las instancias",
    pl: "wszystkie instancje",
    uk: "всі екземпляри",
    "zh-cn": "所有实例",
  };
  Blockly.Words["ntfy_message"] = {
    en: "message",
    de: "Nachricht",
    ru: "сообщение",
    pt: "mensagem",
    nl: "bericht",
    fr: "message",
    it: "messaggio",
    es: "mensaje",
    pl: "wiadomość",
    uk: "повідомлення",
    "zh-cn": "消息",
  };
  Blockly.Words["ntfy_topic"] = {
    en: "topic",
    de: "Topic",
    ru: "Топик",
    pt: "topic",
    nl: "topic",
    fr: "topic",
    it: "topic",
    es: "topic",
    pl: "Topik",
    uk: "Топик",
    "zh-cn": "主题",
  };
  Blockly.Words["ntfy_title"] = {
    en: "title",
    de: "Titel",
    ru: "заголовок",
    pt: "título",
    nl: "titel",
    fr: "titre",
    it: "titolo",
    es: "título",
    pl: "tytuł",
    uk: "заголовок",
    "zh-cn": "标题",
  };
  Blockly.Words["ntfy_priority"] = {
    en: "priority",
    de: "Priorität",
    ru: "приоритет",
    pt: "prioridade",
    nl: "prioriteit",
    fr: "priorité",
    it: "priorità",
    es: "prioridad",
    pl: "priorytet",
    uk: "пріоритет",
    "zh-cn": "优先级",
  };
  Blockly.Words["ntfy_data"] = {
    en: "JSON data",
    de: "JSON Daten",
    ru: "JSON данные",
    pt: "Dados JSON",
    nl: "JSON gegevens",
    fr: "données JSON",
    it: "dati JSON",
    es: "datos JSON",
    pl: "dane JSON",
    uk: "JSON дані",
    "zh-cn": "JSON 数据",
  };
  Blockly.Words["ntfy_priority_default"] = {
    en: "default",
    de: "Standard",
    ru: "по умолчанию",
    pt: "padrão",
    nl: "standaard",
    fr: "par défaut",
    it: "predefinito",
    es: "predeterminado",
    pl: "domyślny",
    uk: "за замовчуванням",
    "zh-cn": "默认",
  };
  Blockly.Words["ntfy_priority_min"] = {
    en: "min",
    de: "sehr niedrig",
    ru: "минимальный",
    pt: "mínimo",
    nl: "minimaal",
    fr: "minimum",
    it: "minimo",
    es: "mínimo",
    pl: "minimalny",
    uk: "мінімальний",
    "zh-cn": "最低",
  };
  Blockly.Words["ntfy_priority_low"] = {
    en: "low",
    de: "niedrig",
    ru: "низкий",
    pt: "baixo",
    nl: "laag",
    fr: "bas",
    it: "basso",
    es: "bajo",
    pl: "niski",
    uk: "низький",
    "zh-cn": "低",
  };
  Blockly.Words["ntfy_priority_high"] = {
    en: "high",
    de: "hoch",
    ru: "высокий",
    pt: "alto",
    nl: "hoog",
    fr: "haut",
    it: "alto",
    es: "alto",
    pl: "wysoki",
    uk: "високий",
    "zh-cn": "高",
  };
  Blockly.Words["ntfy_priority_max"] = {
    en: "max",
    de: "sehr hoch",
    ru: "максимальный",
    pt: "máximo",
    nl: "maximaal",
    fr: "maximum",
    it: "massimo",
    es: "máximo",
    pl: "maksymalny",
    uk: "максимальний",
    "zh-cn": "最高",
  };
  Blockly.Words["ntfy_tags"] = {
    en: "tags",
    de: "Tags",
    ru: "теги",
    pt: "tags",
    nl: "tags",
    fr: "tags",
    it: "tag",
    es: "etiquetas",
    pl: "tagi",
    uk: "теги",
    "zh-cn": "标签",
  };
  Blockly.Words["ntfy_click"] = {
    en: "click URL",
    de: "Klick-URL",
    ru: "URL клика",
    pt: "URL de clique",
    nl: "klik-URL",
    fr: "URL de clic",
    it: "URL clic",
    es: "URL de clic",
    pl: "URL kliknięcia",
    uk: "URL кліку",
    "zh-cn": "点击链接",
  };
  Blockly.Words["ntfy_attach"] = {
    en: "attach URL",
    de: "Anhang-URL",
    ru: "URL вложения",
    pt: "URL de anexo",
    nl: "bijlage-URL",
    fr: "URL de pièce jointe",
    it: "URL allegato",
    es: "URL de adjunto",
    pl: "URL załącznika",
    uk: "URL вкладення",
    "zh-cn": "附件链接",
  };
  Blockly.Words["ntfy_attach_file"] = {
    en: "attach file (local path)",
    de: "Datei anhängen (lokaler Pfad)",
    ru: "прикрепить файл (локальный путь)",
    pt: "anexar ficheiro (caminho local)",
    nl: "bestand bijvoegen (lokaal pad)",
    fr: "joindre un fichier (chemin local)",
    it: "allega file (percorso locale)",
    es: "adjuntar archivo (ruta local)",
    pl: "dołącz plik (ścieżka lokalna)",
    uk: "прикріпити файл (локальний шлях)",
    "zh-cn": "附加文件（本地路径）",
  };
  Blockly.Words["ntfy_filename"] = {
    en: "filename",
    de: "Dateiname",
    ru: "имя файла",
    pt: "nome do ficheiro",
    nl: "bestandsnaam",
    fr: "nom du fichier",
    it: "nome file",
    es: "nombre de archivo",
    pl: "nazwa pliku",
    uk: "ім'я файлу",
    "zh-cn": "文件名",
  };
  Blockly.Words["ntfy_actions"] = {
    en: "actions (JSON)",
    de: "Aktionen (JSON)",
    ru: "действия (JSON)",
    pt: "ações (JSON)",
    nl: "acties (JSON)",
    fr: "actions (JSON)",
    it: "azioni (JSON)",
    es: "acciones (JSON)",
    pl: "akcje (JSON)",
    uk: "дії (JSON)",
    "zh-cn": "操作 (JSON)",
  };
  Blockly.Words["ntfy_markdown"] = {
    en: "markdown",
    de: "Markdown",
    ru: "markdown",
    pt: "markdown",
    nl: "markdown",
    fr: "markdown",
    it: "markdown",
    es: "markdown",
    pl: "markdown",
    uk: "markdown",
    "zh-cn": "markdown",
  };
  Blockly.Words["ntfy_delay"] = {
    en: "delay",
    de: "Verzögerung",
    ru: "задержка",
    pt: "atraso",
    nl: "vertraging",
    fr: "délai",
    it: "ritardo",
    es: "retraso",
    pl: "opóźnienie",
    uk: "затримка",
    "zh-cn": "延迟",
  };
  Blockly.Words["ntfy_email"] = {
    en: "email (forward to)",
    de: "E-Mail (weiterleiten an)",
    ru: "email (переслать на)",
    pt: "email (encaminhar para)",
    nl: "e-mail (doorsturen naar)",
    fr: "email (transférer à)",
    it: "email (inoltra a)",
    es: "email (reenviar a)",
    pl: "email (przekaż do)",
    uk: "email (переслати на)",
    "zh-cn": "电子邮件（转发至）",
  };
  Blockly.Words["ntfy_call"] = {
    en: "call (phone number)",
    de: "Anruf (Telefonnummer)",
    ru: "звонок (номер телефона)",
    pt: "chamada (número de telefone)",
    nl: "bellen (telefoonnummer)",
    fr: "appel (numéro de téléphone)",
    it: "chiamata (numero di telefono)",
    es: "llamada (número de teléfono)",
    pl: "połączenie (numer telefonu)",
    uk: "дзвінок (номер телефону)",
    "zh-cn": "电话（电话号码）",
  };
  Blockly.Words["ntfy_icon"] = {
    en: "icon URL",
    de: "Icon-URL",
    ru: "URL иконки",
    pt: "URL do ícone",
    nl: "pictogram-URL",
    fr: "URL de l'icône",
    it: "URL icona",
    es: "URL del icono",
    pl: "URL ikony",
    uk: "URL іконки",
    "zh-cn": "图标链接",
  };
  Blockly.Words["ntfy_sequence_id"] = {
    en: "message / sequence ID",
    de: "Nachrichten- / Sequenz-ID",
    ru: "ID сообщения / последовательности",
    pt: "ID de mensagem / sequência",
    nl: "bericht / sequentie-ID",
    fr: "ID de message / séquence",
    it: "ID messaggio / sequenza",
    es: "ID de mensaje / secuencia",
    pl: "ID wiadomości / sekwencji",
    uk: "ID повідомлення / послідовності",
    "zh-cn": "消息 / 序列ID",
  };
  Blockly.Words["ntfy_manage"] = {
    en: "ntfy-client management",
    de: "ntfy-client Verwaltung",
    ru: "ntfy-client управление",
    pt: "gestão ntfy-client",
    nl: "ntfy-client beheer",
    fr: "gestion ntfy-client",
    it: "gestione ntfy-client",
    es: "gestión de ntfy-client",
    pl: "zarządzanie ntfy-client",
    uk: "управління ntfy-client",
    "zh-cn": "ntfy-client 管理",
  };
  Blockly.Words["ntfy_action"] = {
    en: "action",
    de: "Aktion",
    ru: "действие",
    pt: "ação",
    nl: "actie",
    fr: "action",
    it: "azione",
    es: "acción",
    pl: "akcja",
    uk: "дія",
    "zh-cn": "行动",
  };
  Blockly.Words["ntfy_action_clear"] = {
    en: "mark as read and dismiss",
    de: "als gelesen markieren und ausblenden",
    ru: "отметить как прочитанное и отклонить",
    pt: "marcar como lida e descartar",
    nl: "markeren als gelezen en negeren",
    fr: "marquer comme lu et ignorer",
    it: "segna come letto e ignora",
    es: "marcar como leído y descartar",
    pl: "oznacz jako przeczytane i odrzuć",
    uk: "позначити як прочитане та відхилити",
    "zh-cn": "标记为已读并驳回",
  };
  Blockly.Words["ntfy_action_delete"] = {
    en: "delete",
    de: "löschen",
    ru: "удалить",
    pt: "eliminar",
    nl: "verwijderen",
    fr: "supprimer",
    it: "elimina",
    es: "eliminar",
    pl: "usuń",
    uk: "видалити",
    "zh-cn": "删除",
  };

  Blockly.Words["ntfy_cache"] = {
    en: "Disable Cache Control",
    de: "Cache-Kontrolle deaktivieren",
    ru: "Отключить управление кешем",
    pt: "Desativar controle de cache",
    nl: "Cachebeheer uitschakelen",
    fr: "Désactiver le contrôle du cache",
    it: "Disabilita controllo cache",
    es: "Desactivar control de caché",
    pl: "Wyłącz kontrolę bufora",
    uk: "Вимкнути керування кешем",
    "zh-cn": "禁用缓存控制",
  };
  Blockly.Words["ntfy_firebase"] = {
    en: "Disable Firebase",
    de: "Firebase deaktivieren",
    ru: "Отключить Firebase",
    pt: "Desativar Firebase",
    nl: "Firebase uitschakelen",
    fr: "Désactiver Firebase",
    it: "Disabilita Firebase",
    es: "Desactivar Firebase",
    pl: "Wyłącz Firebase",
    uk: "Вимкнути Firebase",
    "zh-cn": "禁用 Firebase",
  };
  Blockly.Words["ntfy_unifiedpush"] = {
    en: "UnifiedPush",
    de: "UnifiedPush",
    ru: "UnifiedPush",
    pt: "UnifiedPush",
    nl: "UnifiedPush",
    fr: "UnifiedPush",
    it: "UnifiedPush",
    es: "UnifiedPush",
    pl: "UnifiedPush",
    uk: "UnifiedPush",
    "zh-cn": "UnifiedPush",
  };
  Blockly.Words["ntfy_template"] = {
    en: "Template",
    de: "Template",
    ru: "Шаблон",
    pt: "Template",
    nl: "Template",
    fr: "Template",
    it: "Template",
    es: "Plantilla",
    pl: "Szablon",
    uk: "Шаблон",
    "zh-cn": "模板",
  };

  Blockly.Words["with_results"] = {
    en: "with results",
    de: "mit Ergebnissen",
    ru: "с результатами",
    pt: "com resultados",
    nl: "met resultaten",
    fr: "avec résultats",
    it: "con risultati",
    es: "con resultados",
    pl: "z wynikami",
    uk: "з результатами",
    "zh-cn": "带有结果",
  };

  Blockly.Words["loglevel"] = {
    en: "log level",
    de: "Loglevel",
    ru: "Уровень логирования",
    pt: "Nível de log",
    nl: "Logniveau",
    fr: "Niveau de journalisation",
    it: "Livello log",
    es: "Nivel de log",
    pl: "Poziom logowania",
    uk: "Рівень логування",
    "zh-cn": "日志级别",
  };
  Blockly.Words["loglevel_none"] = {
    en: "none",
    de: "keines",
    ru: "нет",
    pt: "nenhum",
    nl: "geen",
    fr: "aucun",
    it: "nessuno",
    es: "ninguno",
    pl: "brak",
    uk: "немає",
    "zh-cn": "无",
  };
  Blockly.Words["loglevel_debug"] = {
    en: "debug",
    de: "debug",
    ru: "debug",
    pt: "debug",
    nl: "debug",
    fr: "debug",
    it: "debug",
    es: "debug",
    pl: "debug",
    uk: "debug",
    "zh-cn": "debug",
  };
  Blockly.Words["loglevel_info"] = {
    en: "info",
    de: "info",
    ru: "info",
    pt: "info",
    nl: "info",
    fr: "info",
    it: "info",
    es: "info",
    pl: "info",
    uk: "info",
    "zh-cn": "info",
  };
  Blockly.Words["loglevel_warn"] = {
    en: "warn",
    de: "warn",
    ru: "warn",
    pt: "warn",
    nl: "warn",
    fr: "warn",
    it: "warn",
    es: "warn",
    pl: "warn",
    uk: "warn",
    "zh-cn": "warn",
  };
  Blockly.Words["loglevel_error"] = {
    en: "error",
    de: "error",
    ru: "error",
    pt: "error",
    nl: "error",
    fr: "error",
    it: "error",
    es: "error",
    pl: "error",
    uk: "error",
    "zh-cn": "error",
  };

  Blockly.Words["ntfy_mutator_arguments"] = {
    en: "Options",
    de: "Optionen",
    ru: "Опции",
    pt: "Opções",
    nl: "Opties",
    fr: "Options",
    it: "Opzioni",
    es: "Opciones",
    pl: "Opcje",
    uk: "Опції",
    "zh-cn": "选项",
  };
  Blockly.Words["ntfy_mutator_tooltip"] = {
    en: "Add an option",
    de: "Option hinzufügen",
    ru: "Добавить опцию",
    pt: "Adicionar uma opção",
    nl: "Optie toevoegen",
    fr: "Ajouter une option",
    it: "Aggiungi un'opzione",
    es: "Añadir una opción",
    pl: "Додaj opcję",
    uk: "Додати опцію",
    "zh-cn": "添加选项",
  };

  Blockly.Words["ntfy_tooltip"] = {
    en: "Sends ntfy-client notification.\ntopic: Topic.\nmessage: Text or Go template string (e.g. {{.temp}}°C).\ntitle: Header.\npriority: 1-5.\ntags: Emojis (e.g. skull,warn).\nclick URL: On-click link.\nicon URL: Custom icon.\nactions (JSON): Buttons.\nattach URL: File link.\nattach file (local path): Upload file.\nfilename: Name for attachment.\nsequence ID: Message update ID.\ndelay: Delivery delay (e.g. 10s, 1m, 1h).\nemail (forward to): Forwarding address.\ncall (phone number): Phone call.\nDisable Cache Control: No server cache.\nDisable Firebase: No Firebase.\nUnifiedPush: UnifiedPush support.\nTemplate: true/yes for inline templates, or a name (e.g. github) for predefined ones.\nJSON data: Data object for the template context.\nmarkdown: Markdown syntax.",
    de: "Sendet ntfy-client Nachricht.\nTopic: Topic-Name.\nNachricht: Text oder Go-Template-String (z.B. {{.temp}}°C).\nTitel: Überschrift.\nPriorität: 1-5.\nTags: Emojis (z.B. skull,warn).\nKlick-URL: Link bei Klick.\nIcon-URL: Eigenes Icon.\nAktionen (JSON): Buttons.\nAnhang-URL: Datei-Link.\nDatei anhängen (lokaler Pfad): Datei-Upload.\nDateiname: Name des Anhangs.\nSequenz-ID: Nachrichten-Update ID.\nVerzögerung: Liefer-Verzug (z.B. 10s, 1m, 1h).\nE-Mail (weiterleiten an): E-Mail-Adresse.\nAnruf (Telefonnummer): Telefonanruf.\nCache-Kontrolle deaktivieren: Kein Server-Cache.\nFirebase deaktivieren: Kein Firebase.\nUnifiedPush: UnifiedPush.\nTemplate: true/yes für Inline-Templates oder Name (z.B. github) für vordefinierte.\nJSON Daten: Datenobjekt für den Template-Kontext.\nMarkdown: Markdown-Syntax.",
    ru: "Отправляет ntfy-client уведомление.\nТопик: Топик.\nсообщение: Текст или Go-шаблон (напр. {{.temp}}°C).\nзаголовок: Заголовок.\nприоритет: Важность (1-5).\nтеги: Эмодзи (напр. skull,warn).\nURL клика: Ссылка.\nURL иконки: Иконка.\nдействия (JSON): Кнопки.\nURL вложения: Файл.\nприкрепить файл (локальный путь): Загрузка файла.\nимя файла: Имя файла.\nID последовательности: ID обновления.\nзадержка: Задержка (напр. 10s, 1m, 1h).\nemail (переслать на): Электронная почта.\nзвонок (номер телефона): Телефон.\nОтключить управление кешем: Откл. кеш.\nОтключить Firebase: Откл. Firebase.\nUnifiedPush: UnifiedPush.\nШаблон: true/yes для inline или имя (напр. github) для предустановок.\nJSON данные: Объект данных для контекста шаблона.\nmarkdown: Markdown.",
    pt: "Envia notificação ntfy-client.\ntopic: Topic.\nmensagem: Texto ou string Go template (ex: {{.temp}}°C).\ntítulo: Título.\nprioridade: 1-5.\ntags: Emojis (ex: skull,warn).\nURL de clique: Link.\nURL do ícone: Ícone.\nações (JSON): Botões.\nURL de anexo: Link do arquivo.\nanexar ficheiro (caminho local): Enviar arquivo.\nnome do ficheiro: Nome do arquivo.\nID de sequência: ID atualização.\natraso: Atraso (ex: 10s, 1m, 1h).\nemail (encaminhar para): Encaminhar p/ email.\nchamada (número de telefone): Chamada telefônica.\nDesativar controle de cache: Sem cache.\nDesativar Firebase: Sem Firebase.\nUnifiedPush: UnifiedPush.\nTemplate: true/yes para inline ou nome (ex: github) para predefinições.\nDados JSON: Objeto de dados para o contexto do template.\nmarkdown: Markdown.",
    nl: "Verstuurt ntfy-client melding.\ntopic: Topic.\nbericht: Tekst of Go-template-string (bv. {{.temp}}°C).\ntitel: Kop.\nprioriteit: 1-5.\ntags: Emojis (bv. skull,warn).\nklik-URL: Link.\npictogram-URL: Icoon.\nacties (JSON): Acties.\nbijlage-URL: Bestandlink.\nbestand bijvoegen (lokaal pad): Upload bestand.\nbestandsnaam: Bestandsnaam.\nsequentie-ID: Update ID.\nvertraging: Vertraging (bv. 10s, 1m, 1h).\ne-mail (doorsturen naar): E-mail doorsturen.\nbellen (telefoonnummer): Bellen.\nCachebeheer uitschakelen: Geen cache.\nFirebase uitschakelen: Geen Firebase.\nUnifiedPush: UnifiedPush.\nTemplate: true/yes voor inline of naam (bv. github) voor voorinstellingen.\nJSON gegevens: Data-object voor de template-context.\nmarkdown: Markdown.",
    fr: "Envoie une notification ntfy-client.\ntopic: Topic.\nmessage: Texte ou chaîne Go template (ex: {{.temp}}°C).\ntitre: En-tête.\npriorité: 1-5.\ntags: Emojis (par ex. skull,warn).\nURL de clic: Lien.\nURL de l'icône: Icône.\nactions (JSON): Boutons.\nURL de pièce jointe: Lien fichier.\njoindre un fichier (chemin local): Upload fichier.\nnom du fichier: Nom du fichier.\nID de séquence: ID mise à jour.\ndélai: Délai (par ex. 10s, 1m, 1h).\nemail (transférer à): Faire suivre email.\nappel (numéro de téléphone): Appel.\nDésactiver le contrôle du cache: Pas de cache.\nDésactiver Firebase: Pas de Firebase.\nUnifiedPush: UnifiedPush.\nTemplate: true/yes pour inline ou nom (ex: github) pour prédéfinis.\ndonnées JSON: Objet de données pour le contexte du template.\nmarkdown: Markdown.",
    it: "Invia notifica ntfy-client.\ntopic: Topic.\nmessaggio: Testo o stringa Go template (es. {{.temp}}°C).\ntitolo: Intestazione.\npriorità: 1-5.\ntag: Emoji (es. skull,warn).\nURL clic: Link.\nURL icona: Icona.\nazioni (JSON): Pulsanti.\nURL allegato: Link file.\nallega file (percorso locale): Carica file.\nnome file: Nome file.\nID sequenza: ID aggiornamento.\nritardo: Ritardo (es. 10s, 1m, 1h).\nemail (inoltra a): Inoltra email.\nchiamata (numero di telefono): Chiamata.\nDisabilita controllo cache: No cache.\nDisabilita Firebase: No Firebase.\nUnifiedPush: UnifiedPush.\nTemplate: true/yes per inline o nome (es. github) per predefiniti.\ndati JSON: Oggetto dati per il contesto del template.\nmarkdown: Markdown.",
    es: "Envía notificación ntfy-client.\ntopic: Topic.\nmensaje: Texto o cadena Go template (ej. {{.temp}}°C).\ntítulo: Encabezado.\nprioridad: 1-5.\netiquetas: Emojis (ej. skull,warn).\nURL de clic: Enlace.\nURL del icono: Icono.\nacciones (JSON): Botones.\nURL de adjunto: Link archivo.\nadjuntar archivo (ruta local): Subir archivo.\nnombre de archivo: Nombre archivo.\nID de secuencia: ID actualización.\nretraso: Retraso (ej. 10s, 1m, 1h).\nemail (reenviar a): Reenviar email.\nllamada (número de teléfono): Llamada.\nDesactivar control de caché: Sin caché.\nDesactivar Firebase: Sin Firebase.\nUnifiedPush: UnifiedPush.\nPlantilla: true/yes para inline o nombre (ej. github) para predefinidas.\ndatos JSON: Objeto de datos para el contexto del template.\nmarkdown: Markdown.",
    pl: "Wysyła powiadomienie ntfy-client.\nTopik: Topik.\nwiadomość: Tekst lub ciąg Go template (np. {{.temp}}°C).\ntytuł: Nagłówek.\npriorytet: 1-5.\ntagi: Emoji (np. skull,warn).\nURL kliknięcia: Link.\nURL ikony: Ikona.\nakcje (JSON): Przyciski.\nURL załącznika: Link pliku.\ndołącz plik (ścieżka lokalna): Prześlij plik.\nnazwa pliku: Nazwa pliku.\nID sekwencji: ID aktualizacji.\nopóźnienie: Opóźnienie (np. 10s, 1m, 1h).\nemail (przekaż do): Przekaż e-mail.\npołączenie (numer telefonu): Połączenie.\nWyłącz kontrolę bufora: Brak bufora.\nWyłącz Firebase: Brak Firebase.\nUnifiedPush: UnifiedPush.\nSzablon: true/yes dla inline lub nazwa (np. github) dla predefiniowanych.\ndane JSON: Obiekt danych dla kontekstu szablonu.\nmarkdown: Markdown.",
    uk: "Надсилає ntfy-client повідомлення.\nТопик: Топик.\nповідомлення: Текст або Go-шаблон (напр. {{.temp}}°C).\nзаголовок: Заголовок.\nпріоритет: 1-5.\nтеги: Емодзі (напр. skull,warn).\nURL кліку: Посилання.\nURL іконки: Іконка.\nдії (JSON): Кнопки.\nURL вкладення: Файл.\nприкріпити файл (локальний шлях): Шлях файлу.\nім'я файлу: Ім'я файлу.\nID послідовності: ID оновлення.\nзатримка: Затримка (напр. 10s, 1m, 1h).\nemail (переслати на): Переслати пошту.\nдзвінок (номер телефону): Телефон.\nВимкнути керування кешем: Без кеша.\nВимкнути Firebase: Без Firebase.\nUnifiedPush: UnifiedPush.\nШаблон: true/yes для inline або назва (напр. github) для пресетів.\nJSON дані: Об'єкт даних для контексту шаблону.\nmarkdown: Markdown.",
    "zh-cn":
      "发送 ntfy-client 通知。\n主题：Topic。\n消息：文本或 Go 模板字符串（例：{{.temp}}°C）。\n标题：标题。\n优先级：1-5。\n标签：表情符号 (例: skull,warn)。\n点击链接：点击链接。\n图标链接：定制图标。\n操作 (JSON)：按钮。\n附件链接：附件链接。\n附加文件（本地路径）：本地文件。\n文件名：文件名。\n序列ID：更新ID。\n延迟：延迟 (例: 10s, 1m, 1h)。\n电子邮件（转发至）：转发邮件。\n电话（电话号码）：拨打电话。\n禁用缓存控制：禁用缓存。\n禁用 Firebase：禁用 Firebase。\nUnifiedPush：UnifiedPush。\n模板：true/yes 用于内联模板，或名称（例：github）用于预定义模板。\nJSON 数据：模板上下文的数据对象。\nmarkdown：Markdown。",
  };
  Blockly.Words["ntfy_manage_tooltip"] = {
    en: "Manage ntfy-client messages.\naction: mark as read and dismiss or delete.\ntopic: Topic.\nsequence ID: Unique ID of the message.",
    de: "ntfy-client Nachrichten verwalten.\nAktion: Als gelesen markieren und ausblenden oder löschen.\nTopic: Topic-Name.\nSequenz-ID: Eindeutige ID der Nachricht.",
    ru: "Управление ntfy-client.\nдействие: отметить как прочитанное и отклонить или удалить.\nТопик: Топик.\nID последовательности: ID сообщения.",
    pt: "Gerir mensagens ntfy-client.\nacção: marcar como lida e descartar ou eliminar.\ntopic: Topic.\nID de sequência: ID mensagem.",
    nl: "Beheer ntfy-client berichten.\nactie: markeren als gelezen en negeren of verwijderen.\ntopic: Topic.\nsequentie-ID: Bericht-ID.",
    fr: "Gérer les messages ntfy-client.\naction: marquer comme lu et ignorer ou supprimer.\ntopic: Topic.\nID de séquence: ID du message.",
    it: "Gestisci messaggi ntfy-client.\nazione: segna come letto e ignora o elimina.\ntopic: Topic.\nID sequenza: ID messaggio.",
    es: "Gestionar mensajes ntfy-client.\nacción: marcar como leído y descartar o eliminar.\ntopic: Topic.\nID de secuencia: ID mensaje.",
    pl: "Zarządzaj wiadomościami ntfy-client.\nakcja: oznacz jako przeczytane i odrzuć lub usuń.\nTopik: Topik.\nID sekwencji: ID wiadomości.",
    uk: "Керування ntfy-client.\nдія: позначити як прочитане та відхилити або видалити.\nТопик: Топик.\nID послідовності: ID повідомлення.",
    "zh-cn":
      "管理 ntfy-client 消息。\n行动：标记为已读并驳回或删除。\n主题：Topic。\n序列ID：消息ID。",
  };

  Blockly.Blocks["ntfy_mutator_container"] = {
    init: function () {
      this.appendDummyInput().appendField(
        Blockly.Words["ntfy_mutator_arguments"][systemLang],
      );
      this.appendStatementInput("STACK");
      this.setColour(Blockly.Sendto.HUE);
      this.setTooltip(Blockly.Words["ntfy_mutator_tooltip"][systemLang]);
      this.contextMenu = false;
    },
  };
  const ntfyMutatorOptions = [
    { key: "message", word: "ntfy_message" },
    { key: "topic", word: "ntfy_topic" },
    { key: "title", word: "ntfy_title" },
    { key: "priority", word: "ntfy_priority" },
    { key: "tags", word: "ntfy_tags" },
    { key: "icon", word: "ntfy_icon" },
    { key: "click", word: "ntfy_click" },
    { key: "actions", word: "ntfy_actions" },
    { key: "attach", word: "ntfy_attach" },
    { key: "attach_file", word: "ntfy_attach_file" },
    { key: "filename", word: "ntfy_filename" },
    { key: "sequence_id", word: "ntfy_sequence_id" },
    { key: "delay", word: "ntfy_delay" },
    { key: "email", word: "ntfy_email" },
    { key: "call", word: "ntfy_call" },
    { key: "template", word: "ntfy_template" },
    { key: "data", word: "ntfy_data" },
    { key: "cache", word: "ntfy_cache" },
    { key: "firebase", word: "ntfy_firebase" },
    { key: "unified_push", word: "ntfy_unifiedpush" },
    { key: "markdown", word: "ntfy_markdown" },
  ];

  const ntfyBooleanOptions = ["cache", "firebase", "unified_push", "markdown"];

  ntfyMutatorOptions.forEach(function (opt) {
    Blockly.Blocks[`ntfy_mutator_${opt.key}`] = {
      init: function () {
        this.appendDummyInput("ATTR").appendField(
          Blockly.Words[opt.word][systemLang],
        );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Sendto.HUE);
        this.setTooltip(Blockly.Words["ntfy_mutator_tooltip"][systemLang]);
        this.contextMenu = false;
      },
    };
  });

  Blockly.Sendto.blocks["ntfy"] =
    '<block type="ntfy">' +
    '  <mutation xmlns="http://www.w3.org/1999/xhtml" items="message,topic,title,priority"></mutation>' +
    '  <value name="message">' +
    '    <shadow type="text">' +
    '      <field name="TEXT"></field>' +
    "    </shadow>" +
    "  </value>" +
    '  <value name="topic">' +
    '    <shadow type="text">' +
    '      <field name="TEXT"></field>' +
    "    </shadow>" +
    "  </value>" +
    "</block>" +
    '<block type="ntfy_manage">' +
    '     <value name="TOPIC">' +
    '         <shadow type="text">' +
    '             <field name="TEXT"></field>' +
    "         </shadow>" +
    "     </value>" +
    '     <value name="SEQUENCE_ID">' +
    '         <shadow type="text">' +
    '             <field name="TEXT"></field>' +
    "         </shadow>" +
    "     </value>" +
    "</block>";

  Blockly.Blocks["ntfy"] = {
    init: function () {
      this.appendDummyInput("INSTANCE")
        .appendField(Blockly.Words["ntfy"][systemLang])
        .appendField(
          new Blockly.FieldDropdown(function () {
            if (typeof main !== "undefined" && main.instances) {
              var instances = main.instances;
              var result = [
                [Blockly.Words["ntfy_anyInstance"][systemLang], ""],
              ];
              for (var i = 0; i < instances.length; i++) {
                if (instances[i].startsWith("system.adapter.ntfy-client.")) {
                  var shortId = instances[i].replace("system.adapter.", "");
                  result.push([shortId, shortId]);
                }
              }
              return result.length > 1
                ? result
                : [[Blockly.Words["ntfy_anyInstance"][systemLang], ""]];
            }
            var options = [[Blockly.Words["ntfy_anyInstance"][systemLang], ""]];
            for (var j = 0; j < 10; j++) {
              options.push([`ntfy-client.${j}`, `ntfy-client.${j}`]);
            }
            return options;
          }),
          "INSTANCE",
        );

      this.appendDummyInput("LOG")
        .appendField(Blockly.Words["loglevel"][systemLang])
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Words["loglevel_none"][systemLang], ""],
            [Blockly.Words["loglevel_debug"][systemLang], "debug"],
            [Blockly.Words["loglevel_info"][systemLang], "info"],
            [Blockly.Words["loglevel_warn"][systemLang], "warn"],
            [Blockly.Words["loglevel_error"][systemLang], "error"],
          ]),
          "LOG",
        );

      this.appendDummyInput("WITH_STATEMENT")
        .appendField(Blockly.Words["with_results"][systemLang])
        .appendField(
          new Blockly.FieldCheckbox("FALSE", function (option) {
            const withStatement =
              option === true || option === "true" || option === "TRUE";
            this.sourceBlock_.updateShape_(withStatement);
          }),
          "WITH_STATEMENT",
        );

      // Set initial attributes
      this.attributes_ = ["message", "topic", "title", "priority"];

      this.updateMutator_();
      this.updateShape_();

      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Sendto.HUE);
      this.setTooltip(Blockly.Words["ntfy_tooltip"][systemLang]);
      this.setHelpUrl("https://ntfy.sh/docs/publish/");
    },

    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement("mutation");
      container.setAttribute("items", this.attributes_.join(","));
      const withStatement = this.getFieldValue("WITH_STATEMENT");
      container.setAttribute(
        "with_statement",
        withStatement === true ||
          withStatement === "true" ||
          withStatement === "TRUE",
      );
      return container;
    },

    domToMutation: function (xmlElement) {
      const items = xmlElement.getAttribute("items");
      this.attributes_ = items ? items.split(",") : [];
      let withStatement = xmlElement.getAttribute("with_statement");
      withStatement =
        withStatement === true ||
        withStatement === "true" ||
        withStatement === "TRUE";
      this.setFieldValue(withStatement ? "TRUE" : "FALSE", "WITH_STATEMENT");
      this.updateShape_(withStatement);
      this.updateMutator_();
    },

    decompose: function (workspace) {
      const containerBlock = workspace.newBlock("ntfy_mutator_container");
      containerBlock.initSvg();

      const maxBubbleHeight = Math.max(300, window.innerHeight * 0.45);

      let connection = containerBlock.getInput("STACK").connection;

      this.attributes_.forEach((attr) => {
        if (Blockly.Blocks[`ntfy_mutator_${attr}`]) {
          const itemBlock = workspace.newBlock(`ntfy_mutator_${attr}`);
          itemBlock.initSvg();
          connection.connect(itemBlock.previousConnection);
          connection = itemBlock.nextConnection;
        }
      });

      // Hack the flyout metrics so Blockly evaluates the bubble size SOLELY
      // on the mutator workspace, completely ignoring the blocks in the flyout.
      const flyout = workspace.getFlyout
        ? workspace.getFlyout()
        : workspace.flyout_;

      if (flyout && !flyout._ntfySquashed) {
        flyout._ntfySquashed = true;

        // Force getMetrics() to return 0 height for the flyout
        const overrideMetrics = (m) => {
          if (m) {
            m.contentHeight = 0;
            m.height = 0;
            m.viewHeight = 0;
          }
          return m;
        };
        if (typeof flyout.getMetrics_ === "function") {
          const orig = flyout.getMetrics_.bind(flyout);
          flyout.getMetrics_ = () => overrideMetrics(orig());
        } else if (typeof flyout.getMetrics === "function") {
          const orig = flyout.getMetrics.bind(flyout);
          flyout.getMetrics = () => overrideMetrics(orig());
        }

        // Force height_ property
        let realHeight = flyout.height_ || 0;
        try {
          Object.defineProperty(flyout, "height_", {
            get: () => 0,
            set: (val) => {
              realHeight = val;
            },
          });
        } catch (_e) {
          // ignore
        }
        flyout.getRealContentHeight = () => realHeight;

        // Force flyout's INTERNAL workspace to report 0 height bounds
        if (flyout.workspace_) {
          const fws = flyout.workspace_;
          if (typeof fws.getBlocksBoundingBox === "function") {
            const origBBox = fws.getBlocksBoundingBox.bind(fws);
            fws.getBlocksBoundingBox = function () {
              const b = origBBox();
              if (b) {
                b.bottom = b.top;
                b.height = 0;
              }
              return b;
            };
          }
          if (typeof fws.getMetrics === "function") {
            const origM = fws.getMetrics.bind(fws);
            fws.getMetrics = () => overrideMetrics(origM());
          }
        }

        // Force native getBBox() to return 0 height on the flyout SVG group
        // and workspace canvas.
        const squashBBox = (element) => {
          if (element && typeof element.getBBox === "function") {
            const origBBox = element.getBBox.bind(element);
            element.getBBox = function () {
              const b = origBBox();
              if (b) {
                return {
                  x: b.x,
                  y: b.y,
                  width: b.width,
                  height: 0,
                  top: b.y,
                  bottom: b.y,
                  left: b.x,
                  right: b.x + b.width,
                };
              }
              return b;
            };
          }
        };
        if (flyout.svgGroup_) {
          squashBBox(flyout.svgGroup_);
        }
        if (
          flyout.workspace_ &&
          typeof flyout.workspace_.getCanvas === "function"
        ) {
          squashBBox(flyout.workspace_.getCanvas());
        }
      }

      // Helper: Clip only the flyout SVG group visually and enable scrolling.
      const capBubbleAndScroll = () => {
        if (!flyout || !flyout.svgGroup_) {
          return;
        }

        // We use the Mutator workspace canvas height to determine the visual height.
        // Blockly created the bubble based on this height.
        const wsCanvas = workspace.getCanvas();
        let wsHeight = 0;
        if (wsCanvas && typeof wsCanvas.getBBox === "function") {
          wsHeight = wsCanvas.getBBox().height;
        }
        // Minimal acceptable height if workspace is empty
        const maxVisibleHeight = Math.max(150, wsHeight + 40);

        // 1) Visually clip ONLY the flyout group
        const svgGroup = flyout.svgGroup_;
        const ownerSvg = svgGroup.ownerSVGElement;
        if (ownerSvg) {
          let defs = ownerSvg.querySelector("defs");
          if (!defs) {
            defs = Blockly.utils.xml.createElement("defs");
            ownerSvg.insertBefore(defs, ownerSvg.firstChild);
          }
          let safeId = "mut";
          if (workspace.id) {
            safeId = workspace.id.replace(/[^a-zA-Z0-9]/g, "");
          }
          const clipId = `ntfy_flyout_clip_${safeId}`;
          let clipPath = defs.querySelector(`#${clipId}`);
          if (!clipPath) {
            clipPath = Blockly.utils.xml.createElement("clipPath");
            clipPath.setAttribute("id", clipId);
            const clipRect = Blockly.utils.xml.createElement("rect");
            // Flyout is positioned via transform, so 0,0 is its top-left
            clipRect.setAttribute("x", "0");
            clipRect.setAttribute("y", "0");
            // Give enough width that block shapes aren't clipped horizontally
            clipRect.setAttribute("width", "5000");
            clipPath.appendChild(clipRect);
            defs.appendChild(clipPath);
            svgGroup.setAttribute("clip-path", `url(#${clipId})`);
          }
          const clipRect = clipPath.querySelector("rect");
          if (clipRect) {
            clipRect.setAttribute("height", String(maxVisibleHeight));
          }
        }

        // 2) Attach Wheel Scroll Handler
        let contentHeight = 0;
        if (flyout.workspace_) {
          const topBlocks = flyout.workspace_.getTopBlocks(false);
          let maxY = 0;
          topBlocks.forEach((b) => {
            if (b && typeof b.getHeightWidth === "function") {
              const pos = b.getRelativeToSurfaceXY();
              const hw = b.getHeightWidth();
              const h = hw && hw.height > 0 ? hw.height : 45;
              maxY = Math.max(maxY, pos.y + h);
            }
          });
          if (maxY > 0) {
            contentHeight = maxY + 20; // 20px padding at bottom
          }
        }

        const maxScroll = Math.max(0, contentHeight - maxVisibleHeight);

        svgGroup._ntfyMaxScroll = maxScroll;
        svgGroup._ntfyScrollY = 0;
        const blockCanvas = svgGroup.querySelector(".blocklyBlockCanvas");
        if (blockCanvas) {
          blockCanvas.setAttribute("transform", "translate(0, 0) scale(1)");
        }

        // 3) Manage visual scrollbar
        // IMPORTANT: The scrollbar must be mounted OUTSIDE the clipped svgGroup,
        // otherwise our clip-path will hide it. We mount it to the parent SVG
        // and position it absolutely using the flyout group's transform.
        const svgNS = "http://www.w3.org/2000/svg";
        if (ownerSvg) {
          let sbGroup = ownerSvg.querySelector(".ntfy-scrollbar");
          if (maxScroll > 0) {
            let flyoutX = 0;
            let flyoutY = 0;
            const tf = svgGroup.getAttribute("transform") || "";
            const tMatch = tf.match(/translate\(\s*([-\d.]+)[,\s]+([-\d.]+)/);
            if (tMatch) {
              flyoutX = parseFloat(tMatch[1]);
              flyoutY = parseFloat(tMatch[2]);
            }
            const flyoutW = flyout.width_ || 200;

            if (!sbGroup) {
              sbGroup = document.createElementNS(svgNS, "g");
              sbGroup.setAttribute("class", "ntfy-scrollbar");

              const track = document.createElementNS(svgNS, "rect");
              track.setAttribute("class", "ntfy-scrollbar-track");
              track.setAttribute("x", "0");
              track.setAttribute("y", "0");
              track.setAttribute("width", "6");
              track.setAttribute("rx", "3");
              track.setAttribute("ry", "3");
              sbGroup.appendChild(track);

              const thumb = document.createElementNS(svgNS, "rect");
              thumb.setAttribute("class", "ntfy-scrollbar-thumb");
              thumb.setAttribute("x", "0");
              thumb.setAttribute("y", "0");
              thumb.setAttribute("width", "6");
              thumb.setAttribute("rx", "3");
              thumb.setAttribute("ry", "3");
              sbGroup.appendChild(thumb);

              ownerSvg.appendChild(sbGroup);

              // Live Theme Observer: Watch the flyout background for live style/fill changes
              if (flyout.svgBackground_) {
                const updateThemeColors = () => {
                  let isDarkLocal = false;
                  try {
                    const cFill = window.getComputedStyle(
                      flyout.svgBackground_,
                    ).fill;
                    const m = cFill.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/);
                    if (m) {
                      const brightness =
                        (parseInt(m[1], 10) * 299 +
                          parseInt(m[2], 10) * 587 +
                          parseInt(m[3], 10) * 114) /
                        1000;
                      isDarkLocal = brightness < 128;
                    }
                  } catch (e) {
                    isDarkLocal =
                      window.document.body &&
                      (window.document.body.classList.contains("dark") ||
                        window.document.body.getAttribute("data-theme") ===
                          "dark");
                  }

                  track.setAttribute(
                    "fill",
                    isDarkLocal ? "#ffffff" : "#000000",
                  );
                  track.setAttribute(
                    "fill-opacity",
                    isDarkLocal ? "0.2" : "0.12",
                  );
                  thumb.setAttribute(
                    "fill",
                    isDarkLocal ? "#ffffff" : "#000000",
                  );
                  thumb.setAttribute(
                    "fill-opacity",
                    isDarkLocal ? "0.6" : "0.45",
                  );
                };

                updateThemeColors();

                // Observe only the background SVG locally so it gc's cleanly when destroyed
                const obs = new MutationObserver(updateThemeColors);
                obs.observe(flyout.svgBackground_, {
                  attributes: true,
                  attributeFilter: ["fill", "style", "class"],
                });

                svgGroup._ntfyThemeObserver = obs;
              }
            }

            const track = sbGroup.querySelector(".ntfy-scrollbar-track");
            const thumb = sbGroup.querySelector(".ntfy-scrollbar-thumb");

            sbGroup.setAttribute(
              "transform",
              `translate(${flyoutX + flyoutW - 10}, ${flyoutY + 12})`,
            );

            const trackHeight = maxVisibleHeight - 24;
            track.setAttribute("height", String(trackHeight));

            const thumbHeight = Math.max(
              20,
              (maxVisibleHeight / contentHeight) * trackHeight,
            );
            thumb.setAttribute("height", String(thumbHeight));
            thumb.setAttribute("y", "0");

            svgGroup._ntfyThumb = thumb;
            svgGroup._ntfyTrackHeight = trackHeight;
            svgGroup._ntfyThumbHeight = thumbHeight;
          } else {
            if (sbGroup) {
              sbGroup.remove();
            }
            svgGroup._ntfyThumb = null;
          }
        }

        if (!svgGroup._ntfyWheelAttached) {
          svgGroup._ntfyWheelAttached = true;
          svgGroup.addEventListener(
            "wheel",
            (e) => {
              const max = svgGroup._ntfyMaxScroll || 0;
              if (max <= 0) {
                return;
              }
              e.preventDefault();
              e.stopPropagation();

              let scrollY = svgGroup._ntfyScrollY || 0;
              scrollY = Math.max(0, Math.min(max, scrollY + e.deltaY * 0.5));
              svgGroup._ntfyScrollY = scrollY;

              const bc = svgGroup.querySelector(".blocklyBlockCanvas");
              if (bc) {
                bc.setAttribute(
                  "transform",
                  `translate(0, ${-scrollY}) scale(1)`,
                );
              }

              if (svgGroup._ntfyThumb) {
                const thumbY =
                  (scrollY / max) *
                  (svgGroup._ntfyTrackHeight - svgGroup._ntfyThumbHeight);
                svgGroup._ntfyThumb.setAttribute("y", String(thumbY));
              }
            },
            { passive: false },
          );
        }
      };
      // Flyout Live-Update
      let lastAvailableBlocksStr = "";
      workspace.addChangeListener((e) => {
        if (
          e.type === Blockly.Events.BLOCK_CREATE ||
          e.type === Blockly.Events.BLOCK_DELETE ||
          e.type === Blockly.Events.BLOCK_MOVE ||
          e.type === Blockly.Events.BLOCK_CHANGE
        ) {
          const allBlocks = workspace.getAllBlocks(false);
          const usedTypes = allBlocks.map((b) => b.type);
          const availableBlocks = ntfyMutatorOptions
            .map((opt) => `ntfy_mutator_${opt.key}`)
            .filter((type) => !usedTypes.includes(type));

          const availStr = availableBlocks.join(",");

          const flyout = workspace.getFlyout
            ? workspace.getFlyout()
            : workspace.flyout_;

          if (flyout) {
            if (
              availStr !== lastAvailableBlocksStr &&
              typeof flyout.show === "function"
            ) {
              lastAvailableBlocksStr = availStr;
              const xmlList = availableBlocks.map((type) => {
                const block = Blockly.utils.xml.createElement("block");
                block.setAttribute("type", type);
                return block;
              });
              flyout.show(xmlList);
            }

            // Always update scroll/clip dimensions as workspace block positions may have changed.
            // But skip this evaluation if a block is currently in mid-air being actively dragged!
            // When picked up, the workspace canvas shrinks instantly, but the overall bubble frame
            // doesn't adjust until the block is dropped. Premature recalculation during drag breaks the layout.
            if (
              !document.querySelector(".blocklyDragging") &&
              (typeof Blockly.dragMode_ !== "number" || Blockly.dragMode_ === 0)
            ) {
              setTimeout(capBubbleAndScroll, 50);
            }
          }
        }
      });

      // Initial setup after Blockly finishes rendering
      setTimeout(capBubbleAndScroll, 300);

      return containerBlock;
    },

    compose: function (containerBlock) {
      const oldAttributes = [...this.attributes_];
      this.attributes_ = [];
      let itemBlock = containerBlock.getInputTargetBlock("STACK");
      const connections = {};

      while (itemBlock) {
        if (itemBlock.type.startsWith("ntfy_mutator_")) {
          const attrName = itemBlock.type.replace("ntfy_mutator_", "");
          if (!this.attributes_.includes(attrName)) {
            this.attributes_.push(attrName);
            connections[attrName] = itemBlock.valueConnection_;
          }
        }
        itemBlock =
          itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
      }

      // Disconnect connections of deleted attributes
      for (const attrName of oldAttributes) {
        if (!this.attributes_.includes(attrName)) {
          const input = this.getInput(attrName);
          if (input && input.connection && input.connection.targetConnection) {
            input.connection.targetConnection.disconnect();
          }
        }
      }

      this.updateShape_();
      this.updateMutator_();

      // Reconnect blocks
      for (const attrName of this.attributes_) {
        if (connections[attrName]) {
          const input = this.getInput(attrName);
          if (input && input.connection) {
            try {
              input.connection.connect(connections[attrName]);
            } catch (e) {
              // Connection might be incompatible, ignore
            }
          }
        }
      }
    },

    saveConnections: function (containerBlock) {
      let itemBlock = containerBlock.getInputTargetBlock("STACK");
      while (itemBlock) {
        if (itemBlock.type.startsWith("ntfy_mutator_")) {
          const attrName = itemBlock.type.replace("ntfy_mutator_", "");
          let input;
          try {
            input = this.getInput(attrName);
          } catch (e) {
            // ignore
          }

          itemBlock.valueConnection_ =
            input && input.connection && input.connection.targetConnection
              ? input.connection.targetConnection
              : null;
        }
        itemBlock = itemBlock.nextConnection?.targetBlock();
      }
    },

    updateMutator_: function () {
      const availableBlocks = ntfyMutatorOptions
        .filter((opt) => !this.attributes_.includes(opt.key))
        .map((opt) => `ntfy_mutator_${opt.key}`);

      if (!this.mutator) {
        this.setMutator(new Blockly.icons.MutatorIcon(availableBlocks, this));
      } else {
        this.mutator.blockTypes_ = availableBlocks;
        if (this.mutator.flyoutBlockTypes_) {
          this.mutator.flyoutBlockTypes_ = availableBlocks;
        }
      }
    },

    updateShape_: function (withStatement) {
      // 1. Delete all dynamic inputs that are NO LONGER in the attributes_ array
      const allPossibleKeys = ntfyMutatorOptions.map((o) => o.key);
      for (const key of allPossibleKeys) {
        if (!this.attributes_.includes(key) && this.getInput(key)) {
          this.removeInput(key);
        }
      }

      // 2. Generate (or update) required inputs
      for (const attrName of this.attributes_) {
        const opt = ntfyMutatorOptions.find((o) => o.key === attrName);
        if (!opt) {
          continue;
        }

        const isBoolean = ntfyBooleanOptions.includes(attrName);
        const isPriority = attrName === "priority";
        const fieldName = `FIELD_${attrName}`;
        const fieldText = Blockly.Words[opt.word][systemLang];

        let input = this.getInput(attrName);

        if (!input) {
          if (isBoolean) {
            input = this.appendDummyInput(attrName).setAlign(
              Blockly.ALIGN_RIGHT,
            );
            input
              .appendField(fieldText)
              .appendField(new Blockly.FieldCheckbox("FALSE"), fieldName);
          } else if (isPriority) {
            input = this.appendDummyInput(attrName).setAlign(
              Blockly.ALIGN_RIGHT,
            );
            input.appendField(fieldText).appendField(
              new Blockly.FieldDropdown([
                [Blockly.Words["ntfy_priority_default"][systemLang], "default"],
                [Blockly.Words["ntfy_priority_min"][systemLang], "1"],
                [Blockly.Words["ntfy_priority_low"][systemLang], "2"],
                [Blockly.Words["ntfy_priority_high"][systemLang], "4"],
                [Blockly.Words["ntfy_priority_max"][systemLang], "5"],
              ]),
              fieldName,
            );
          } else {
            input = this.appendValueInput(attrName).setAlign(
              Blockly.ALIGN_RIGHT,
            );
            input.appendField(fieldText);

            // Generate shadow blocks (text fields)
            setTimeout(
              (__input) => {
                if (
                  __input.connection &&
                  !__input.connection.isConnected() &&
                  this.workspace &&
                  this.getInput(attrName) === __input
                ) {
                  const _shadow = this.workspace.newBlock("text");
                  _shadow.setShadow(true);
                  _shadow.initSvg();
                  _shadow.render();
                  _shadow.outputConnection.connect(__input.connection);
                }
              },
              50,
              input,
            );
          }
        }

        // Force live sorting to match the mutator workspace!
        // By moving each block one after another to the end of the list,
        // we automatically create the identical sorting as in the mutator window.
        if (typeof this.moveInputBefore === "function") {
          try {
            this.moveInputBefore(attrName, null);
          } catch (e) {
            // If old Blockly versions reject null as refName
          }
        }
      }

      // Move LOG and WITH_STATEMENT to the end to keep them fixed at the bottom
      if (typeof this.moveInputBefore === "function") {
        try {
          this.moveInputBefore("LOG", null);
          this.moveInputBefore("WITH_STATEMENT", null);
        } catch (e) {
          // ignore
        }
      }

      if (withStatement === undefined) {
        withStatement = this.getFieldValue("WITH_STATEMENT");
        withStatement =
          withStatement === true ||
          withStatement === "true" ||
          withStatement === "TRUE";
      }

      try {
        if (this.getInput("STATEMENT")) {
          this.removeInput("STATEMENT");
        }
      } catch (e) {
        // if the input does not exist, it means that the block was deleted
      }

      // Add or remove a statement Input.
      if (withStatement) {
        this.appendStatementInput("STATEMENT");
      }
    },
  };

  Blockly.Blocks["ntfy_manage"] = {
    init: function () {
      this.appendDummyInput("INSTANCE")
        .appendField(Blockly.Words["ntfy_manage"][systemLang])
        .appendField(
          new Blockly.FieldDropdown(function () {
            if (typeof main !== "undefined" && main.instances) {
              var instances = main.instances;
              var result = [
                [Blockly.Words["ntfy_anyInstance"][systemLang], ""],
              ];
              for (var i = 0; i < instances.length; i++) {
                if (instances[i].startsWith("system.adapter.ntfy-client.")) {
                  var shortId = instances[i].replace("system.adapter.", "");
                  result.push([shortId, shortId]);
                }
              }
              return result.length > 1
                ? result
                : [[Blockly.Words["ntfy_anyInstance"][systemLang], ""]];
            }
            var options = [[Blockly.Words["ntfy_anyInstance"][systemLang], ""]];
            for (var j = 0; j < 10; j++) {
              options.push([`ntfy-client.${j}`, `ntfy-client.${j}`]);
            }
            return options;
          }),
          "INSTANCE",
        );

      this.appendDummyInput("ACTION_INPUT")
        .appendField(Blockly.Words["ntfy_action"][systemLang])
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Words["ntfy_action_clear"][systemLang], "clear"],
            [Blockly.Words["ntfy_action_delete"][systemLang], "delete"],
          ]),
          "ACTION",
        );

      this.appendDummyInput("LOG")
        .appendField(Blockly.Words["loglevel"][systemLang])
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Words["loglevel_none"][systemLang], ""],
            [Blockly.Words["loglevel_debug"][systemLang], "debug"],
            [Blockly.Words["loglevel_info"][systemLang], "info"],
            [Blockly.Words["loglevel_warn"][systemLang], "warn"],
            [Blockly.Words["loglevel_error"][systemLang], "error"],
          ]),
          "LOG",
        );

      this.appendValueInput("TOPIC")
        .setCheck("String")
        .appendField(Blockly.Words["ntfy_topic"][systemLang]);

      this.appendValueInput("SEQUENCE_ID")
        .setCheck("String")
        .appendField(Blockly.Words["ntfy_sequence_id"][systemLang]);

      this.appendDummyInput("WITH_STATEMENT")
        .appendField(Blockly.Words["with_results"][systemLang])
        .appendField(
          new Blockly.FieldCheckbox("FALSE", function (option) {
            const withStatement =
              option === true || option === "true" || option === "TRUE";
            this.sourceBlock_.updateShape_(withStatement);
          }),
          "WITH_STATEMENT",
        );

      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Sendto.HUE);
      this.setTooltip(Blockly.Words["ntfy_manage_tooltip"][systemLang]);
      this.setHelpUrl(
        "https://ntfy.sh/docs/publish/#updating-deleting-notifications",
      );
    },

    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement("mutation");
      const withStatement = this.getFieldValue("WITH_STATEMENT");
      container.setAttribute(
        "with_statement",
        withStatement === true ||
          withStatement === "true" ||
          withStatement === "TRUE",
      );
      return container;
    },

    domToMutation: function (xmlElement) {
      let withStatement = xmlElement.getAttribute("with_statement");
      withStatement =
        withStatement === true ||
        withStatement === "true" ||
        withStatement === "TRUE";
      this.setFieldValue(withStatement ? "TRUE" : "FALSE", "WITH_STATEMENT");
      this.updateShape_(withStatement);
    },

    updateShape_: function (withStatement) {
      if (withStatement === undefined) {
        withStatement = this.getFieldValue("WITH_STATEMENT");
        withStatement =
          withStatement === true ||
          withStatement === "true" ||
          withStatement === "TRUE";
      }

      // Move LOG and WITH_STATEMENT to the end to keep them fixed at the bottom
      if (typeof this.moveInputBefore === "function") {
        try {
          this.moveInputBefore("LOG", null);
          this.moveInputBefore("WITH_STATEMENT", null);
        } catch (e) {
          // ignore
        }
      }

      try {
        if (this.getInput("STATEMENT")) {
          this.removeInput("STATEMENT");
        }
      } catch (e) {
        // ignore
      }

      // Add or remove a statement Input.
      if (withStatement) {
        this.appendStatementInput("STATEMENT");
      }
    },
  };

  Blockly.JavaScript["ntfy_manage"] = function (block) {
    var dropdown_instance = block.getFieldValue("INSTANCE");
    var dropdown_action = block.getFieldValue("ACTION");
    var dropdown_log = block.getFieldValue("LOG");
    var value_topic = Blockly.JavaScript.valueToCode(
      block,
      "TOPIC",
      Blockly.JavaScript.ORDER_ATOMIC,
    );
    var value_sequence_id = Blockly.JavaScript.valueToCode(
      block,
      "SEQUENCE_ID",
      Blockly.JavaScript.ORDER_ATOMIC,
    );
    var fWithStatement = block.getFieldValue("WITH_STATEMENT");

    let statement = "";
    if (
      fWithStatement === true ||
      fWithStatement === "true" ||
      fWithStatement === "TRUE"
    ) {
      statement = Blockly.JavaScript.statementToCode(block, "STATEMENT");
    }

    var instance = dropdown_instance
      ? `"${dropdown_instance}"`
      : '"ntfy-client.0"';

    var objArr = [];
    objArr.push(`topic: ${value_topic}`);
    objArr.push(`sequence_id: ${value_sequence_id}`);

    let logParts = [];
    if (value_topic && value_topic !== "''" && value_topic !== '""') {
      logParts.push(`'topic: ' + ${value_topic}`);
    } else {
      logParts.push("'topic: (standard)'");
    }
    if (
      value_sequence_id &&
      value_sequence_id !== "''" &&
      value_sequence_id !== '""'
    ) {
      logParts.push(`'sequence_id: ' + ${value_sequence_id}`);
    }

    let logCode = "";
    if (dropdown_log) {
      const logStr = logParts.length
        ? logParts.join(' + ", " + ')
        : '"[no args]"';
      logCode = `console.${dropdown_log}('[' + ${instance} + '] ${dropdown_action} {' + ${logStr} + '}');\n`;
    }

    if (statement) {
      return `${logCode}sendTo(${instance}, "${dropdown_action}", {\n  ${objArr.join(",\n  ")}\n}, async (result) => {\n${
        statement
      }});\n`;
    }
    return `${logCode}sendTo(${instance}, "${dropdown_action}", {\n  ${objArr.join(",\n  ")}\n});\n`;
  };

  Blockly.JavaScript["ntfy"] = function (block) {
    const dropdown_instance = block.getFieldValue("INSTANCE");
    const dropdown_log = block.getFieldValue("LOG");
    const instance = dropdown_instance
      ? `"${dropdown_instance}"`
      : '"ntfy-client.0"';
    const fWithStatement = block.getFieldValue("WITH_STATEMENT");

    let statement = "";
    if (
      fWithStatement === true ||
      fWithStatement === "true" ||
      fWithStatement === "TRUE"
    ) {
      statement = Blockly.JavaScript.statementToCode(block, "STATEMENT");
    }

    const args = [];

    // Gather all dynamic mutator fields
    for (const attrName of block.attributes_) {
      let vArgument;

      if (ntfyBooleanOptions.includes(attrName)) {
        // Logic for checkboxes
        vArgument =
          block.getFieldValue(`FIELD_${attrName}`) === "TRUE"
            ? "true"
            : "false";

        // For cache and firebase we trigger "Disable", so we have to invert the boolean
        if (attrName === "cache" || attrName === "firebase") {
          vArgument = vArgument === "true" ? "false" : "true";
        }
      } else if (attrName === "priority") {
        // Logic for dropdown
        const prioVal = block.getFieldValue(`FIELD_${attrName}`);
        if (prioVal !== "default") {
          vArgument = `"${prioVal}"`;
        } else {
          continue; // Skip if default
        }
      } else {
        // Logic for value inputs (texts, variables)
        vArgument = Blockly.JavaScript.valueToCode(
          block,
          attrName,
          Blockly.JavaScript.ORDER_COMMA,
        );

        // Clean up enclosing single quotes from JSON strings
        if (
          vArgument &&
          vArgument.startsWith(`'{`) &&
          vArgument.endsWith(`}'`)
        ) {
          vArgument = vArgument.substring(1, vArgument.length - 1);
        }
      }

      // Only push if there is actually content
      if (
        vArgument &&
        vArgument !== "''" &&
        vArgument !== '""' &&
        vArgument !== "null"
      ) {
        args.push({
          attr: attrName.replaceAll(`'`, `\\'`),
          val: vArgument,
        });
      }
    }

    // Assemble code
    const argStr = args.length
      ? args
          .map((a) =>
            Blockly.JavaScript.prefixLines(
              `'${a.attr}': ${a.val},`,
              Blockly.JavaScript.INDENT,
            ),
          )
          .join("\n")
      : "";

    let logCode = "";
    if (dropdown_log) {
      const logArgs = [...args];
      // Check for message and topic placeholders
      if (!logArgs.find((a) => a.attr === "message")) {
        logArgs.unshift({ attr: "message", val: "'(triggered)'" });
      }
      if (!logArgs.find((a) => a.attr === "topic")) {
        logArgs.unshift({ attr: "topic", val: "'(standard)'" });
      }

      const logParts = logArgs
        .map((a) => `'${a.attr}: ' + ${a.val}`)
        .join(' + ", " + ');
      logCode = `console.${dropdown_log}('[' + ${instance} + '] send {' + ${logParts} + '}');\n`;
    }

    if (statement) {
      return `${logCode}sendTo(${instance}, "send", {\n${argStr}\n}, async (result) => {\n${
        statement
      }});\n`;
    }
    return `${logCode}sendTo(${instance}, "send", {\n${argStr}\n});\n`;
  };
}
