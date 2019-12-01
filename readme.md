## Serverless and Lambda

Basic CRUD implementation with: Node, DynamoDB, Serverless (local and ready for deploy)

## Prerequisite

```
- AWS CLI -> to be able to deploy
aws --version
=> brew install awscli

- NPM/Node
node -v
npm -v
=> brew install node

-  Serverless Framework
serverless -v
=> npm install -g serverless

- Java -> for dynamodb local
java -version
=> https://java.com/en/download/mac_download.jsp
```

### Commands to setup aws:

```
aws configure --profile=personal
    AWS Access Key ID [****************S55Q]:
    AWS Secret Access Key [****************3iU0]:
    Default region name [eu-west-1]:
    Default output format [None]:
aws sts get-caller-identity --profile=personal
```

### Commands to run project locally:

```
npm install -g serverless

serverless plugin install --name serverless-offline

serverless dynamodb install
serverless plugin install --name serverless-dynamodb-local

npm install

serverless offline start --migrate
```

### Commands for running a fresh new project local:

```
serverless --help
serverless create --template
serverless create --template aws-nodejs
```

```
serverless plugin install --name serverless-offline
```

```
serverless plugin install --name serverless-dynamodb-local
serverless dynamodb install
```

```
npm init --yes
npm install -save aws-sdk
npm install --save aws-lambda-multipart-parser
```

```
serverless offline start --migrate
```

### Commands to deploy:

```
serverless deploy --stage test --aws-profile personal
```
