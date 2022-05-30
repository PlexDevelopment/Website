---
id: permissions
title: Permissions
---

# Permissions
This page is a comprehensive list of all of Plex's permission nodes.

## Plex
| Command            | Permission                     | Description                                                                                     |
| ------------------ | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| adminchat          | plex.adminchat                 | Talk privately with other admins                                                                |
| adminworld         | plex.adminworld                | Teleport to the adminworld                                                                      |
| adventure          | plex.gamemode.adventure        | Set your own gamemode to adventure mode                                                         |
| adventure          | plex.gamemode.adventure.others | Set another player's gamemode to adventure mode                                                 |
| ban                | plex.ban                       | Bans a player, offline or online                                                                |
| blockedit          | plex.blockedit                 | Prevent players from modifying blocks                                                           |
| commandspy         | plex.commandspy                | Spy on other player's commands                                                                  |
| consolesay         | plex.consolesay                | Displays a message to everyone                                                                  |
| creative           | plex.gamemode.creative         | Set your own gamemode to creative mode                                                          |
| creative           | plex.gamemode.creative.others  | Set another player's gamemode to creative mode                                                  |
| debug              | plex.debug                     | Plex's debug command                                                                            |
| entitywipe         | plex.entitywipe                | Remove various server entities that may cause lag, such as dropped items, minecarts, and boats. |
| flatlands          | plex.flatlands                 | Teleport to the flatlands                                                                       |
| freeze             | plex.freeze                    | Freeze a player on the server                                                                   |
| kick               | plex.kick                      | Kicks a player                                                                                  |
| localspawn         | plex.localspawn                | Teleport to the spawnpoint of the world you are in                                              |
| lockup             | plex.lockup                    | Lockup a player on the server                                                                   |
| masterbuilderworld | plex.masterbuilderworld        | Teleport to the masterbuilderworld                                                              |
| mobpurge           | plex.mobpurge                  | Purge all mobs.                                                                                 |
| mute               | plex.mute                      | Mute a player on the server                                                                     |
| namehistory        | plex.namehistory               | Get the name history of a player                                                                |
| notes              | plex.notes                     | Manage notes for a player                                                                       |
| plex               | plex.redis                     | Tests your Redis database to ensure Plex can reach it                                           |
| plex               | plex.reload                    | Reload Plex                                                                                     |
| plex               | plex.modules.reload            | Reload Plex's modules                                                                           |
| punishments        | plex.punishments               | Opens the Punishments GUI                                                                       |
| rawsay             | plex.rawsay                    | Displays a message to everyone                                                                  |
| say                | plex.say                       | Displays a message to everyone                                                                  |
| smite              | plex.smite                     | Someone being a little bitch? Smite them down...                                                |
| spectator          | plex.gamemode.spectator        | Set your own gamemode to spectator mode                                                         |
| spectator          | plex.gamemode.spectator.others | Set another player's gamemode to spectator mode                                                 |
| survival           | plex.gamemode.survival         | Set your own gamemode to survival mode                                                          |
| survival           | plex.gamemode.survival.others  | Set another player's gamemode to survival mode                                                  |
| tag                | plex.tag                       | Set or clear your prefix                                                                        |
| tag                | plex.tag.clear.others          | Clear another player's prefix                                                                   |
| tempban            | plex.tempban                   | Temporarily ban a player                                                                        |
| toggle             | plex.toggle                    | Allows toggling various server aspects through a GUI                                            |
| unban              | plex.unban                     | Unbans a player, offline or online                                                              |
| unfreeze           | plex.unfreeze                  | Unfreeze a player                                                                               |
| unmute             | plex.unmute                    | Unmute a player                                                                                 |
| world              | plex.world                     | Teleport to a world.                                                                            |
|                    |                                |                                                                                                 |
| Enter adminworld   | plex.adminworld.enter          | Allows entering the adminworld                                                                  |                                                               |

## BukkitTelnet Module
| Permission              | Rank  | Description                                                 |
| ----------------------- | ----- | ----------------------------------------------------------- |
| plex.telnet.autoconnect | Admin | Allow automatically connecting to telnet without a password |

## Guilds Module
| Command       | Permission          | Rank | Description                                                   |
| ------------- | ------------------- | ---- | ------------------------------------------------------------- |
| guild         | plex.guilds.guild   | OP   | Guild menu                                                    |
| guild chat    | plex.guilds.chat    | OP   | Toggles guild chat or sends a guild chat message              |
| guild create  | plex.guilds.create  | OP   | Creates a guild with a specified name                         |
| guild home    | plex.guilds.home    | OP   | Teleports to the guild home                                   |
| guild info    | plex.guilds.info    | OP   | Shows the guild's information                                 |
| guild invite  | plex.guilds.invite  | OP   | Invites a player to the guild                                 |
| guild owner   | plex.guilds.owner   | OP   | Sets the guild owner                                          |
| guild prefix  | plex.guilds.prefix  | OP   | Sets the guild's default prefix                               |
| guild sethome | plex.guilds.sethome | OP   | Sets the guild's home                                         |
| guild setwarp | plex.guilds.setwarp | OP   | Creates a new warp at player's location with a specified name |
| guild warps   | plex.guilds.warps   | OP   | Displays a clickable list of warps                            |
| guild warp    | plex.guild.warp     | OP   | Warps to a specified guild warp                               |

## HTTPD Module
| Permission                    | Rank  | Description                                                                                   |
| ----------------------------- | ----- | --------------------------------------------------------------------------------------------- |
| plex.httpd.admins.access      | Admin | Allows seeing IP addresses of admins. Anyone can view the page regardless of permissions      |
| plex.httpd.indefbans.access   | Admin | Allows accessing the indefinite bans. This permission is required to view the page at all.    |
| plex.httpd.punishments.access | Admin | Allows seeing IP addresses of punishments. Anyone can view the page regardless of permissions |
| plex.httpd.schematics.upload  | Admin | Allows uploading schematics to the HTTPD if the permission system is enabled.                 |

## LibsDisguises Module
| Command        | Permission                        | Rank  | Description                                                                                     |
| -------------- | --------------------------------- | ----- | ----------------------------------------------------------------------------------------------- |
| disguisetoggle | plex.libsdisguises.disguisetoggle | Admin | Toggle LibsDisguises                                                                            |
| undisguiseall  | plex.libsdisguises.undisguiseall  | Admin | Undisguise all players                                                                          |
| undisguiseall  | plex.libsdisguises.bypass         | Admin | Bypass being undisguised. This can be overridden regardless of permission with the \`-a\` flag. |

## NUSH Module
| Command | Permission        | Rank  | Description            |
| ------- | ----------------- | ----- | ---------------------- |
| nush    | plex.nush.command | Admin | Toggle NUSH on or off. |