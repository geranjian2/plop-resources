
newBranch(){

# Sirve para generar una nueva rama para un nuevo desarrollo.
  git stash save "feature-nuevo"
  git fetch
  git checkout main
  git pull
  git checkout -b "feature-CMM-$1-$2"
  git branch
  git stash pop
  git add .
  git commit -m "Creación de rama feature-CMM-$1-$2"
  git push --set-upstream origin "feature-CMM-$1-$2"
  exit 0
}
function push {
    message="[$1: $2]"
    git add .
    git commit -m "${message}"
    git push
    echo "MESSAGE COMMIT: ${message}"
}
init(){
    Green='\033[0;32m'
    NC='\033[0m' # No Color

    echo "Seleccione una opcion de git"
    echo -e " 1-${Green}New feature${NC} \n 2-${Green}Push changes${NC},\n 3-${Green}Salir${NC}"
    read x

    while [ $x != 5 ]
    do
    case $x in
        1)
            echo "[nº de historia o tarea]"
            read y
            echo "[nombre-funcionalidad]"
            read z
            newBranch "$y" "$z"
            exit
        ;;
        2)
            echo "Commit message"
            ADD='ADD'
            REFACTOR='REFACTOR'
            REMOVE='REMOVE'
            echo -e " 1-${Green}${ADD}${NC} \n 2-${Green}${REFACTOR}${NC},\n 3-${Green}${REMOVE}${NC},\n 4-${Green}Salir${NC}"
            read y
            case $y in
                1)
                    echo "entro1"
                    commit=$ADD
                ;;
                2)
                    echo "entro2"
                    commit=$REFACTOR
                ;;
                3)
                    echo "entro3"
                    commit=$REMOVE
                ;;
                4)
                 exit 0
                ;;
                esac
            echo " ingrese su Commit message"
            read z
            push $commit "$z"
            exit
        ;;
        3)
            exit 0
        ;;
        esac
    done

}