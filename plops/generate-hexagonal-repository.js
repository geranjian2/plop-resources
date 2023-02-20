const { MONO_REPOS, USES_CASE } = require("./const");

let routesTemplates = "plop-templates/hexagonal/";
let params = [
  {
    path: "domain/models",
    file: "{{dashCase name}}-model.ts",
    template:`${routesTemplates}/model.js.hbs`
  },
  {
    path: "domain/repository",
    file: "{{dashCase name}}-repository.ts",
    template:`${routesTemplates}/repository.js.hbs`
  },
  {
    path: "application/use-cases/{{dashCase name}}",
    file: "create-{{dashCase name}}-usecase.ts",
    template:`${routesTemplates}/useCase.js.hbs`,
  },
  {
    path: "infrastructure/implementations/typeorm/{{dashCase name}}",
    file: "{{dashCase name}}-repository-typeorm.ts",
    template:`${routesTemplates}/implementationdb.js.hbs`,
  },
  {
    path: "infrastructure/implementations/typeorm/",
    file: "{{dashCase nameSuffix}}.module.ts",
    template:`${routesTemplates}/typeormimplementationmodule.js.hbs`,
    data:{
      nameSuffix:'TypeOrmRepository'
    }
  },
  {
    path: "infrastructure/driving-adapters/http/typeorm/",
    file: "{{dashCase nameSuffix}}.module.ts",
    template:`${routesTemplates}/httpDrivinAdapterModule.js.hbs`,
    data:{
      nameSuffix:'HttpTypeOrm'
    }
  },
  {
    path: "infrastructure/driving-adapters/http/typeorm/",
    file: "{{dashCase name}}.controller.ts",
    template:`${routesTemplates}/controllerService.js.hbs`,
    data:{
      nameSuffix:'HttpTypeOrm'
    }
  },
//   {
//     path: "infrastructure/implementations/typeorm/",
//     file: "index.ts",
//   },
//   {
//     path: "infrastructure/driving-adapters/http/typeorm/",
//     file: "index.ts",
//   },
//   {
//     path: "infrastructure/driven-adapters/",
//     file: "index.ts",
//   },
];
module.exports = {
  description: "Create Struture Repository Hexagonal",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Name Repository: ",
    },
    {
      type: "list",
      name: "monorepo",
      message: "Choice Name monorepo 🛰",
      choices: [...MONO_REPOS],
    },
    {
      type: "list",
      name: "caseuse",
      message: "Choice case use create 🛰",
      choices: [...USES_CASE],
    },
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
