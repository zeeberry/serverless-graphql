const { graphql, buildSchema } = require('graphql');

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'

  const schema = buildSchema(`
    type Query {
      hello: String
    }
` );

  const root = {
    hello: () => {
      return 'Hello world!';
    }
  };
  
  const body = await graphql(schema, '{ hello }', root).then((response) => {
    return JSON.stringify(response);
  });

  console.log('THE BODY', body);


  return {
    statusCode: 200,
    body: body
  }
}
