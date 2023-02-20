#! /bin/bash

dirName=.

# if [[ -d ./node_modules/@matrixtech/fw-devtools ]]
# then
#   dirName=./node_modules/@matrixtech/fw-devtools
# fi

# Ejecuta el componente
if [ "$1" = "help" ]
then
  echo ""
  echo "UTILIDADES PARA DESARROLLO"
  echo ""
  echo "./run.sh login"
  echo "Login en codeartifact."
  echo ""
  echo "./run.sh npm"
  echo "Sirve para hacer el npm install para adicionar nuevas librerías. No borra nada."
  echo ""
  echo "./run.sh npmclean"
  echo "Sirve para borrar todas las dependencias (node_modules) e instalarlas de nuevo."
  echo ""
  echo "./run.sh feature <CMM-[nº de historia o tarea]-[nombre-funcionalidad]>"
  echo "Sirve para generar una nueva rama para un nuevo desarrollo."
  echo ""
  echo "./run.sh merge"
  echo "Sirve para traer todos los cambios de master a la rama actual sin hacer push automático."
  echo ""
  echo "./run.sh stryker <Ruta relativa archivo de test>"
  echo "Sirve para ejecutar los tests de mutación sobre un único archivo."
  echo ""
  echo "./run.sh create-migration <Nombre de la migración>"
  echo "Sirve para crear una nueva migración de base de datos dentro de la carpeta migrations."
  echo ""
  echo "./run.sh create-test <Ruta relativa del archivo js al que se le creará el test>"
  echo "Crea un test unitario en la carpeta de tests."
  echo ""
fi

# npm install sin borrar nada
if [ "$1" = "login" ]
then
  aws codeartifact login --tool npm --repository matrixtech-npm-repository --domain matrixtech-npm-repository
fi

# npm install sin borrar nada
if [ "$1" = "npm" ]
then
  aws codeartifact login --tool npm --repository matrixtech-npm-repository --domain matrixtech-npm-repository
  npm i
fi

# npm install borrando node_modules y package-lock.json
if [ "$1" = "npmclean" ]
then
  echo borrando node_modules...
  rm -Rf node_modules
  rm package-lock.json
  aws codeartifact login --tool npm --repository matrixtech-npm-repository --domain matrixtech-npm-repository
  npm i
fi

# Sirve para generar una nueva rama para un nuevo desarrollo.
if [ "$1" = "feature" ]
then
  git stash save "feature-nuevo"
  git fetch
  git checkout master
  git pull
  git checkout -b "feature/$2"
  git branch
  git stash pop
  git add .
  git commit -m "Creación de rama $2"
  git push --set-upstream origin "feature$2"
fi

# Sirve para generar una nueva rama para un nuevo desarrollo.
if [ "$1" = "push" ]
then
  git add .
  git commit -m "Adjust $2"
  git push
fi

# Permite hacer la mezcla diaria que se debe hacer entre la rama propia y master
if [ "$1" = "merge" ]
then
  branch_name="$(git branch --show-current)"
  echo Mezclando master a $branch_name...
  git push --no-verify
  git fetch
  git checkout master
  git pull
  git checkout $branch_name
  git merge master --no-commit --no-ff
fi

# Permite hacer el test de mutación sobre un archivo individual
if [ "$1" = "stryker" ]
then
  testDir=test
  srcDir=
  if [ -d "tests/unit" ]
  then
    testDir=tests/unit
    srcDir=src/
  fi
  echo testDir $testDir
  testFile="$2"
  testFile="${testFile/\\//}"
  echo archivo de test $testFile
  file="${testFile/.spec.js/.js}"
  file="${file/$testDir\//$srcDir}"
  file="${file/\\//}"
  echo archivo a probar "$file"
  npx stryker run --mutate "$file"
fi

# Permite crear una nueva migración en la tabla migrations. Es equivalente a npm run create-migration
if [ "$1" = "create-migration" ]
then
  node -e "require('$dirName/tools/create-migration.js').entrypoint()" $2
fi

# Permite crear un nuevo test en la carpeta de tests
if [ "$1" = "create-test" ]
then
  node -e "require('$dirName/tools/create-test.js').entrypoint()" $2
fi

# Permite crear una nueva página de vue
if [ "$1" = "create-page-form" ]
then
  node -e "require('$dirName/tools/create-page-form.js').entrypoint()" $2
fi

# Permite crear una nueva página de vue
if [ "$1" = "create-page-list" ]
then
  node -e "require('$dirName/tools/create-page-list.js').entrypoint()" $2
fi

# Permite crear un nuevo consumidor de evento en un componente consumidor
if [ "$1" = "create-consumer" ]
then
  node -e "require('$dirName/tools/create-consumer.js').entrypoint()" $2
fi

# Ejecuta un método
if [ "$1" = "execute" ]
then
  node -e "require('./$2').$3()" 
fi