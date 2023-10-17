#!bin/zsh


WNH_LINKS="https://lea.hochschule-bonn-rhein-sieg.de/goto.php?target=crs_1072918&client_id=db_040811"

# cat InternOnly.txt | sd "[WNH]" '<a href="https://lea.hochschule-bonn-rhein-sieg.de/goto.php?target=crs_1072918&client_id=db_040811">WNH]</a>'  



cat InternOnly.txt | sd "\[WNH\]" "[<a href="$WNH_LINKS" >WNH</a>"  
