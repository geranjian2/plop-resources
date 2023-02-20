const { MONO_REPOS, USES_CASE } = require("./const");

let routesTemplates = "plop-templates/hexagonal/";
let params = [
  {
    path: "application/use-cases/{{dashCase name}}",
    file: "create-{{dashCase name}}-usecase.ts",
    template:`${routesTemplates}/useCase.js.hbs`,
  },
];
module.exports = {
  description: "Create case-use",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Name Model: ",
    },
    {
      type: "input",
      name: "name",
      message: "Name Case: ",
    },
    {
      type: "list",
      name: "monorepo",
      message: "Choice Name monorepo 🛰",
      choices: [...MONO_REPOS],
    },
    // {
    //   type: "list",
    //   name: "caseuse",
    //   message: "Choice case use create 🛰",
    //   choices: [...USES_CASE],
    // },
  ],
  actions: (data) => {
    let defaultPath = `apps/${data.monorepo}/src/`;
    let arrayCOnfig = [];
    arrayCOnfig = params.map((e) => {
      return {
        type: "add",
        path: `${defaultPath}/${e.path}/${e.file}`,
        templateFile: e?.template,
        abortOnFail: true,
        skipIfExists: true,
        data: {...e?.data}
      };
    });
    console.log(arrayCOnfig);
    return arrayCOnfig;
  },
};
