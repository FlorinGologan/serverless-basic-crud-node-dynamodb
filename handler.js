"use strict";

var AWS = require("aws-sdk");

let options = {};
if (process.env.IS_OFFLINE) {
  options = {
    region: "eu-west-1",
    endpoint: "http://localhost:8000"
  };
}

module.exports.createUser = async event => {
  var dynamodb = new AWS.DynamoDB.DocumentClient(options);
  var params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      code: "NA",
      name: "name",
      email: "email@com"
    }
  };

  try {
    await dynamodb.put(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Create user"
      },
      null,
      2
    )
  };
};

module.exports.listUsers = async event => {
  var dynamodb = new AWS.DynamoDB.DocumentClient(options);
  var params = {
    TableName: process.env.DYNAMODB_TABLE,
    KeyConditionExpression: "code = :s",
    ExpressionAttributeValues: {
      ":s": "NA"
    }
  };

  var list = [];

  try {
    list = await dynamodb.query(params).promise();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(list, null, 2)
  };
};
