---
id: permissions
title: Permissions
---

# Permissions
This page is a comprehensive list of all of Plex's permission nodes. Note that some of them (such as world entry and modification) are defined by the server config and may vary.

## Plex
| Command             | Permission                     | Rank         | Description                                                                                     |
| ------------------- | ------------------------------ | ------------ | ----------------------------------------------------------------------------------------------- |
| adminchat           | plex.adminchat                 | Admin        | Talk privately with other admins                                                                |
| admin               | N/A                            | OP           | Manage all admins                                                                               |
| adminworld          | plex.adminworld                | Admin        | Teleport to the adminworld                                                                      |
| adventure           | plex.gamemode.adventure        | OP           | Set your own gamemode to adventure mode                                                         |
| adventure           | plex.gamemode.adventure.others | Admin        | Set another player's gamemode to adventure mode                                                 |
| ban                 | plex.ban                       | Admin        | Bans a player, offline or online                                                                |
| blockedit           | plex.blockedit                 | Admin        | Prevent players from modifying blocks                                                           |
| commandspy          | plex.commandspy                | Admin        | Spy on other player's commands                                                                  |
| consolesay          | plex.consolesay                | Admin        | Displays a message to everyone                                                                  |
| creative            | plex.gamemode.creative         | OP           | Set your own gamemode to creative mode                                                          |
| creative            | plex.gamemode.creative.others  | Admin        | Set another player's gamemode to creative mode                                                  |
| pdebug              | plex.debug                     | Executive    | Plex's debug command                                                                            |
| deopall             | N/A                            | Admin        | Deop everyone on the server                                                                     |
| deop                | N/A                            | Admin        | Deop a player on the server                                                                     |
| entitywipe          | plex.entitywipe                | Admin        | Remove various server entities that may cause lag, such as dropped items, minecarts, and boats. |
| flatlands           | plex.flatlands                 | OP           | Teleport to the flatlands                                                                       |
| freeze              | plex.freeze                    | Admin        | Freeze a player on the server                                                                   |
| kick                | plex.kick                      | Admin        | Kicks a player                                                                                  |
| localspawn          | plex.localspawn                | OP           | Teleport to the spawnpoint of the world you are in                                              |
| lockup              | plex.lockup                    | Admin        | Lockup a player on the server                                                                   |
| masterbuilderworld  | plex.masterbuilderworld        | OP           | Teleport to the masterbuilderworld                                                              |
| mobpurge            | plex.mobpurge                  | Admin        | Purge all mobs.                                                                                 |
| mute                | plex.mute                      | OP           | Mute a player on the server                                                                     |
| namehistory         | plex.namehistory               | OP           | Get the name history of a player                                                                |
| notes               | plex.notes                     | Admin        | Manage notes for a player                                                                       |
| opall               | N/A                            | Admin        | Op everyone on the server                                                                       |
| op                  | N/A                            | OP           | Op a player on the server                                                                       |
| plex                | N/A                            | Impostor     | Show information about Plex                                                                     |
| plex redis          | plex.redis                     | Senior Admin | Tests your Redis database to ensure Plex can reach it                                           |
| plex reload         | plex.reload                    | Senior Admin | Reload Plex                                                                                     |
| plex modules reload | plex.modules.reload            | Executive    | Reload Plex's modules                                                                           |
| punishments         | plex.punishments               | Admin        | Opens the Punishments GUI                                                                       |
| rank                | N/A                            | OP           | Displays your rank                                                                              |
| rawsay              | plex.rawsay                    | Senior Admin | Displays a message to everyone                                                                  |
| say                 | plex.say                       | Admin        | Displays a message to everyone                                                                  |
| smite               | plex.smite                     | Admin        | Someone being a little bitch? Smite them down...                                                |
| spectator           | plex.gamemode.spectator        | OP           | Set your own gamemode to spectator mode                                                         |
| spectator           | plex.gamemode.spectator.others | Admin        | Set another player's gamemode to spectator mode                                                 |
| survival            | plex.gamemode.survival         | OP           | Set your own gamemode to survival mode                                                          |
| survival            | plex.gamemode.survival.others  | Admin        | Set another player's gamemode to survival mode                                                  |
| tag                 | plex.tag                       | OP           | Set or clear your prefix                                                                        |
| tag                 | plex.tag.clear.others          | Admin        | Clear another player's prefix                                                                   |
| tempban             | plex.tempban                   | Admin        | Temporarily ban a player                                                                        |
| totalfreedommod     | N/A                            | OP           | You can't simpy do that.                                                                        |
| toggle              | plex.toggle                    | Admin        | Allows toggling various server aspects through a GUI                                            |
| unban               | plex.unban                     | Admin        | Unbans a player, offline or online                                                              |
| unfreeze            | plex.unfreeze                  | Admin        | Unfreeze a player                                                                               |
| unmute              | plex.unmute                    | Admin        | Unmute a player                                                                                 |
| world               | plex.world                     | OP           | Teleport to a world.                                                                            |

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
