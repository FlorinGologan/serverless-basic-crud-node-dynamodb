'use strict';

const AWS = require('aws-sdk');

let options = {};
if (process.env.IS_OFFLINE) {
  options = {
    region: 'eu-west-1',
    endpoint: 'http://localhost:8000'
  };
}

const dynamodb = new AWS.DynamoDB.DocumentClient(options);

module.exports.postUser = async event => {
  const item = event.body ? JSON.parse(event.body) : {};
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: item
  };

  try {
    await dynamodb.put(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(params)
  };
};

module.exports.putUser = async event => {
  const {code = ''} = event.pathParameters;
  const item = event.body ? JSON.parse(event.body) : {};
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {...item, code}
  };

  try {
    await dynamodb.put(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(params)
  };
};

module.exports.deleteUser = async event => {
  const {code = ''} = event.pathParameters;
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      code
    }
  };

  try {
    await dynamodb.delete(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(params)
  };
};

module.exports.getUser = async event => {
  const {code = ''} = event.pathParameters;
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    KeyConditionExpression: 'code = :s',
    ExpressionAttributeValues: {
      ':s': code
    }
  };

  let users = [];
  try {
    users = await dynamodb.query(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(users)
  };
};

module.exports.getUsers = async event => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE
  };

  let users = [];
  try {
    users = await dynamodb.scan(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(users)
  };
};
