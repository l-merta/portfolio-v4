COMPOSE_DEV = docker compose -f docker-compose-dev.yml -p portfolio-dev
COMPOSE_PROD = docker compose -f docker-compose-prod.yml -p portfolio-prod

.PHONY: up-dev down-dev up-prod down-prod build-prod push-prod prune

## Start the dev server in Docker (http://localhost:3000)
up-dev:
	$(COMPOSE_DEV) down --remove-orphans
	$(COMPOSE_DEV) up -d

## Rebuild and start the dev container (after changing package.json)
up-dev-build:
	$(COMPOSE_DEV) down --remove-orphans
	$(COMPOSE_DEV) up --build -d

## Stop the dev server
down-dev:
	$(COMPOSE_DEV) down

## Start production (used by the deploy workflow on the server)
up-prod:
	$(COMPOSE_PROD) down --remove-orphans
	$(COMPOSE_PROD) up -d

## Stop production
down-prod:
	$(COMPOSE_PROD) down

## Build the production image locally
build-prod:
	$(COMPOSE_PROD) build

## Push the production image to Docker Hub
push-prod:
	docker login -u lmerta -p $(DOCKER_PASSWORD)
	$(COMPOSE_PROD) push

prune:
	docker system prune -f
