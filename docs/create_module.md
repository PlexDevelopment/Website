---
id: create_module
title: Creating a Module
---

# Creating a Module

If you are interested in creating a module, this guide is for you. Note that you should be familiar with Java, Git, and
the Gradle build system.

## Cloning the template

There is a template you can use when creating a module. You can find it on
GitHub [here](https://github.com/plexusorg/ExampleModule). You should fork this onto your local GitHub account. You can
then clone the fork to your computer. Once you have it open in your IDE, try building it with Gradle to ensure
everything works.

## Changing the branding

In `settings.gradle.kts`, you should change the name to the name of the module you want. All modules follow the naming
convention of `Module-<name>`.

You should also open the `build.gradle.kts` file and change the description to `Module-<name>` as well. You should also
change the version from `1.0` to the current version of Plex available. If you are building against `1.5-SNAPSHOT`, you
should set your version to that as well.

You should also look for this block of code in your `build.gradle.kts file`:

```kts title=build.gradle.kts
tasks.getByName<Jar>("jar") {
    archiveBaseName.set("Module-ExampleModule")
    archiveVersion.set("")
}
```

Change the `Module-ExampleModule` to the name of your module. Ensure you keep the `Module-` part. This is the name of
your JAR file. If you change it, the auto updater may not work.

Finally, in `/src/main/resources/module.yml`, you should change this information to your liking. The version here should
match the version you set in `build.gradle.kts`. The `main` property should be changed to the entrypoint for the module.
This is very similar to the main JavaPlugin when creating a new Bukkit plugin.

## Creating commands

Commands are created just like they are in Plex. There is an example command to help you get started. It is a good
template to follow, and you can customize it based on your needs. You are able to access all the APIs and data from
Plex.

When you create a new command, you should register it in your main class as follows

```java
registerCommand(new ExampleCommand());
```

Make sure you replace the `ExampleCommand` class with your own class that the command is in. You should have one
`registerCommand();` call per class. Subcommands should be within each command class.

You'll want to make sure your class extends `PlexCommand` and implements both the
`execute(@NotNull CommandSender sender, @Nullable Player player, @NotNull String[] args)` and
`smartTabComplete(@NotNull CommandSender sender, @NotNull String alias, @NotNull String[] args)` methods.

You should implement the `@CommandParameters` and `@CommandPermissions` annotations instead of handling permissions for
the main command inside of the actual `execute()` block.

## Creating listeners

Listeners function just like they do in Bukkit, they listen for events. You'll want to do two things. Make sure your
listener extends the `PlexListener` class rather than the Bukkit default `Listener` class. The `PlexListener` class is a
wrapper for the `Listener` class and has the same functionality as the Bukkit one. You'll also want to ensure you register the listener in the main class as follows:
```java
registerListener(new ExampleListener());
```
Make sure you replace the `ExampleListener` class with your own class name.

You can listen for as many events as you like per class. An example to listen for an event when a player joins and send them a message is as follows:
```java
@EventHandler
public void onPlayerJoin(PlayerJoinEvent event)
{
    Player player = event.getPlayer();
    player.sendMessage(Component.text("This is a message from Plex's example module!").color(NamedTextColor.GOLD));
}
```
