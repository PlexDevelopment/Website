---
id: indefinitebans
title: Indefinite Bans
---

# Introduction
Similar to TotalFreedomMod, Plex has indefinite bans. Indefinite bans are reserved for players who should not automatically be unbanned. Anyone who has access to the `indefbans.yml` file can add indefinite bans.

## Default file
```yaml title=/plugins/Plex/indefbans.yml
# Plex Indefinite Bans File
# Players with their UUID / IP / Usernames in here will be indefinitely banned until removed

# List of permanently banned UUIDs
# If you want to get someone's UUID, use https://api.ashcon.app/mojang/v2/user/<username>
uuids:
  - 1dac0e92-f565-4479-afd5-38c7df5f9732 # badplayer123

# List of permanently banned IP addresses
ips:
  - 169.254.69.69

# List of permanently banned UUIDs
# If you want to get someone's username, use https://api.ashcon.app/mojang/v2/user/<uuid>, or just remember it
usernames:
  - badplayer123
```

### UUIDs
Plex allows you to add UUIDs as indefinite bans. To get the UUID of a player, you can use the Ashcon API. Replace `<username>` with the player's username: `https://api.ashcon.app/mojang/v2/user/<username>`. You can then add the UUID to the indefinite ban list.

### IPs
You can add IP addresses as indefinite bans if you know it. Note that it must be a valid IPv4 Address. This means each group must be between 0 - 255 and there can only be three separators.

### Usernames
If you wish to only ban a username and not a UUID, Plex allows you to do so. Note that if a player changes their name, they will be allowed to join again. To convert a UUID to a username, you can use the Ashcon API. Replace `<uuid>` with the player's UUID: `https://api.ashcon.app/mojang/v2/user/<uuid>`. You can then add the UUID to the indefinite ban list. If you already know the player's username, you may simply enter it.