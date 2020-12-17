async function run(context) {
  // print out the help message of your plugin
  // const activeEnv = context.amplify._getEnvInfo().envName;
  // context.print.info(context);
  context.print.info("");
  context.print.info("Check out the readme on github for useage instructions.");
  context.print.info("https://github.com/r0zar/amplify-category-data-importer");
  context.print.info("");
  context.print.info("Interested in helping out or building plugins?");
  context.print.info("Message me on 🐦 Twitter: @lordrozar");
}

module.exports = {
  run,
};
