salir=3
Green='\033[0;32m'
NC='\033[0m' # No Color
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
    echo -e "${Green}MESSAGE COMMIT:${NC} ${message}"
}
init(){
    

    echo "Seleccione una opcion de git"
    echo -e " 1-${Green}New feature${NC} \n 2-${Green}Push changes${NC},\n ${salir}-${Green}Salir${NC}"
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
            exitpu=3
            echo "Commit message"
            ADD='ADD'
            REFACTOR='REFACTOR'
            REMOVE='REMOVE'
            echo -e " 1-${Green}${ADD}${NC} \n 2-${Green}${REFACTOR}${NC},\n ${exitpu}-${Green}Salir${NC}"
            read y
            case $y in
                1)
                    commit=$ADD
                ;;
                2)
                    commit=$REFACTOR
                ;;
                3)
                    commit=$REMOVE
                ;;
                $exitpu)
                 exit 0
                ;;
                esac
            echo "opcion ${commit}"
            echo " ingrese su Commit message"
            read z
            push $commit "$z"
            exit
        ;;
        $salir)
            exit 0
        ;;
        esac
    done

}