---
id: config
title: Configuration
---

# Config
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
  # What timezone should various messages appear in (e.g. ban message end date)
  timezone: Etc/UTC

titles:
  masterbuilders: [ ]
  owners:
    - Telesphoreo

# Ban message is customized in the messages.yml file. The URL to appeal at is below.
banning:
  ban_url: "https://forum.plex.us.org"

chat:
  # Should the server use Plex's chat system? It is recommended to keep this on if you are using ranks.
  # If you are using permissions, you should turn this off and use Vault to handle prefixes with a different chat plugin
  enabled: true
  # The maximum amount of characters a player can have for their tag
  # This does not include color tags such as <red> or <rainbow>
  max-tag-length: 64
  # Color tag for name color
  name-color: '<white>'

# Should Plex use a "true op" system with ranks or only permission nodes
# Options are "permissions" or "ranks"
# NOTE: If you are using a proxy such as BungeeCord or Velocity, it is highly recommended to use permissions
system: ranks

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

# Mob limiter / Entity wiping config
# All entities listed here will NOT be wiped upon wiping entities
# By default this includes all mobs, as the mobpurge command can be used to purge mobs.
entitywipe_list:
  - "ITEM_FRAME"
  - "AXOLOTL"
  - "BAT"
  - "BEE"
  - "BLAZE"
  - "CAT"
  - "CAVE_SPIDER"
  - "CHICKEN"
  - "COD"
  - "COW"
  - "CREEPER"
  - "DOLPHIN"
  - "DONKEY"
  - "DROWNED"
  - "ELDER_GUARDIAN"
  - "ENDER_DRAGON"
  - "ENDERMAN"
  - "ENDERMITE"
  - "EVOKER"
  - "FOX"
  - "GHAST"
  - "GIANT"
  - "GLOW_SQUID"
  - "GOAT"
  - "GUARDIAN"
  - "HOGLIN"
  - "HORSE"
  - "HUSK"
  - "ILLUSIONER"
  - "IRON_GOLEM"
  - "LLAMA"
  - "MAGMA_CUBE"
  - "MULE"
  - "MUSHROOM_COW"
  - "OCELOT"
  - "PANDA"
  - "PARROT"
  - "PHANTOM"
  - "PIG"
  - "PIGLIN"
  - "PIGLIN_BRUTE"
  - "PILLAGER"
  - "POLAR_BEAR"
  - "RABBIT"
  - "RAVAGER"
  - "SALMON"
  - "SHEEP"
  - "SHULKER"
  - "SILVERFISH"
  - "SKELETON"
  - "SKELETON_HORSE"
  - "SLIME"
  - "SNOWMAN"
  - "SPIDER"
  - "SQUID"
  - "STRAY"
  - "STRIDER"
  - "TRADER_LLAMA"
  - "TROPICAL_FISH"
  - "TURTLE"
  - "VEX"
  - "VILLAGER"
  - "VINDICATOR"
  - "WANDERING_TRADER"
  - "WITCH"
  - "WITHER"
  - "WITHER_SKELETON"
  - "WOLF"
  - "ZOGLIN"
  - "ZOMBIE"
  - "ZOMBIE_HORSE"
  - "ZOMBIE_VILLAGER"
  - "ZOMBIFIED_PIGLIN"
  - "PUFFERFISH"

# Automatically wipe the specified entities
autowipe:
  # Should we automatically wipe entities?
  enabled: true
  # How often, in seconds, to automatically wipe entities. Default is 5 minutes.
  interval: 300
  # Entities to automatically wipe
  entities:
    - "DROPPED_ITEM"

# What blocks should be blocked?
blocked_blocks:
  - "SPAWNER"
  - "STRUCTURE_BLOCK"
  - "JIGSAW"

# What entities should be blocked?
blocked_entities:
  - "WITHER"
  - "ENDER_DRAGON"
  - "MINECART_TNT"

# See https://docs.plex.us.org/docs/customization/config#worlds for documentation
# These gamerules apply to all worlds on the server
global_gamerules:
  - "doWeatherCycle;true"
  - "doDaylightCycle;true"
  - "doMobSpawning;false"
  - "keepInventory;true"
  - "doFireTick;false"
  - "doMobLoot;false"
  - "mobGriefing;false"
  - "doTileDrops;false"
  - "commandBlockOutput;false"
  - "naturalRegeneration;true"
  - "announceAdvancements;false"
  - "showDeathMessages;false"
  - "sendCommandFeedback;false"

