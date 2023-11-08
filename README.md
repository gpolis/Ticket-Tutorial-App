# NextJS 13.4 Ticket tutorial App!
- A Simple CRUD app using 13.4 app router
- Tech Stack
  - Tailwind CSS
  - fontawesome
  - MongoDB
  - Mongoose 

### Architecture
![Architecture](docs/architecture.svg)

#### Ticket App
 - Purpose: The primary purpose of the application is to facilitate the management of application support issues or tickets. It serves as a centralized system for tracking and handling these issues. The application relies on a Ticket API as its backend service. This API handles various operations, including fetching ticket data, creating new tickets, and updating ticket statuses.
 - Key Features:
   - Display Current Tickets: The application displays a list of current tickets along with their status. Users can easily see the tickets that are open or in progress.
   - Create New Tickets: Users can create new support tickets within the application. When creating a ticket, they can specify details such as the title, priority, and a description of the issue. 
   - Update Ticket Status: Users can update the status of a ticket. The available status options typically include "not started," "started," "in progress," and "done." This helps in tracking the progress of issue resolution.


#### Ticket API
- Purpose: The Backend API of the ticket tracking application is a crucial component responsible for handling data and business logic. This API relies on a Cloud MongoDB database to store and manage ticket-related data efficiently.
- Key Features:
    - Data Storage: The API stores all the ticket-related data, including ticket details, status, priority, and any other relevant information. This data is crucial for tracking and managing support tickets. 
    - Create Tickets: It provides endpoints for creating new support tickets. When a user submits a new ticket through the front-end interface, the API stores this ticket in the database. 
    - Update Ticket Status: The API allows users to update the status of a ticket, such as marking it as "not started," "started," "in progress," or "done." These status changes are also stored in the database. 
    - Retrieve Ticket Information: Users can request information about existing tickets, and the API fetches the relevant data from the database to display in the front-end application.

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
