import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { HTTP_NOT_ACCEPTABLE, searchText } from './http_helper';
import { IHttpResponse } from './types';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  if (!event.queryStringParameters || !event.queryStringParameters.name) {
    return formatJSONResponse({
      message: `Mandatory query parameter not provided`,
    }, HTTP_NOT_ACCEPTABLE);
  }

  const result: IHttpResponse = await searchText(event.queryStringParameters.name);
  if (result.status == 200) {
    return formatJSONResponse({ message: JSON.parse(result.message) }, result.status);
  } else {
    return formatJSONResponse({ message: result.message }, result.status);
  }
  
}

export const main = middyfy(hello);
