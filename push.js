const push = require("web-push");

let vapidKeys = {
  publicKey:
    "BKiK_AqkxzrHdlmY7XZP7CK8vD-6kCYCN_riFe9qBZb6ASNOk7lOe_XFWNF-WlxZ5IvTW56Jlg4UYqQQaFR_vbw",
  privateKey: "7SfJzSTgKTvRSuQrLMhx2MABbtGFSu6NR3AsTXKewhY",
}

push.setVapidDetails('mailto:dimamironov2303@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}

push.sendNotification(sub, 'test message')
