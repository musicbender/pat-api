### About

This is my personal life API for tracking different data point of my life: health, goals, habits, whatevers! 

### Development

For development I use docker compose to spin up a local postgres database and the api itself.

### Production

In production, it uses Bitbucket Pipelens for CI/CD deployments, AWS ECR for container registry, and finally to Digital Ocean using its Kubernetes service. The API runs on a Kubernetes node along with a sidecar hat proxies to a GCP Postgres database. 
