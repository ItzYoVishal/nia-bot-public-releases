const Discord = require("discord.js");
const client = new Discord.Client();
const loading = "<a:loading:667651568975347722>"
const AmeClient = require("amethyste-api");
var AmeAPI = new AmeClient("your-amethyste-api-token-here")
const { prefix, token, ownerID } = require("./config.json");
const fs = require('fs');
const userID = 'your-user-id'
const DBL = require('dblapi.js');
const dbl = new DBL("your-dbl-token-here", { webhookPort: 5000, webhookAuth: 'a-password-here' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("your-status", { type: "Streaming" });
  
  
  
  client.on("message", async message => {
    if (message.content.startsWith(`${prefix}3000years`)) {
      let user = message.mentions.users.first() || message.author;
      let m = message.channel.send("Loading...").then(m => m.delete(3000));
      let buffer = await AmeAPI.generate("3000years", { url: user.displayAvatarURL })//.then(image => message.channel.send(Image));
      message.channel.send({
        files: [{
          attachment: buffer,
          name: 'file.jpg'
        }]
      })
    }
  })
  
  client.on("message", async message => {
if (message.content.startsWith(`${prefix}dictator`)) {
      let user = message.mentions.users.first() || message.author;
      let m = message.channel.send("Loading...").then(m => m.delete(3000));
      let buffer = await AmeAPI.generate("dictator", { url: user.displayAvatarURL })//.then(image => message.channel.send(Image));
      message.channel.send({
        files: [{
          attachment: buffer,
          name: 'file.jpg'
        }]
      })
    }
})
  
  client.on("message", async message => {
if (message.content.startsWith(`${prefix}rip`)) {
      let user = message.mentions.users.first() || message.author;
      let m = message.channel.send("Loading...").then(m => m.delete(3000));
      let buffer = await AmeAPI.generate("rip", { url: user.displayAvatarURL })//.then(image => message.channel.send(Image));
      message.channel.send({
        files: [{
          attachment: buffer,
          name: 'file.jpg'
        }]
      })
}
  })
  
  client.on("message", async message => {
if (message.content.startsWith(`${prefix}scary`)) {
      let user = message.mentions.users.first() || message.author;
      let m = message.channel.send("Loading...").then(m => m.delete(3000));
      let buffer = await AmeAPI.generate("scary", { url: user.displayAvatarURL })//.then(image => message.channel.send(Image));
      message.channel.send({
        files: [{
          attachment: buffer,
          name: 'file.jpg'
        }]
      })
    }
})
          
  client.on("message", async message => {
if (message.content.startsWith(`${prefix}jail`)) {
      let user = message.mentions.users.first() || message.author;
      let m = message.channel.send("Loading...").then(m => m.delete(3000));
      let buffer = await AmeAPI.generate("jail", { url: user.displayAvatarURL })//.then(image => message.channel.send(Image));
      message.channel.send({
        files: [{
          attachment: buffer,
          name: 'file.jpg'
        }]
      })
    }
})
  
       
  client.on("message", async message => {
if (message.content.startsWith(`${prefix}fire`)) {
      let user = message.mentions.users.first() || message.author;
      let m = message.channel.send("Loading...").then(m => m.delete(3000));
      let buffer = await AmeAPI.generate("fire", { url: user.displayAvatarURL })//.then(image => message.channel.send(Image));
      message.channel.send({
        files: [{
          attachment: buffer,
          name: 'file.jpg'
        }]
      })
    }
})

  
  client.on("message", message => {
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   else if (command === "avatar") {
      if (!message.mentions.users.size) {
        return message.channel.send(
          `Your avatar: <${message.author.displayAvatarURL}>`
        );
      }

      const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
      });

      // send the entire array of strings as a message
      // by default, discord.js will `.join()` the array with `\n`
      message.channel.send(avatarList);
    } else if (command === "purge") {
      const amount = parseInt(args[0]) + 1;

      if (isNaN(amount)) {
        return message.reply("that doesn't seem to be a valid number.");
      } else if (amount <= 1 || amount > 100) {
        return message.reply("you need to input a number between 1 and 100.");
      }
      message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send(
          "there was an error trying to prune messages in this channel!"
        );
      });
      // ...
    }

    if (message.content.startsWith(`${prefix}ping`)) {
      message.channel.send("Pong " + `${Math.round(client.ping)}ms`);
    } else if (message.content.startsWith(`${prefix}beep`)) {
      message.channel.send("Boop.");
    } else if (message.content === `${prefix}server`) {
      message.channel.send(
        `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`
      );
    } else if (message.content === `${prefix}user-info`) {
      message.channel.send(
        `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
      );
    } else if (message.content.startsWith(`${prefix}warn`)) {
      let dUser =
        message.guild.member(message.mentions.users.first()) ||
        message.guild.members.get(args[0]);
      if (!dUser) return message.channel.send("Can't find user!");
      if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("You can't you that command!");
      let dMessage = args.join(" ").slice(22);
      if (dMessage.length < 1)
        return message.reply("You must supply a reason!");
      dUser.send(
        `${dUser} you were warned for: ${dMessage} in the server ${message.guild.name}`
      );
      message.channel.send(`${dUser} was warned!`);
      //message.author.send(`${message.author} You have sent your message to ${dUser}`)
    }
    
  });
  
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
  }
  
  client.on("message", message => {
  const args = message.content.split(" ").slice(1);
 
  if (message.content.startsWith((`${prefix}`) + "eval")) {
    if(message.author.id !== ('518731387591720961')) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});


  client.on("message", message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
    let logchannel = message.guild.channels.find(
      channel => channel.name == "bot-logs"
    );
    // If the message content starts with "!kick"
    if (message.content.startsWith(`${prefix}kick`)) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick("Optional reason that will display in the audit logs")
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Successfully kicked ${user.tag}`);
              const embed = new Discord.RichEmbed()
                .setColor("0xFF0000")
                .setTimestamp()
                .addField("Action:", "Kick")
                .addField("User:", `${user.tag} (${user.id})`)
                .addField("Moderator:", `${message.author.tag}`);

              message.channel.send(
                `:hammer: Bippity boppity **Kicked!**! I\'ve logged it in the logs channel.`
              );
              return logchannel.send(embed);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply("I was unable to kick the member");
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }
  });
  client.on("message", message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
    let logchannel = message.guild.channels.find(
      channel => channel.name == "bot-logs"
    );
    // if the message content starts with "!ban"
    if (message.content.startsWith(`${prefix}ban`)) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member
            .ban({
              reason: "They were bad!"
            })
            .then(() => {
              // We let the message author know we were able to ban the person
              message.reply(`Successfully banned ${user.tag}`);
              const embed = new Discord.RichEmbed()
                .setColor("0xFF0000")
                .setTimestamp()
                .addField("Action:", "ban")
                .addField("User:", `${user.tag} (${user.id})`)
                .addField("Moderator:", `${message.author.tag}`);

              message.channel.send(
                `:hammer: Bippity boppity **BANNED**! I\'ve logged the ban in the logs channel.`
              );
              return logchannel.send(embed);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to ban the member,
              // either due to missing permissions or role hierarchy
              message.reply("I was unable to ban the member");
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
      } else {
        // Otherwise, if no user was mentioned
        message.reply("You didn't mention the user to ban!");
      }
    }
  });
  
  client.on("message", message => {
    if (message.content.startsWith(`${prefix}mute`)) {
      const args = message.content.slice(prefix.length).split(" ");
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(" ");
      let logchannel = message.guild.channels.find(
      channel => channel.name == "bot-logs"
    );
      let role = message.guild.roles.find("name", "Muted");
      //CHANGE THIS ^^

      if (!logchannel) return message.reply("I cannot find a logs channel");
      if (!message.member.hasPermission("MUTE_MEMBERS"))
        return message.reply(
          ":no_entry_sign: **Error:** You don't have the **Mute Members** permission!"
        );
      if (reason.length < 1)
        return message.reply("You must supply a reason for the mute.");
      if (message.mentions.users.size < 1)
        return message
          .reply("You must mention someone to mute them.")
          .catch(console.error);

      if (message.guild.member(user).roles.has(role))
        return message.reply(`:no_entry_sign: I cannot mute that member`);
      message.guild.member(user).addRole(role);
      

      const embed = new Discord.RichEmbed()
        .setColor("0xFF0000")
        .setTimestamp()
        .addField("Action:", "mute")
        .addField("User:", `${user.tag} (${user.id})`)
        .addField("Moderator:", `${message.author.tag}`)
        .addField("Reason", reason);
      message.channel.send(
        `:hammer: Bippity boppity **MUTED**! I\'ve logged the mute in the logs channel.`
      );
      return logchannel.send(embed);
    }
  });
  client.on("message", message => {
    if (message.content.startsWith(`${prefix}unmute`)) {
      const args = message.content.slice(prefix.length).split(" ");
      let user = message.mentions.users.first();
      let reason = args.slice(1).join(" ");
      let logchannel = message.guild.channels.find(
      channel => channel.name == "bot-logs"
    );
      let role = message.guild.roles.find("name", "Muted");
      //CHANGE THIS ^^

      if (!logchannel) return message.reply("I cannot find a logs channel");
      if (!message.member.hasPermission("MUTE_MEMBERS"))
        return message.reply(
          ":no_entry_sign: **Error:** You don't have the **UnMute Members** permission!"
        );
      if (reason.length < 1)
        return message.reply("You must supply a reason for the mute.");
      if (message.mentions.users.size < 1)
        return message
          .reply("You must mention someone to unmute them.")
          .catch(console.error);

      if (message.guild.member(user).roles.has(role))
        return message.reply(`:no_entry_sign: I cannot unmute that member`);
      message.guild.member(user).removeRole(role);

      const embed = new Discord.RichEmbed()
        .setColor("0xFF0000")
        .setTimestamp()
        .addField("Action:", "mute")
        .addField("User:", `${user.tag} (${user.id})`)
        .addField("Moderator:", `${message.author.tag}`)
        .addField("Reason", reason);
      message.channel.send(
        `:hammer: Bippity boppity **UNMUTED**! I\'ve logged the mute in the logs channel.`
      );
      return logchannel.send(embed);
    }
  });
 
});



client.login(token);
