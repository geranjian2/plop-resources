
newBranch(){

# Sirve para generar una nueva rama para un nuevo desarrollo.
  git stash save "feature-nuevo"
  git fetch
  git checkout main
  git pull
  git checkout -b "feature/$1"
  git branch
  git stash pop
  git add .
  git commit -m "Creación de rama $1"
  git push --set-upstream origin "feature$1"
  exit 0
}
function push {
    message="[$1 $2]"
    git add .
    git commit -m "${message}"
    # git push
    echo "MESSAGE COMMIT: ${message}"
}
init(){
    Green='\033[0;32m'
    NC='\033[0m' # No Color
    echo -e "I ${Green}love${NC} Stack Overflow"

    echo "Seleccione una opcion de git"
    echo -e " 1-${Green}feature${NC} \n 2-${Green}push${NC},\n 3-${Green}merge${NC},\n 5-${Green}Salir${NC}"
    read x

    while [ $x != 5 ]
    do
    case $x in
        1)
            
            echo "New feature"
            read $1
            newBranch
            exit
        ;;
        2)
            echo "Commit message"
            ADD='ADD'
            REFACTOR='REFACTOR'
            REMOVE='REMOVE'
            commit=''
            echo -e " 1-${Green}${ADD}${NC} \n 2-${Green}${REFACTOR}${NC},\n 3-${Green}${REMOVE}${NC},\n 4-${Green}Salir${NC}"
            read y
            case $1 in
                1)
                    $commit = $ADD
                ;;
                2)
                    $commit = $REFACTOR
                ;;
                3)
                    $commit = $REMOVE
                ;;
                esac
            echo " ingrese su Commit message"
            read z
            push y z
            exit
        ;;
        3)
            standard
            exit
        ;;
        4)
            exit
        ;;
        esac
    done

}