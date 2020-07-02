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

  let body;

  graphql(schema, '{ hello }', root).then((response) => {
    body = response;
    console.log('MY RESPONSE', response);
  });


  return {
    statusCode: 200,
    body: response;
    //body: `Oh my, Hello ${subject}!`,
  }
}
