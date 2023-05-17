const { ActivityType } = require("discord.js");
const { STATUS, ACTIVITY_NAME } = require(".././config.json");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`[✅] Ready! Logged in as ${client.user.tag}`);
    console.log(
      `[✅] ${client.user.tag} is on ${client.guilds.cache.size} servers!`
    );
    client.user.setPresence({
      activities: [{ name: ACTIVITY_NAME, type: ActivityType.Playing }],
      status: STATUS,
    });
  },
};
