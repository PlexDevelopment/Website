---
id: httpd
title: HTTPD
---

# Introduction
The HTTPD module sets up a basic web server to display information from Plex.

## Endpoints
The endpoints are what allow you to query the server and see information. All endpoints are formatted in JSON.

### /api/admins
Displays a list of admins in JSON format. If your IP is not registered to an admin, it will not display IP addresses. If your server is using permissions, it will check if the player has the `plex.httpd.admins.access` instead.

### /api/indefbans
Displays a list of indefinite players in JSON format. This page is only accessible if your IP address is linked to an admin on the server. If your server is using permissions, it will check if the player has the `plex.httpd.indefbans.access` instead.

### /api/list
This will display a list of online players in JSON format. This is accessible to everyone.

### /api/punishments
If you go this page, it will ask you to enter a UUID in the URL. When you enter a valid UUID to the URL, it will display that user's punishments in JSON format. An example URL would be `/api/punishments/78408086-1991-4c33-a571-d8fa325465b2`. If your IP is not registered to an admin, it will not display IP addresses. If your server is using permissions, it will check if the player has the `plex.httpd.punishments.access` instead.