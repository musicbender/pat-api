import { 
  AverageMpgType, 
  DrivingScoreType, 
  RefuelType,
  AverageMpgInputType, 
  AverageMpgInputUpdateType, 
} from '.';

export type CarConfigType = {
  id: string,
  modelID: string,
  disabled: boolean,
}

export type CarType = AverageMpgType | DrivingScoreType | RefuelType;
export type CarInputType = AverageMpgInputType;
export type CarInputUpdateType = AverageMpgInputUpdateType;