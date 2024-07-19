dev-build:
	@echo "Build dev images"
	docker-compose -f docker-compose.dev.yaml build

dev-start:
	@echo "Start dev containers"
	docker-compose -f docker-compose.dev.yaml up -d

dev-stop:
	@echo "Stop dev containers"
	docker-compose -f docker-compose.dev.yaml stop