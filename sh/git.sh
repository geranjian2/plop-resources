
newBranch(){

# Sirve para generar una nueva rama para un nuevo desarrollo.
  echo hola
<<<<<<< Updated upstream
#   git stash save "feature-nuevo"
#   git fetch
#   git checkout main
#   git pull
  git add .
  git commit -m "Creación de rama $1"
=======
  git stash save "feature-nuevosss"
  git fetch
  git checkout main
  git pull
>>>>>>> Stashed changes
  git checkout -b "feature/$1"
  git branch
  git stash pop
  git add .
  git commit -m "Creación de rama $1"
  git push --set-upstream origin "feature$1"
  exit 0
}
init(){
    Green='\033[0;32m'
    NC='\033[0m' # No Color
    echo -e "I ${Green}love${NC} Stack Overflow"

    echo "Seleccione una opcion de git"
    echo -e " 1-${Green}feature${NC} \n 2-${Green}push${NC},\n 3-${Green}merge${NC},\n  5-${Green}Salir${NC}"
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
            cdt
            exit
        ;;
        3)
            standard
            exit
        ;;
        4)
            apertura
            exit
        ;;
        esac
    done

}