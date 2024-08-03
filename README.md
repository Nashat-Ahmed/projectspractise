###Deploying a Node.js Application in Kubernetes

###1-create dirctory named k8s-Node-webserver and getin this dir
###mkdir k8s-Node-webserver & cd  k8s-Node-webserver

###2-git pull https://github.com/Nashat-Ahmed/projectspractise/tree/main/k8s-node-service

###3-Dockrize the application 
###docker build -t (image-name) .
###docker run  (image-name)

###3-pusing to your dockerhub account 
###docker login 
###docker push youraccusername/image-name

###4-create deploymentfile
###kubectl create deployment (deployment-name) (image-name)

###5-kubectl expose deployment (deployment-name) --port=80 --target-port=80

###test the application on browser localhost:80/





