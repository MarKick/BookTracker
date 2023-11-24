
### Rollout deployment
kubectl create -f booktracker_v3.yaml

###################################
### Set up minikube loadbalancer ###
###################################
# minikube tunnel # The tunnel command exposes the external IP directly to any program running on the host operating system.
# kubectl expose deployment booktracker --type=LoadBalancer --port=8080 # create kubernetes service with type loadbalancer
kubectl get svc # Check the external IP 
kubectl get pods # Get pods running

# open browser at http://REPLACE_WITH_EXTERNAL_IP:8080
## OR
# minikube service booktracker # This opens up a browser window that serves your app and shows the app's response.



# To delete previous deployment
kubectl delete --cascade='foreground' -f booktracker_v3.yaml