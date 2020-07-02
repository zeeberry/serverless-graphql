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

  let body = "Hii";

  graphql(schema, '{ hello }', root).then((response) => {
    body = response;
    console.log('THE BODY AFTER THEN', body);
  });

  console.log('THE BODY', body);


  return {
    statusCode: 200,
    body: `Oh my god, Hello ${subject}!`,
  }
}
