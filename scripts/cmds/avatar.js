const Deku = require("dekuai");
const deku = new Deku();
const fs = require("fs");
module.exports = {
  config: {
    name: "avatar",
    version: "1.0",
    author: "Deku",
    countDown: 1,
    role: 0,
    shortDescription: "Create anime profile",
    longDescription: "",
    category: "image",
    guide: {
      en: "{p}{n} signature | bgtext | char id | color",
    }
  },
    onStart: async function ({ api, event, args }) {
    function reply(msg) {
      api.sendMessage(msg, event.threadID, event.messageID);
    }
    try {
      const t = args['join'](" ");
      const path = __dirname + "/cache/profile.png";
      let fmt =
        "Wrong Format\nUse: " + this.config.guide.en;
      if (!t) return reply(fmt);
      const k = t.split(" | ");
      const signature = k[0],
        bgname = k[1],
        id = k[2],
        color = k[3];
      if (!signature || !bgname || !id || !color) return reply(fmt);
      reply("Generating the image...");
      const pfp = await deku['profile'](id, bgname, signature, color);
      fs['writeFileSync'](path, pfp);
      let msg = {
        body: `Background text: ${bgname}\nSignature: ${signature}\nCharacter ID: ${id}\nColor: ${color}`,
        attachment: fs['createReadStream'](path),
      };
      return reply(msg);
    } catch (err) {
      return reply("Error: " + err.message);
    }
  },
};
