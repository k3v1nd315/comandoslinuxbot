var TelegramBot = require('node-telegram-bot-api');
var rules = require('./rules');
var token = '180505594:AAEpPbqxYqSt6xC4rBbZlKESr_WgOjBAHdY';
var bot = new TelegramBot(token, {polling: true});

bot.on('text', function(msg) {
  console.log(msg);
  var isGroup = !!(msg.chat.title);
  
  var chatId = msg.chat.id;
  var parse_modeHMTL = {
      parse_mode: 'HTML'
    };

  var parse_modeMarkdown = {
      parse_mode: 'Markdown'
   };
  
  if (msg.text.indexOf("/info_sistema") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[0].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[0].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/apagar") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[1].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[1].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/archivos_directorios") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[2].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[2].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/encontrar_archivos") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[3].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[3].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/montar_ficheros") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[4].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[4].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/espacio_disco") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[5].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[5].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/usuarios_grupos") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[6].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[6].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/permisos_ficheros") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[7].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[7].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/atributos_ficheros") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[8].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[8].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/archivos_comprimidos") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[9].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[9].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/paquetes_rpm") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[10].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[10].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/actualizar_yum") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[11].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[11].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/paquetes_deb") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[12].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[12].text, parse_modeHMTL);
  }
  
  if (msg.text.indexOf("/actualizar_apt") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[13].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[13].text, parse_modeHMTL);
  }
  if (msg.text.indexOf("/ver_fichero") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[14].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[14].text, parse_modeHMTL);
  }

  if (msg.text.indexOf("/manipulacion_texto") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[15].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[15].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/caracter_conversion_ficheros") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[16].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[16].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/analisis_sistema_ficheros") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[17].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[17].text, parse_modeMarkdown);
  }

   if (msg.text.indexOf("/format_sistema_ficheros") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[18].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[18].text, parse_modeMarkdown);
  }
   if (msg.text.indexOf("/swap") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[19].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[19].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/salvas") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[20].text, parse_modeHMTL);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[20].text, parse_modeHMTL);
  }
  if (msg.text.indexOf("/cd_rom") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[21].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[21].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/red") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[22].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[22].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/samba_windows") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[23].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[23].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/tablas_ip") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[24].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[24].text, parse_modeMarkdown);
  }

  if (msg.text.indexOf("/monitoreo") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[25].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[25].text, parse_modeMarkdown);
  }
  if (msg.text.indexOf("/otros_comandos") !== -1) {
    if (isGroup && msg.text.indexOf("@comandosLinuxBot") !== -1)
    bot.sendMessage(chatId, rules[26].text, parse_modeMarkdown);
    else if (!isGroup)
    bot.sendMessage(chatId, rules[26].text, parse_modeMarkdown);
  }
});
