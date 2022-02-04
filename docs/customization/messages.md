---
id: messages
title: Messages
---

# Introduction
Almost all of the messages inside of Plex are fully customizable. This page will document how to change messages in the ```messages.yml``` file inside the Plex folder.

## Default file
The default `messages.yml` file is below.
```yaml title=/plugins/Plex/messages.yml
# Plex Messages File

baseColor: "7"
broadcastColor: "b"
errorColor: "c"

test: "this is a test message!"
# 1: the command sender's username
variableTest: "variable test with <v>!"
playerNotFound: "Player not found!"
worldNotFound: "World not found!"
noAdminWorldBlockPlace: "<e>You are not allowed to place blocks in the admin world!"
noAdminWorldBlockBreak: "<e>You are not allowed to break blocks in the admin world!"
# 1: the world you have been teleported to
playerWorldTeleport: "You have been teleported to <v>."
# 1: the command sender who opped everyone
oppedAllPlayers: "<b><v> - Opped all players on the server"
deoppedAllPlayers: "<b><v> - De-opped all players on the server"
# 1: the person who is opping
# 2: the person who has been opped
oppedPlayer: "<b><v> - Opped <v>"
# 1: the person who is freezing
# 2: the person who has been frozen
frozePlayer: "<b><v> - Froze <v>"
# 1: the person who is unfreezing
# 2: the person who has been unfrozen
unfrozePlayer: "<b><v> - Unfroze <v>"
noPermission: "<e>You cannot use this command!"
# 1: the login message (uncolored) of the rank required to use the command
noPermissionRank: "<e>You must be at least <v> to use this command!"
noPermissionNode: "<e>You must have the permission: <v> to use this command!"
noPermissionInGame: "<e>You must be in console to use this command!"
noPermissionConsole: "<e>You must be in-game to use this command!"
# 1: the username of the name history
nameHistoryTitle: "Name History of <v>"
# 1: a username of the found user
# 2: when the user changed to that username
nameHistoryBody: " - <v> (<v>)"
# 1: the username that failed
nameHistoryFail: "<e>Something went wrong while trying to retrieve name history of <v>! Try again later!"
gameModeSetTo: "Your gamemode has been set to <v>."
setOtherPlayerGameModeTo: "You set <v>'s gamemode to <v>."
playerSetOtherGameMode: "<v> set your gamemode to <v>."
consoleMustDefinePlayer: "You must define a player since you are running this command from console."
newAdminAdded: "<b><v> - Adding <v> to the admin list"
adminRemoved: "<e><v> - Removing <v> from the admin list"
adminSetRank: "<b><v> - Setting <v>'s rank to <v>"
teleportedToWorld: "<b>You have been teleported to the <v>."
higherRankThanYou: "<e>This player is an admin and a higher rank than you."
playerNotAdmin: "<e>That player is not an admin."
playerIsAdmin: "<e>That player is already an admin."
rankNotFound: "<e>The rank you entered was not found."
rankMustBeHigherThanAdmin: "<e>The rank you entered must be higher than Admin."
consoleOnly: "<e>This command can only be executed by the console."
yourRank: "<b>Your rank is: <v>"
banningPlayer: "<e><v> - Banning <v>"
unbanningPlayer: "<b><v> - Unbanning <v>"
playerNotBanned: "<e>That player is not banned!"
teleportedToWorldSpawn: "<b>Teleporting to the local spawn"
```

## Troubleshooting
If you receive `No message.` when executing a command, it is likely you need to regenerate your `messages.yml` file. The default configuration file is also available on [GitHub](https://raw.githubusercontent.com/PlexDevelopment/Plex/master/src/main/resources/messages.yml).