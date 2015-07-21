# Misc. Scripts

## `minecraft`
A small BASH script to manage a Minecraft server. Supports automatic version-detection for installation and updates.

Update the vars `SERVER_SIZE` and `MINECRAFT_DIR` to suit your purposes.

Dependencies: `java` (runtime), `tmux`, `wget`, `tar`, and `unzip`.

## `github-webhook.js`
A Node.js app that auto-pulls changes in GitHub git repositories to local repositories when pushes are made to Github.

The app is very simple and should only be used in non-secure environments. It can be configured by editing the code directly, but the following points apply in its current state:

* There is no security, so anyone could make a POST request to the app with the appropriate JSON.
* Webhooks need to be configured on the GitHub repository (and directed at the appropriate URL for the app).
* Assumes that local repositories are stored in the user's home directory.
* Assumes that local repositories are stored in directories with names equal to the repository name on GitHub.
* Assumes that `master` is the branch to pull.
* Assumes that the payload received is in the format specified by GitHub.
