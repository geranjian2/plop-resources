const { MONO_REPOS } = require("./const");



let routesTemplates = "plop-templates/hexagonal/";
let params = [
  {
    path: "domain/models",
    file: "index.ts",
  },
  {
    path: "domain/repository",
    file: "index.ts",
  },
  {
    path: "domain/repository",
    file: "base-repository.ts",
    template:`${routesTemplates}/domain/repository/base-repository.hbs`
  },
  {
    path: "application/use-cases",
    file: "index.ts",
  },
  {
    path: "infrastructure/implementations/typeorm/",
    file: "index.ts",
  },
  {
    path: "infrastructure/driving-adapters/http/typeorm/",
    file: "index.ts",
  },
  {
    path: "infrastructure/driven-adapters/",
    file: "index.ts",
  },
];
module.exports = {
  description: "Create Struture initial Hexagonal",
  prompts: [
    {
      type: "list",
      name: "monorepo",
      message: "Choice Name monorepo 🛰",
      choices: [...MONO_REPOS],
    },
  ],
  actions: (data) => {
    let defaultPath = `apps/${data.monorepo}/src/`;
    let arrayCOnfig=[];
    arrayCOnfig = params.map(e=>{
      return {
        type: "add",
        path: `${defaultPath}/${e.path}/${e.file}`,
        templateFile: e?.template,
        abortOnFail: true,
        skipIfExists: true,
        data: {key1: 'value someting'}
      }
    })
    return arrayCOnfig
  },
};
