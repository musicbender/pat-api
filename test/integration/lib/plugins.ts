import { SuperAgentRequest } from 'superagent';

export const gqlPlugin = (req: SuperAgentRequest): void => {
  req.set('x-api-key', process.env.PATAPI_API_KEY || '').set('Accept', 'application/json');
};
