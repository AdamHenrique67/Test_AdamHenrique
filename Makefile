start-app:
	@docker-compose up app
run-tests:
	@docker-compose up tests
destroy:
	@docker-compose down -v --rmi local