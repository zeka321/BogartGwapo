const commandInfoMap = {
  ai: {
    name: "ai",
    description: "Ai Based on GPT-4",
    guide: "-ai what is life?"
    },
  tempmail: {
    name: "tempmail",
    description: "Get Temporary Emails and it's Inbox messages",
    guide: "-tempmail create\n-tempmail inbox <email>"
  },
  alldl: {
    name: "alldl",
    description: "download video content using link from Facebook, Instagram, Tiktok, Youtube, Twitter, and Spotify audio",
    guide: "-alldl [link]"
  },
animagine: {
    name: "animagine",
    description: "makes an animated image based on your imagination",
    guide: "-animagine cat with wings"
    },
  translate: {
    name: "translate",
    description: "Translate to any languages",
    guide: "Reply to text you want to translate and type \n-translate <language>"
  },
  pinterest: {
    name: "pinterest",
    description: "Searches Images in Pinterest ",
    guide: "-pinterest cat -10"
  },
  dalle: {
    name: "dalle",
    description: "make images through texts",
    guide: "-dalle cat in a hoodie"
  },
  remini: {
    name: "remini",
    description: "enhances your image to lessen the blur",
    guide: "reply to image and type -remini"
  },
  lyrics: {
    name: "lyrics",
    description: "Fetches lyrics of a song",
    guide: "-lyrics perfect by ed sheeran"
  },
  help: {
    name: "help",
    description: "View all commands",
    guide: "-help\n-help <command name>"
  },
  prefix: {
    name: "prefix",
    description: "view some commands and shows bot's prefix",
    guide: "prefix"
  },
  uptime: {
    name: "uptime",
    description: "See how long the bot has been running.",
    guide: "-uptime"
  },
  unsend: {
    name: "unsend",
    description: "deletes bot messages",
    guide: "reply to bot message and type -unsend"
  },
  TruthorDare: {
    name: "TruthorDare",
    description: "This command allows \n| users to play the Truth or Dare game.",
    guide: "To play the Truth or Dare game, use the command '{pn} truth' for a truth question or '{pn} dare' for a dare challenge."
  },
 acp: {
    name: "acp",
    description: "accept users",
    guide: "accept users"
  },
};

module.exports = {
  config: {
    name: "help",
    aliases: ["help"],
    version: 1.0,
    author: "LiANE&Coffee",
    shortDescription: { en: "View all commands" },
    category: "members",
  },
  onStart: async function({ message, args }) {
    if (args[0]) {
      const command = args[0].toLowerCase();
      if (commandInfoMap[command]) {
        const { name, description, guide } = commandInfoMap[command];
        const response = `━━━━━━━━━━━━━━━━\n𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙽𝚊𝚖𝚎: ${name}\n𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}\n𝙶𝚞𝚒𝚍𝚎: ${guide}\n━━━━━━━━━━━━━━━━`;
        return message.reply(response);
      } else {
        return message.reply("Command not found.");
      }
    } else {
      const commandsList = `━━━━━━━━━━━━━━━━
𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:
╭─╼━━━━━━━━╾─╮
│ 📚 | Education 
│ - Ai 
│ - Chesca
│ - Google 
│ - Googleit
│ - Gpt4
│ - History 
│ - Neuron 
│ - Professor Ai 
│ - Quote 
│ - Translate 
│ - Calculate 
│ - Meta3
│ - Catgpt
│ - Claude
│ - Gemma
│ - Hercai
│ - Weather
│ - News
│ - Gpt
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│  🛠️ | Tools
│ - Acp
│ - Alldl 
│ - Autosetname
│ - Convert
│ - Fbacc
│ - Fbshare
│ - Filteruser
│ - Imgur
│ - Manga
│ - Movie
│ - Pair
│ - Resend
│ - Tempmail 
│ - Ban
│ - Banlist
│ - Block
│ - Botgc
│ - Ccdl
│ - Grouptag
│ - Pair
│ - Owner
│ - Clean
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│ 🎮 | Games 
│ - TruthorDare
│ - Memorytest
│ - Quiz
│ - Slot
│ - Coinflip
│ - Codm
│ - Candycrush
│ - Guessword
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│ 📸 | Images 
│ - Animagine
│ - Cdp
│ - Dalle
│ - Remini
│ - Image
│ - Pinterest 
│ - Imgsearch
│ - Coupledp
│ - Cover
│ - Cry
│ - Randomedit
│ - Sdxl
│ - Fbcover
│ - Avatar
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│ 📢 | Admin 
│ - Adc
│ - Adminboxonly
│ - Catchpastebin 
│ - Fbpost
│ - Getfbstate
│ - Kick
│ - Kickall
│ - Bio
│ - Monitor 
│ - Notification 
│ - Restart
│ - Rules
│ - Update
│ - Uptime
│ - File
│ - Sendnoti2
│ - Callad
│ - Getfbstate 
│ - Hack
│ - Notification 
│ - Join
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│ 🎧 | Music
│ - Lyrics 
│ - Shoti
│ - Spotify
│ - Youtube
│ - Chords
│ - Randomvideo
│ - Tik
│ - Tiksearch
│ - Reels
│ - Playlist
│ - Autolink
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│ 🔞 | SPG
│ - Pornhub
│ - Buttslap
│ - Pantieclose
│ - Condom
╰─━━━━━━━━━╾─╯

╭─╼━━━━━━━━╾─╮
│ 👥 | Members 
│ - Adduser
│ - Autoseen
│ - Cmd
│ - Fbstalk
│ - Goatmart
│ - Hello
│ - Help 
│ - Instastalk
│ - Leave
│ - Married 
│ - Membercount
│ - Pm
│ - Rip
│ - Say
│ - Uid
│ - Unsend
│ - Bank
│ - Balance
│ - Botsay
│ - Crush
│ - Delete
│ - Event
│ - Font
│ - Listbox
│ - Love
│ - Married
│ - Hug 
│ - Profile 
│ - Rank
│ - Rankup
│ - Shell
│ - Wanted
│ - Wifey
│ - Work
│ - Edit
│ - Besh
│ - Prefix 
│ - Unsend 
╰─━━━━━━━━━╾─╯
-𝚑𝚎𝚕𝚙 <𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚗𝚊𝚖𝚎>
𝚃𝚘 𝚜𝚎𝚎 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎
𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜.

Example: -help ai
━━━━━━━━━━━━━━━━`;

      return message.reply(commandsList);
    }
  }
};
