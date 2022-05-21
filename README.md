# Shizuru#4390

Music-featured Discord Bot at Falcxxdev's Private Server.

## ➡️ Development

### 🛠️ Requirements

A node.js >= 16.12.0 with [yarn](https://yarnpkg.com) is highly recommended.

### 📦 Install dependencies

```bash
$ yarn install
#
# yarn install v1.22.18
# [1/4] 🔍  Resolving packages...
# [2/4] 🚚  Fetching packages...
# [3/4] 🔗  Linking dependencies...
# [4/4] 🔨  Building fresh packages...
#
# ✨  Done in 1.28s.
```

### 🔑 Create environment variables

```bash
$ cp .env.example .env
$ nano .env # Or use your preferred code editor

# TOKEN="your discord bot token"
# PREFIX="your discord bot prefix"
# GUILD_ID="your server id"
```

### 🏃 Start development server

```bash
$ yarn run dev
#
# yarn run v1.22.18
# $ nodemon index.js
#
# [nodemon] 2.0.16
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching path(s): *.*
# [nodemon] watching extensions: js,mjs,json
# [nodemon] starting `node index.js`
# Shizuru#4390 is up and ready to go!
```

## 📄 License

Shizuru is Licensed under [Apache 2.0](./LICENSE) License
