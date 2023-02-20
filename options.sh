#!/bin/bash


Green='\033[0;32m'
NC='\033[0m' # No Color
echo -e "I ${Green}love${NC} Stack Overflow"

echo "Seleccione el port forward"
echo -e " 1-${Green}Seguro${NC} \n 2-${Green}Cdt${NC},\n 3-${Green}Standard${NC},\n 4-${Green}Apertura${NC},\n 5-${Green}Salir${NC}"
read x



# contador=0
# termina=10
# while [ $termina -ge $contador ]
# do
#   echo $contador
#   let contador=$contador+1
# done
while [ $x != 5 ]
do
  case $x in
    1)
        source  sh/git.sh
        init
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