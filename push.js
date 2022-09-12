const push = require("web-push");

let vapidKeys = {
  publicKey:
    "BKiK_AqkxzrHdlmY7XZP7CK8vD-6kCYCN_riFe9qBZb6ASNOk7lOe_XFWNF-WlxZ5IvTW56Jlg4UYqQQaFR_vbw",
  privateKey: "7SfJzSTgKTvRSuQrLMhx2MABbtGFSu6NR3AsTXKewhY",
};

push.setVapidDetails(
  "mailto:dimamironov2303@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dNscvnK2GTc:APA91bEOSItZIg20VWpYhZhxDz2TVVXjuBqb5oc0uXtYuVo15siOUxgukrhLelb6NLIUQ8ZxaegUUyWhZFc_WJe9IXYhQBdoUjex5kAWpK7UvUW61HSX-pkew0taWNaBj-DqMWQYlIrn",
  expirationTime: null,
  keys: {
    p256dh:
      "BLYCQPMAQTVAMbKab9XZ8VdGI8-_IYmUQ88qbkHgjhOj5kN0bKSUr2ip03WmZBZLHzdqDBFrDqMROWfrySNIZ0E",
    auth: "BIO3qrLHU_v4Gb0-4jhfyA",
  },
};

/* let sub = {
  endpoint:
    "https://wns2-par02p.notify.windows.com/w/?token=BQYAAAA3gLJ7jq5sXGNoLhO4qX3EyQTQl3kF655L1wGxaUWBtSQQYYliYIQxGpp13hx2PqOnMU4oWsQbST0Vlmpfnuw1B6VdwaoUropxsrzGt0cFIAMP4jWPnTdOSoF9Ri6SOEHMegMg7528PPd%2fR7qK2KScegDiD4BSuZ1GJqAvXN16%2bSYyTxE17qggqkbeeNzCT3Ext7L8K%2bF6%2bxiJ9f2vFw9jMC6UXNsB3YLyxb7uqYNykvg5DbRLJsS56Rs2YINNOutFMifADa38ShEeNQ0XI2pRqQ47vGFScwkonCcD3ZkIEPqoc2UwNZhZHsYmGA7Iu0kJRd1HuSgeDKudphrCUXQt",
  expirationTime: null,
  keys: {
    p256dh:
      "BEAGanJ2Fp9A0yJTAPwTO2bRb8pNBxhroKpE4SIAjUjiJqOszOoX-PAzIXh5nzjJZ_XQvL85yi0Rn59cQjhQkf8",
    auth: "8KHec4XUxMxi9yhM9nGGiw",
  },
}; */

push.sendNotification(sub, "test message");
