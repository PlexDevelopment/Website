---
id: permissions
title: Permissions
---

# Permissions
This page is a comprehensive list of all of Plex's permission nodes. Note that some of them (such as world entry and modification) are defined by the server config and may vary.

## Plex
| Command             | Permission                     | Description                                                                                     |
| ------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------- |
| adminchat           | plex.adminchat                 | Talk privately with other admins                                                                |
| adminworld          | plex.adminworld                | Teleport to the adminworld                                                                      |
| adventure           | plex.gamemode.adventure        | Set your own gamemode to adventure mode                                                         |
| adventure           | plex.gamemode.adventure.others | Set another player's gamemode to adventure mode                                                 |
| ban                 | plex.ban                       | Bans a player, offline or online                                                                |
| banlist             | plex.banlist                   | Manages the banlist                                                                             |
| blockedit           | plex.blockedit                 | Prevent players from modifying blocks                                                           |
| commandspy          | plex.commandspy                | Spy on other player's commands                                                                  |
| consolesay          | plex.consolesay                | Displays a message to everyone                                                                  |
| creative            | plex.gamemode.creative         | Set your own gamemode to creative mode                                                          |
| creative            | plex.gamemode.creative.others  | Set another player's gamemode to creative mode                                                  |
| pdebug              | plex.debug                     | Plex's debug command                                                                            |
| entitywipe          | plex.entitywipe                | Remove various server entities that may cause lag, such as dropped items, minecarts, and boats. |
| flatlands           | plex.flatlands                 | Teleport to the flatlands                                                                       |
| freeze              | plex.freeze                    | Freeze a player on the server                                                                   |
| kick                | plex.kick                      | Kicks a player                                                                                  |
| list                | plex.list                      | Show a list of all online players                                                               |
| list -v             | plex.list.vanished             | Filters the list command to see vanished players only                                           |
| localspawn          | plex.localspawn                | Teleport to the spawnpoint of the world you are in                                              |
| lockup              | plex.lockup                    | Lockup a player on the server                                                                   |
| masterbuilderworld  | plex.masterbuilderworld        | Teleport to the masterbuilderworld                                                              |
| moblimit            | plex.moblimit                  | Manages the mob limit per chunk.                                                                |
| mobpurge            | plex.mobpurge                  | Purge all mobs.                                                                                 |
| mute                | plex.mute                      | Mute a player on the server                                                                     |
| notes               | plex.notes                     | Manage notes for a player                                                                       |
| plex                | N/A                            | Show information about Plex                                                                     |
| plex redis          | plex.redis                     | Tests your Redis database to ensure Plex can reach it                                           |
| plex reload         | plex.reload                    | Reload Plex                                                                                     |
| plex modules reload | plex.modules.reload            | Reload Plex's modules                                                                           |
| punishments         | plex.punishments               | Opens the Punishments GUI                                                                       |
| rawsay              | plex.rawsay                    | Displays a message to everyone                                                                  |
| removeloginmessage  | plex.removeloginmessage        | Remove your own (or someone else's) login message                                               |
| say                 | plex.say                       | Displays a message to everyone                                                                  |
| setloginmessage     | plex.setloginmessage           | Sets your (or someone else's) login message                                                     |
| smite               | plex.smite                     | Someone being a little bitch? Smite them down...                                                |
| spectator           | plex.gamemode.spectator        | Set your own gamemode to spectator mode                                                         |
| spectator           | plex.gamemode.spectator.others | Set another player's gamemode to spectator mode                                                 |
| survival            | plex.gamemode.survival         | Set your own gamemode to survival mode                                                          |
| survival            | plex.gamemode.survival.others  | Set another player's gamemode to survival mode                                                  |
| tag                 | plex.tag                       | Set or clear your prefix                                                                        |
| tag                 | plex.tag.clear.others          | Clear another player's prefix                                                                   |
| tempban             | plex.tempban                   | Temporarily ban a player                                                                        |
| tempmute            | plex.tempmute                  | Temporarily mute a player on the server                                                         |
| toggle              | plex.toggle                    | Allows toggling various server aspects through a GUI                                            |
| unban               | plex.unban                     | Unbans a player, offline or online                                                              |
| unfreeze            | plex.unfreeze                  | Unfreeze a player                                                                               |
| unmute              | plex.unmute                    | Unmute a player                                                                                 |
| whohas              | plex.whohas                    | Returns a list of players with a specific item in their inventory.                              |
| whohas              | plex.whohas.clear              | Clear a specific item in all player's inventories                                               |
| world               | plex.world                     | Teleport to a world.                                                                            |

## BukkitTelnet Module
| Permission              | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| plex.telnet.autoconnect | Allow automatically connecting to telnet without a password |

## Guilds Module
| Command       | Permission          | Description                                                   |
| ------------- | ------------------- | ------------------------------------------------------------- |
| guild         | plex.guilds.guild   | Guild menu                                                    |
| guild chat    | plex.guilds.chat    | Toggles guild chat or sends a guild chat message              |
| guild create  | plex.guilds.create  | Creates a guild with a specified name                         |
| guild home    | plex.guilds.home    | Teleports to the guild home                                   |
| guild info    | plex.guilds.info    | Shows the guild's information                                 |
| guild invite  | plex.guilds.invite  | Invites a player to the guild                                 |
| guild owner   | plex.guilds.owner   | Sets the guild owner                                          |
| guild prefix  | plex.guilds.prefix  | Sets the guild's default prefix                               |
| guild sethome | plex.guilds.sethome | Sets the guild's home                                         |
| guild setwarp | plex.guilds.setwarp | Creates a new warp at player's location with a specified name |
| guild warps   | plex.guilds.warps   | Displays a clickable list of warps                            |
| guild warp    | plex.guild.warp     | Warps to a specified guild warp                               |

## HTTPD Module
| Permission                    | Description                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| plex.httpd.admins.access      | Allows seeing IP addresses of admins. Anyone can view the page regardless of permissions      |
| plex.httpd.indefbans.access   | Allows accessing the indefinite bans. This permission is required to view the page at all.    |
| plex.httpd.punishments.access | Allows seeing IP addresses of punishments. Anyone can view the page regardless of permissions |
| plex.httpd.schematics.upload  | Allows uploading schematics to the HTTPD if the permission system is enabled.                 |

## LibsDisguises Module
| Command        | Permission                        | Description                                                                                     |
| -------------- | --------------------------------- | ----------------------------------------------------------------------------------------------- |
| disguisetoggle | plex.libsdisguises.disguisetoggle | Toggle LibsDisguises                                                                            |
| undisguiseall  | plex.libsdisguises.undisguiseall  | Undisguise all players                                                                          |
| undisguiseall  | plex.libsdisguises.bypass         | Bypass being undisguised. This can be overridden regardless of permission with the \`-a\` flag. |

## NUSH Module
| Command | Permission        | Description            |
| ------- | ----------------- | ---------------------- |
| nush    | plex.nush.command | Toggle NUSH on or off. |
