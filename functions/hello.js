const { graphql, buildSchema } = require('graphql');

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'

  const schema = buildSchema(`
    type Query {
      hello: String
    }
` );

  var root = {
    hello: () => {
      return 'Hello world!';
    }
  };

  graphql(schema, '{ hello }', root).then((response) => {
    console.log('MY RESPONSE', response);
  });


  return {
    statusCode: 200,
    body: `Oh my, Hello ${subject}!`,
  }
}
