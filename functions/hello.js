const { graphql, buildSchema } = require('graphql');

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'

  const schema = buildSchema(`
    type Query {
      hello: String
    }
` );

  console.log('SCHEMA:', schema);

  return {
    statusCode: 200,
    body: `Oh, Hello ${subject}!`,
  }
}
