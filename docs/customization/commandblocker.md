---
id: commandblocker
title: Command Blocker
---

# Introduction
Plex features an advanced command blocker with support for matching and RegEx statements. It is recommended that you use this only in conjunction with ranks. If you are using permissions, there is not as much of a need for a command blocker.

## Default file
```yaml title=/plugins/Plex/commands.yml
#
# Command Blocker
#
# Format:
#   - "<regex or match>:<rank>:command name no slash:Block message"
#
# Symbols to use:
#   - r for RegEx
#   - m for matching
#   - The ranks are "e" for everyone, "s" for senior admin, and "a" for admin
#   - MATCHING MODE: The command is just the command without slashes. Optional arguments are specified as well. It also accepts full plugins via specifying the plugin name followed by a ":" (e.g. "viaversion:")
#   - REGEX MODE: The command is regex that matches the desired command. It matches case insensitively.
#   - Finally the block message. MUST NOT CONTAIN ":". Use _ to use the default command blocked message as specified in messages.yml, or you can optionally put your own in
#
# So these would be valid:
#   - "m:e:mail sendall:You cannot send messages to everyone on the server"
#   - "r:e:^[^ :]+::Plugin specific commands are disabled"
blockedCommands:
  - "r:e:^[^ :]+::Plugin specific commands are disabled."
  - "m:e:mail sendall:You cannot send messages to everyone on the server."
  - "m:e:mail sendtempall:You cannot send messages to everyone on the server."
```

## The symbols
- `r` represents RegEx and `m` represents matching.
- The ranks are `e` to block for everyone, `a` to block for admins and above, and `s` to block for senior admins and above.

## The format
An example formatted entry in the `commands.yml` file would look like this:
`"m:e:mail sendall:You cannot send messages to everyone on the server"`
The `m` will match the `mail sendall` command. The `e` stands for everyone, so it will block this command for everyone. The last part is the message. If you use `_` as the blocked message, it will use the default message specified in `messages.yml`

