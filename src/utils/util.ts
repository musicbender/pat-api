import { HealthConfigType } from '@types';
import { BaseContext } from 'koa';
const { healthTypes } = require('@configs/healthkit.json');
const healthConfig = require('@configs/health.json');

export const restResponse = (
  ctx: BaseContext,
  httpCode = 200,
  message = 'success',
  data: object = {},
): void => {
  ctx.status = httpCode;
  ctx.body = { message, data };
};

export const convertToCamel = (str: string, pascal = false): string => {
  const converter = (matches) => matches[1].toUpperCase();
  let result = str.replace(/(\-\w)/g, converter);

  if (pascal) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
};

export const getHealthkitConfigs = (): HealthConfigType[] => {
  const invalidHkIds = ['systolic-blood-pressure', 'diastolic-blood-pressure'];
  const hkConfigs: HealthConfigType[] = Object.keys(healthTypes)
    .filter((hk: string) => {
      if (healthTypes[hk].disabled) return false;
      return invalidHkIds.indexOf(healthTypes[hk].id) < 0;
    })
    .map((hk: string) => healthTypes[hk]);

  hkConfigs.push(healthConfig.bloodPressure);
  return hkConfigs;
};
