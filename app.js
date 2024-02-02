const cron = require("node-cron");
const service = require("./mail/service");

console.log("job start");

// service.sendmail().catch(console.error())

cron.schedule("* * * * *", () => {
  console.log("running a task every 1 minutes");
  service.sendmail().catch(console.error());
});