worlds:
  flatlands:
    name: "Flatlands"
    modification:
      permission: "plex.world.flatlands.modify"
      message: "<red>You do not have permission to modify this world."
    gameRules:
      # The gamerules here override the global gamerules
      - "doWeatherCycle;false"
      - "doDaylightCycle;false"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1
  adminworld:
    name: "Admin World"
    entry:
      permission: "plex.world.adminworld.enter"
      # Minimum rank requirement
      requiredLevels:
        - "Rank.ADMIN"
      message: "<red>You do not have permission to enter this world."
    modification:
      permission: "plex.world.adminworld.modify"
      # Minimum rank requirement
      requiredLevels:
        - "Rank.ADMIN"
      message: "<red>You do not have permission to modify this world."
    gameRules:
      - "doWeatherCycle;false"
      - "doDaylightCycle;false"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1
  masterbuilderworld:
    name: "MasterBuilder World"
    entry:
      permission: "plex.world.masterbuilderworld.enter"
      requiredLevels:
        - "Rank.OP"
      message: "<red>You do not have permission to enter this world."
    modification:
      permission: "plex.world.masterbuilderworld.modify"
      requiredLevels:
        # Title has no "minimum", so this will have to be their title
        - "Title.MASTER_BUILDER"
      message: "<red>You do not have permission to modify this world."
    gameRules:
      - "doWeatherCycle;false"
      - "doDaylightCycle;false"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1

# If you are running a custom fork of Plex, you may wish to check for updates from a different repository.
update_repo: "plexusorg/Plex"

# What branch should Plex fetch updates from?
update_branch: "master"

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

## server.timezone
This lets you customize which timezone various messages appear in (e.g. ban message end date)

## Titles
### titles.masterbuilders
A list of players who will show up as a masterbuilder.

### titles.owners
A list of players who will show up as an owner.

## Banning
### banning.ban_url
The URL to be used when a player sees the ban message. The full ban message can be changed in `messages.yml`.

## Chat
### chat.enabled
**Default:** `true`
Determines if the chat system should be enabled. It's useful to turn this off if you're using permissions and want to use prefixes from another plugin instead.

### chat.max_tag_length
**Default:** `64`
The maximum length a tag may be in game.

### chat.name-color
**Default:** `<white>`
The default color a tag should be if a player doesn't specify any colors.

## System
### system
**Options:** `ranks` or `permissions`

This determines how Plex's command system works. If `ranks` is selected, Plex will use a ranking system and give all players operator status. If `permissions` is selected, no players are given operator. Instead, every command will have a permission attached to it which can be assigned in any permission system. It is **highly** recommended to use permissions if you are running Plex behind a proxy such as BungeeCord or Velocity. These proxies **rely** on permissions to give proper commands to players. On some misconfigured instances, if a player is opped, they may inherit *all* available permissions from the proxy.

## Data
### data.central.storage
**Options:** `sqlite`, `mariadb`, `mongodb`

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
**Options:** `true` / `false`

This will enable Plex's Redis functionality.

### data.side.auth
**Options:** `true` / `false`

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

## Entity wiping
### entitywipe_list
All items in the list will not be wiped. By default, this includes all mobs as these can be purged with the `mobpurge` command.

## Autowiping
### autowipe.enabled
**Options:** `true` / `false`
Should autowiping be enabled?

### autowipe.interval
**Default:** 300
How often, in seconds, to automatically wipe entities. Default is 5 minutes.

### autowipe.entities
A list of entities to automatically wipe.

## Blocking
### blocked_blocks
A list of blocks that should be blocked.

### blocked_entities
A list of entities that should be blocked.

## Global gamerules
### global_gamerules
These gamerules apply to all worlds on the server. Gamerules in the generated worlds will override the global gamerules.

## Worlds
An infinite amount of worlds can be generated from the configuration file. A few are automatically generated by default. The format for generating new worlds is as follows:
```yaml title=/plugins/Plex/config.yml
  <world name>:
    name: "Human readable world name"
    entry:
	  # The permission required to enter the world, optional
      permission: "plex.world.worldname.enter"
      # Minimum rank requirement, optional
      requiredLevels:
        - "Rank.ADMIN"
	  # The message to be shown if a player does not have permission, optional
      message: "<red>You do not have permission to enter this world."
    modification:
	  # The permission required to modify the world, optional
      permission: "plex.world.worldname.modify"
      # Minimum rank requirement, optional
      requiredLevels:
        - "Rank.ADMIN"
	  # The message to be shown if a player does not have permission, optional
      message: "<red>You do not have permission to modify this world."
    gameRules:
      - "doWeatherCycle;false"
      - "doDaylightCycle;false"
    parameters:
      grass_block: 1
      dirt: 32
      stone: 16
      bedrock: 1
```
Note that in the `parameters` section, this is how the world should actually be generated. The order is from top to bottom. In the example above, a world will generate with one grass layer, 32 layers of dirt, 16 layers of stone, and one layer of bedrock.

For a list of Ranks and Titles, you can refer to the Javadocs: [Ranks](https://docs.plex.us.org/javadoc/server/dev/plex/rank/enums/Rank.html), [Title](https://docs.plex.us.org/javadoc/server/dev/plex/rank/enums/Title.html).

The gamerule section is what gamerules are set for the world by default. The syntax is the official gamerule name, a semicolon, and either `true` or `false`.

## Updates
update_repo
The repo to use for update checking.

update_branch
The branch to use for update checking.

## Debugging
**Options:** `true` / `false`

The `debug` option is standalone and enables additional logging. This may be useful for diagnosing issues as more information will be displayed in the console. It is recommended to keep this option turned off.
