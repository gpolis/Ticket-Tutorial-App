# NextJS 13.4 Ticket tutorial App!
- A Simple CRUD app using 13.4 app router
- Tech Stack
  - Tailwind CSS
  - fontawesome
  - MongoDB
  - Mongoose 

### Prerequisites:
 - [Docker](https://docs.docker.com/engine/install/) or [Docker alternative - Colima](https://github.com/abiosoft/colima)
 - [Minikube](https://minikube.sigs.k8s.io/docs/start/)
 - [Helm](https://helm.sh/docs/intro/install/)
 - [kubectl](https://kubernetes.io/docs/tasks/tools/)
 - IDE and JDK

 ### Following below steps to deploy this application on Kubernetes cluster (minikube):
1. start minikube using ``` minikube start --driver=docker ```
2. To enable ingress on minikube run following command :  ``` minikube addons enable ingress ```  [Command reference 1](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)  [Ref 2](https://minikube.sigs.k8s.io/docs/handbook/addons/ingress-dns/)
3. Verify ingress controller is running :  ``` kubectl get pods -n ingress-nginx ```
4. Create secret using ``` kubectl create secret generic mongodb-secret \
   --from-literal=MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxxxx.mongodb.net/TicketDB ``` replace MONGODB_URI as per your Cloud Mongo DB credentials
4. Next install and deploy helm chart on cluster : 
      - ``` helm install ticket-app ticket-app-chart ```
      - ``` helm install ticket-api ticket-api-chart ```
5. Verify ingress service using : ``` kubectl get ingress ```
6. Next add entry in ``` /etc/hosts ``` file
     - run ``` sudo vi /etc/hosts ```
     - enter password
     - press ``` i ``` key on keyboard
     - add entry : ``` 127.0.0.1  ticket-app.com ```
     - add entry : ``` 127.0.0.1  ticket-api.com ```
     - press ``` Esc ``` key on keyboard
     - press ``` :wq ```
7. verify changes using ``` cat /etc/hosts ```
8. Enable tunnel running command : ``` minikube tunnel ```
9. Then call url in browser : http://ticket-app.com
10. Stop minikube using : ``` minikube stop ``` 
