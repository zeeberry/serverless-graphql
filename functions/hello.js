const { graphql, buildSchema } = require('graphql');

exports.handler = async event => {

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

  return {
    statusCode: 200,
    body: body
  }
}
