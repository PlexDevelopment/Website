---
id: messages
title: Messages
---

# Introduction
Almost all of the messages inside of Plex are fully customizable. This page will document how to change messages in the ```messages.yml``` file inside the Plex folder.

## Default file
The default `messages.yml` file is below.
```yaml title=/plugins/Plex/messages.yml# Plex Messages File
# This file uses the MiniMessage system.
# Documentation available at https://docs.adventure.kyori.net/minimessage/format.html

# Messages in here will be placed in for certain commands, actions, etc.
# Warning: not all commands have customizable messages

# Variables <v> - these are code-defined replacements for things that should be inserted into messages. (e.g. names, statuses, numbers)
# If any of these variables are supposed to be used within a message, some documentation is provided to give more context to what the variables indicate.
# You are unable to change the order the variables are used due to it being a code-side functionality.
# If you are wishing to change these messages it's recommended you use the same amount of variables as stated in the documentation, however it's not required.

# 1. Appeal URL
# 2. Reason
# 3. Expiry
# 4. Punisher
banMessage: "<red>You have been banned! You may appeal at <gold><v>.\n<red>Reason: <gold><v>\n<red>End date: <gold><v>\n<red>Banned by: <gold><v>"
test: "this is a test message!"
# 1. The command sender's username
variableTest: "variable test with <v>!"
playerNotFound: "Player not found!"
worldNotFound: "World not found!"
# 1. The world you have been teleported to
playerWorldTeleport: "You have been teleported to <v>."
# 1. The sender who opped everyone
oppedAllPlayers: "<aqua><v> - Opped all players on the server"
# 1. The sender who de-opped everyone
deoppedAllPlayers: "<aqua><v> - De-opped all players on the server"
# 1. The person who is opping
# 2. The person who has been opped
oppedPlayer: "<aqua><v> - Opped <v>"
# 1. The person who is deopped
# 2. The person who has been deopped
deoppedPlayer: "<red><v> - Deopped <v>"
# 1. The person who is freezing
# 2. The person who has been frozen
frozePlayer: "<aqua><v> - Froze <v>"
# 1. The person who is unfreezing
# 2. The person who has been unfrozen
unfrozePlayer: "<aqua><v> - Unfroze <v>"
# 1. The person who is freezing
# 2. The person who has been frozen
mutedPlayer: "<aqua><v> - Muted <v>"
# 1. The person who is unfreezing
# 2. The person who has been unfrozen
unmutedPlayer: "<aqua><v> - Unmuted <v>"
noPermission: "<red>You cannot use this command!"
# 1. The rank required to use the command
noPermissionRank: "<red>You must be at least <v> to use this command!"
# 1. The permission node required to use the command
noPermissionNode: "<red>You must have the permission: <v> to use this command!"
noPermissionInGame: "<red>You must be in console to use this command!"
noPermissionConsole: "<red>You must be in-game to use this command!"
# 1. The username of the name history
nameHistoryTitle: "Name History of <v>"
# 1. A username of the found user
# 2. When the user changed to that username
nameHistoryBody: " - <v> (<v>)"
# 1. The username that failed
nameHistoryFail: "<red>Something went wrong while trying to retrieve name history of <v>! Try again later!"
nameHistoryDoesntExist: "<red>Couldn't find this user! Please check if your spelling was correct and this player exists"
# 1. The gamemode
gameModeSetTo: "Your gamemode has been set to <v>."
# 1. The player's name
# 2. The gamemode
setOtherPlayerGameModeTo: "You set <v>'s gamemode to <v>."
# 1. The command sender
# 2. The gamemode
playerSetOtherGameMode: "<v> set your gamemode to <v>."
# 1. The command sender
# 2. The gamemode
setEveryoneGameMode: "<aqua><v> - Changing everyone's gamemode to <v>"
consoleMustDefinePlayer: "You must define a player since you are running this command from console."
# 1. The command sender
# 2. The player
newAdminAdded: "<aqua><v> - Adding <v> to the admin list"
# 1. The command sender
# 2. The player
adminRemoved: "<red><v> - Removing <v> from the admin list"
# 1. The command sender
# 2. The player
adminSetRank: "<aqua><v> - Setting <v>'s rank to <v>"
# The world name
teleportedToWorld: "<aqua>You have been teleported to the <v>."
higherRankThanYou: "<red>This player is an admin and a higher rank than you."
playerNotAdmin: "<red>That player is not an admin."
playerIsAdmin: "<red>That player is already an admin."
rankNotFound: "<red>The rank you entered was not found."
rankMustBeHigherThanAdmin: "<red>The rank you entered must be higher than Admin."
consoleOnly: "<red>This command can only be executed by the console."
# 1. Rank
yourRank: "<aqua>Your rank is: <v>"
# 1. Player name
# 2. Rank
otherRank: "<aqua><v>'s rank is: <v>"
# 1. The command sender
# 2. The player
banningPlayer: "<red><v> - Banning <v>"
# 1. The command sender
# 2. The player
unbanningPlayer: "<aqua><v> - Unbanning <v>"
playerNotBanned: "<red>That player is not banned!"
playerNotFrozen: "<red>That player is not frozen!"
playerNotMuted: "<red>That player is not muted!"
playerBanned: "<red>That player is already banned!"
playerFrozen: "<red>That player is already frozen!"
playerMuted: "<red>That player is already muted!"
muted: "<red>You are currently muted - STFU!"
teleportedToWorldSpawn: "<aqua>Teleporting to the local spawn"
toggleCommandSpy: "CommandSpy has been"
enabled: "enabled."
disabled: "disabled."
adminChatFormat: '&8[&9AdminChat&8] &4<v> &7» &6<v>'
maximumPrefixLength: "<red>The maximum length for a tag may only be <v>."
prefixCleared: "<aqua>Your prefix has been cleared."
otherPrefixCleared: "<aqua>You have cleared <v>'s prefix."
prefixSetTo: "<aqua>Your prefix has been set to <v>"
```

## MiniMessage
The `messages.yml` file uses MiniMessage for coloring messages. For example, writing `<aqua>`, will color the text aqua. This is not like HTML, and you should not close the tag (`</aqua>`). There are some special functions as well, such as `<rainbow>`. The default color will be gray. For a complete guide on using MiniMessage, visit: [https://docs.adventure.kyori.net/minimessage/format.html](https://docs.adventure.kyori.net/minimessage/format.html).

## Troubleshooting
If you receive `No message.` when executing a command, it is likely you need to regenerate your `messages.yml` file. The default configuration file is also available on [GitHub](https://raw.githubusercontent.com/PlexDevelopment/Plex/master/src/main/resources/messages.yml). As of Plex 0.6 (Beta 6), your `messages.yml` file should automatically update with new entries.