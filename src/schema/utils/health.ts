import { addHealthItem, updateHealthItem } from '@controllers/health';
import { HealthType, HealthInputType, HealthInputUpdateType } from '@schema/types';

export const baseAddHealthOptions = {
  type: HealthType,
  inputType: HealthInputType,
  controller: addHealthItem,
};

export const baseUpdateHealthOptions = {
  type: HealthType,
  inputType: HealthInputUpdateType,
  controller: updateHealthItem,
};
