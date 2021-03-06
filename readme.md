## Serverless and Lambda

Basic CRUD implementation with: Node, DynamoDB, Serverless (local and ready for deploy)

*** This is not something ready for production. HAS NO VALIDATION!!! 

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
make install

make run
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
```

```
serverless offline start --migrate
```

### Commands to deploy:

```
serverless deploy --stage test --aws-profile personal
```

### Links
https://github.com/madedotcom/wishlist

https://aws.amazon.com/lambda/

https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html

https://serverless.com/
https://serverless.com/plugins/serverless-offline/
https://serverless.com/dynamodb/
https://serverless.com/plugins/serverless-dynamodb-local/

https://github.com/serverless/plugins

https://www.npmjs.com/package/aws-sdk
