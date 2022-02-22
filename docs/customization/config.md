---
id: config
title: Configuration
---

# Introduction
This page will show you how to modify the configuration file. The configuration file is located at: ```/plugins/Plex/config.yml```.

## Default configuration
Below is the default `config.yml` file when Plex is loaded for the first time.
```yaml title=/plugins/Plex/config.yml
# Plex Configuration File
# For documentation, please visit: https://docs.plex.us.org

server:
  name: "Plexus"
  motd: "%servername% - Minecraft %mcversion%"
  colorize_motd: true
  sample:
    - "&cForums: https://forum.plex.us.org"

titles:
  masterbuilders: []
  owners:
    - Telesphoreo

# Ban message is customized in the messages.yml file. The URL to appeal at is below.
banning:
  ban_url: "https://forum.plex.us.org"

chat:
  max-tag-length: 16
  name-color: 'f' #Color code for name color

# Settings for commands relating to Plex
commands:
  # Should Plex use a "true op" system with ranks or only permission nodes
  permissions: ranks

data:
  central:
    storage: sqlite # Use mariadb, mongodb, or sqlite here
    user: ""
    password: ""
    hostname: 127.0.0.1
    port: 27017
    db: "plex"
  side: # This is Redis, leave password blank if auth is false
    enabled: false
    auth: true
    hostname: 127.0.0.1
    port: 6379
    password: ""

# requiredLevel if permissions are ranks, else permissions
worlds:
  flatlands:
    name: "Flatlands"
    permission: "plex.world.flatlands"
    noEdit: "&cYou can't edit this world!"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1
  adminworld:
    name: "Admin World"
    permission: "plex.world.adminworld"
    requiredLevels:
      - "Rank.ADMIN" # Minimum rank requirement
    noEdit: "&cYou can't edit this world!"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1
  masterbuilderworld:
    name: "MasterBuilder World"
    permission: "plex.world.masterbuilderworld"
    requiredLevels:
      - "Title.MASTER_BUILDER" # Title has no "minimum", so this will have to be their title
    noEdit: "&cYou can't edit this world!"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1

# Additional logging for debugging
debug: false
```

## Server
### server.name
The name of your server goes here and is used throughout Plex.
### server.motd
The text here will appear on the server list.
### server.colorize_motd
This determines if the message of the day should randomly be colorized. You can disable this option and manually colorize your MOTD.
### server.sample
This lets you specify a custom message under the player count in the server list.

## Titles
### titles.masterbuilders
A list of players who will show up as a masterbuilder.

### titles.owners
A list of players who will show up as an owner.

## Banning
### banning.message
This message will appear whenever a player tries to join the server, but is banned. You can use any color coding you would like here.

## Chat
### chat.max_tag_length
Default: `16`
The maximum length a tag may be in game.

### chat.name-color
Default: `f`
The default color a tag should be if a player doesn't specify any colors.

## Commands
### comamnds.permissions
**Options:** `ranks` or `permissions`

This determines how Plex's command system works. If `ranks` is selected, Plex will use a ranking system and give all players operator status. If `permissions` is selected, no players are given operator. Instead, every command will have a permission attached to it which can be assigned in any permission system.

## Data
### data.central.storage
**Options**: `sqlite`, `mariadb`, `mongodb`

Select which database software you would like to use. `sqlite` is the default. Note that if you change which data storage you use, no data will be transferred.

### data.central.user
This is the username for whichever database software you use. Note that `sqlite` does not require a username.

### data.central.password
This is the password for whichever database software you use. Note that `sqlite` does not require a password.

### data.central.hostname
This is the hostname for whichever database software you use. Note that `sqlite` does not require a hostname.

### data.central.port
This is the port for whichever database software you use. Note that `sqlite` does not require a port.

### data.central.db 
This is the name for whichever database software you use. Note that `sqlite` does not require a name.

### data.side.enabled
**Options**: `true` / `false`

This will enable Plex's Redis functionality.

### data.side.auth
**Options**: `true` / `false`

This is whether authentication mode for Redis is turned on or not.

:::info
It is highly recommended to have Redis authentication turned on.
:::

### data.side.hostnane
This is the hostname for Redis. This is required for Redis to work.

### data.side.port
This is the port that Redis is listening on. This is requird for Redis to work.

### data.side.password
This is the password for your Redis instance. Note that this can be left blank if authentication is turned off.


## Worlds
An infinite amount of worlds can be generated from the configuration file. A few are automatically generated by default. The format for generating new worlds is as follows:
```yaml title=/plugins/Plex/config.yml
  <world_name>:
    name: 'Human readable name'
    permission: 'plex.world.example'
    requiredLevels:
      - "Rank.ADMIN" # The minimum rank required to edit the world
    noEdit: "&cThis message will display if a player doesn't have permission to edit a world."
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1
```
Note that in the `parameters` section, this is how the world should actually be generated. The order is from top to bottom. In the example above, a world will generate with one grass layer, 32 layers of dirt, 16 layers of stone, and one layer of bedrock.

For a list of Ranks and Titles, you can refer to the Javadocs: [Ranks](https://docs.plex.us.org/javadocs/dev/plex/rank/enums/Rank.html), [Title](https://docs.plex.us.org/javadocs/dev/plex/rank/enums/Title.html).

## Debugging
**Options:** `true` / `false`

The `debug` option is standalone and enables additional logging. This may be useful for diagnosing issues as more information will be displayed in the console. It is recommended to keep this option turned off.
