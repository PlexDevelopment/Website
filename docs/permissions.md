---
id: permissions
title: Permissions
---

# Introduction
This page is a comprehensive list of all of Plex's permission nodes.

## Plex
| Command            | Permission              | Description                                                                                     |
|--------------------|-------------------------|-------------------------------------------------------------------------------------------------|
| adminchat          | plex.adminchat          | Talk privately with other admins                                                                |
| adminworld         | plex.adminworld         | Teleport to the adminworld                                                                      |
| adventure          | plex.gamemode.adventure | Set your own or another player's gamemode to adventure mode                                     |
| ban                | plex.ban                | Bans a player, offline or online                                                                |
| blockedit          | plex.blockedit          | Prevent players from modifying blocks                                                           |
| commandspy         | plex.commandspy         | Spy on other player's commands                                                                  |
| creative           | plex.gamemode.creative  | Set your own or another player's gamemode to creative mode                                      |
| debug              | plex.debug              | Plex's debug command                                                                            |
| entitywipe         | plex.entitywipe         | Remove various server entities that may cause lag, such as dropped items, minecarts, and boats. |
| flatlands          | plex.flatlands          | Teleport to the flatlands                                                                       |
| freeze             | plex.freeze             | Freeze a player on the server                                                                   |
| kick               | plex.kick               | Kicks a player                                                                                  |
| localspawn         | plex.localspawn         | Teleport to the spawnpoint of the world you are in                                              |
| lockup             | plex.lockup             | Lockup a player on the server                                                                   |
| masterbuilderworld | plex.masterbuilderworld | Teleport to the masterbuilderworld                                                              |
| mobpurge           | plex.mobpurge           | Purge all mobs.                                                                                 |
| mute               | plex.mute               | Mute a player on the server                                                                     |
| namehistory        | plex.namehistory        | Get the name history of a player                                                                |
| notes              | plex.notes              | Manage notes for a player                                                                       |
| plex               | plex.plex               | Show information about Plex or reload it                                                        |
| punishments        | plex.punishments        | Opens the Punishments GUI                                                                       |
| rawsay             | plex.rawsay             | Displays a message to everyone                                                                  |
| smite              | plex.smite              | Someone being a little bitch? Smite them down...                                                |
| spectator          | plex.gamemode.spectator | Set your own or another player's gamemode to spectator mode                                     |
| survival           | plex.gamemode.survival  | Set your own or another player's gamemode to survival mode                                      |
| tag                | plex.tag                | Set or clear your prefix                                                                        |
| tempban            | plex.tempban            | Temporarily ban a player                                                                        |
| toggledrops        | plex.toggledrops        | Toggle immediately removing drops.                                                              |
| unban              | plex.unban              | Unbans a player, offline or online                                                              |
| unfreeze           | plex.unfreeze           | Unfreeze a player                                                                               |
| unmute             | plex.unmute             | Unmute a player                                                                                 |
| world              | plex.world              | Teleport to a world.                                                                            |

## BukkitTelnet Module
| Permission              | Description                                                 |
|-------------------------|-------------------------------------------------------------|
| plex.telnet.autoconnect | Allow automatically connecting to telnet without a password |

## HTTPD Module
| Permission                    | Description                                                                                   |
|-------------------------------|-----------------------------------------------------------------------------------------------|
| plex.httpd.admins.access      | Allows seeing IP addresses of admins. Anyone can view the page regardless of permissions      |
| plex.httpd.indefbans.access   | Allows accessing the indefinite bans. This permission is required to view the page at all.    |
| plex.httpd.punishments.access | Allows seeing IP addresses of punishments. Anyone can view the page regardless of permissions |

## LibsDisguises Module
| Command        | Permission                        | Description                                                                                   |
|----------------|-----------------------------------|-----------------------------------------------------------------------------------------------|
| disguisetoggle | plex.libsdisguises.disguisetoggle | Toggle LibsDisguises                                                                          |
| undisguiseall  | plex.libsdisguises.undisguiseall  | Undisguise all players                                                                        |
| undisguiseall  | plex.libsdisguises.bypass         | Bypass being undisguised. This can be overridden regardless of permission with the `-a` flag. |