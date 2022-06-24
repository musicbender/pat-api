import { addHealthKitItem, updateHealthKitItem } from '@controllers/healthkit';
import { HealthKitType, HealthKitInputType, HealthKitInputUpdateType } from '@schema/types';

export const baseAddHealthkitOptions = {
  type: HealthKitType,
  inputType: HealthKitInputType,
  controller: addHealthKitItem,
};

export const baseUpdateHealthkitOptions = {
  type: HealthKitType,
  inputType: HealthKitInputUpdateType,
  controller: updateHealthKitItem,
};
