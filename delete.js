const { REST, Routes } = require("discord.js");
const { CLIENT_ID, TOKEN } = require("./discordslashbot/config.json");

const rest = new REST({ version: "10" }).setToken(TOKEN);

// for global commands
rest
  .put(Routes.applicationCommands(CLIENT_ID), { body: [] })
  .then(() =>
    console.log("[⚙️] Successfully deleted all application commands.")
  )
  .catch(console.error);
