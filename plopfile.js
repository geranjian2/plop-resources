const { hexagonal, generateHexagonalRepository } = require('./plops');
module.exports = function (plop) {
  plop.setGenerator('Hexagonal', hexagonal);
  plop.setGenerator('Hexagonal Repository', generateHexagonalRepository);
  plop.setGenerator('Generate useCase', generateHexagonalRepository);
  };
      // plop.setGenerator("Complete module", {
    //     description: "Create module complement service, controller, dto",
    //     prompts: [
    //       {
    //         type: "input",
    //         name: "name",
    //         message: "Component Name?",
    //       },
    //       {
    //         type: "input",
    //         name: "route",
    //         message: "route",
    //       },
    //     ],
    //     actions: [
    //       {
    //         type: "add",
    //         path: `src/{{route}}/dto/{{name}}.dto.ts`,
    //         templateFile: "plop-templates/screen/dto.js.hbs",
    //       },
    //     ],
    //   });
    // plop.setGenerator("controller", {
    //   description: "Create a controller",
    //   prompts: [
    //     {
    //       type: "input",
    //       name: "name",
    //       message: "Controller Name?",
    //     },
    //     {
    //       type: "input",
    //       name: "route",
    //       message: "route",
    //     },
    //   ],
    //   actions: [
    //     {
    //       type: "add",
    //       path: `src/{{route}}/{{name}}/dto/{{name}}.dto.ts`,
    //       templateFile: "plop-templates/screen/dto.js.hbs",
    //     },
    //   ],
    // });
    // plop.setGenerator("module", {
    //     description: "Create a module",
    //     prompts: [
    //       {
    //         type: "input",
    //         name: "name",
    //         message: "Module Name?",
    //       },
    //       {
    //         type: "input",
    //         name: "route",
    //         message: "route",
    //       },
    //     ],
    //     actions: [
    //       {
    //         type: "add",
    //         path: `src/{{route}}/dto/{{name}}.dto.ts`,
    //         templateFile: "plop-templates/screen/dto.js.hbs",
    //       },
    //     ],
    //   });
    //   plop.setGenerator("choice file", {
    //     description: "choice",
    //     prompts: [
    //       {
    //         type: "list",
    //         name: "action",
    //         message: "Component Name?",
    //         choices: ['An Action', 'Redux flow'],
    //       },
    //     ]
    //   })