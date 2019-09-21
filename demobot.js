const Discord = require('discord.js');
const ayarlarsettings = require('./ayarlarsettings.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Çalıştıram mı la botu?`);
  console.log(`*bot çalıştırma sesleri*`);
  console.log(`Heh, ${client.user.tag} diye bi' botu çalıştırdım sonunda!`);
  client.user.setStatus("idle");
  console.log(`Botun durumunu (status) boşta (idle) yapıyom.`);
  console.log(`Kuul gözüksün.`);
  console.log(`Bide izliyoru yapam.`);
  client.user.setActivity("Siz ne isterseniz o!", {type: "WATCHING"} );
  console.log(`Tamamdııır.`);
  console.log(`Botun hazır. Al bakalım! *gerçi bütün mesajları ben yazdım her şeyide ben yaptım buda hava atıyo*`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@566903440891183124>') {
    msg.channel.sendMessage('Ve Aleyküm Selam " msg.author.username ". Nasılsın, iyi misin? Umarım iyisindir.');
  }
});

client.login(ayarlarsettings.anahtarimiss);
