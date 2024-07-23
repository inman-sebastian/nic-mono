build-services:
	@echo "Build service images"
	docker-compose -f docker-compose.services.yaml build

build-websites:
	@echo "Build website images"
	docker-compose -f docker-compose.websites.yaml build

start-services:
	@echo "Start service containers"
	docker-compose -f docker-compose.services.yaml up -d

start-websites:
	@echo "Start website containers"
	docker-compose -f docker-compose.websites.yaml up -d

stop-services:
	@echo "Stop service containers"
	docker-compose -f docker-compose.services.yaml stop

stop-websites:
	@echo "Stop website containers"
	docker-compose -f docker-compose.websites.yaml stop