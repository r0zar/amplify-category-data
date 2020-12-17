async function run(context) {
  await context.amplify.removeResource(context, "data", "DynamoDBDataImporter");
  context.print.info("");
  context.print.info("Data importer removed. ✌️");
  context.print.info("");
  context.print.info(
    "S3 bucket and function resources must be manually removed from the backend."
  );
}

module.exports = {
  run,
};
