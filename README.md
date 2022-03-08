# Kubernetes
The real it project 
install docker
#docker install
write the javascript app.js
#app.js
write the dockerfile
#Dockerfile
conternarise the application by:
build the image from dockerfile
#docker build -t dubbel . (if in the same folder)
run the image to test app
#docker run --name dubbel-container -p 8080:8080 -d dubbel
curl localhost:8080    
send image dockerHub:
login to dockerHub:
docker login -u <username> -p <password>
docker push 1528762/dubbel (image-name)  
check the backend file:
#docker exec -it dubbel-container /bin/bash
use the: ps aux #check-for-files
ps aux | grep app.js   #check in the termininal
start kubernetes: deployment and services 
open a nordport
localhost:port

For the database: mongodb and wepapp: mongo-exporess
write deployment and services for mongobd
services points to deployment
interphase deployment with secrets
deployment, configmap,secrets and services for mongo-express
the architecture: deployment(mongodb)+secret(mongodb)<--services(mongodb)<---(deployment+ config + secrets)(mongo-express)<--services
minikube service mongo-service  #To assign external Ip to the app.
