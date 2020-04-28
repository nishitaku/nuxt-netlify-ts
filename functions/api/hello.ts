import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda'

interface HelloResponse {
  statusCode: number
  body: string
}

export const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const params = event.queryStringParameters
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello world`,
      requestId: context.awsRequestId || 'dummy',
      params
    })
  }

  callback(undefined, response)
}
