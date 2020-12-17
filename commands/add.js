async function run(context) {
  const targetDir = context.amplify.pathManager.getBackendDirPath();

  const options = {
    providerPlugin: "awscloudformation",
    service: "S3AndLambda",
  };

  const name = "DynamoDBDataImporter";

  copyJobs = [
    {
      dir: __dirname,
      //Template location that is ejs format (from the dir level)
      template: "template.json.ejs",
      //Location to copy to (direct path)
      //i.e. /<backend_location>/<category_name>/<project_name>/<unique-template-name>
      target: `${targetDir}/data/${name}/cloudformation-template.json`,
    },
    {
      dir: __dirname,
      //Template location that is ejs format (from the dir level)
      template: "parameters.json.ejs",
      //Location to copy to (direct path)
      //i.e. /<backend_location>/<category_name>/<project_name>/<unique-template-name>
      target: `${targetDir}/data/${name}/parameters.json`,
    },
  ];

  const props = {
    appId: context.amplify.getProjectMeta().providers.awscloudformation
      .AmplifyAppId,
    env: context.amplify.getEnvInfo().envName,
  };

  await context.amplify.copyBatch(context, copyJobs, props);

  context.print.info("");
  context.print.info("📡 Data importer added to project.");

  await context.amplify.updateamplifyMetaAfterResourceAdd(
    "data",
    name,
    options
  );
}

module.exports = {
  run,
};
