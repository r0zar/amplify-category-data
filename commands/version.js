var pjson = require("../package.json");

async function run(context) {
  context.print.info(`🍕 Version ${pjson.version}`);
}

module.exports = {
  run,
};
