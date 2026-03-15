# Mi API en Kubernetes

Proyecto que despliega una aplicación HTML usando:

- Docker
- Kubernetes
- Terraform
- Minikube

## Ejecutar proyecto

1. Iniciar minikube

minikube start

2. Construir imagen Docker

docker build -t mi-api .

3. Aplicar Terraform

terraform init
terraform apply

4. Obtener URL

minikube service mi-api-service --url
