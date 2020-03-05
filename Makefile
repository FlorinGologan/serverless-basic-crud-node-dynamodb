install-serverless:
	npm install -g serverless

install:
	npm install -g serverless
	serverless plugin install --name serverless-offline
	serverless plugin install --name serverless-dynamodb-local
	serverless dynamodb install
	npm install

run:
	serverless offline start --migrate

deploy:
	serverless deploy --region eu-west-1 --stage test --aws-profile personal

remove:
	serverless remove --region eu-west-1 --stage test --aws-profile personal