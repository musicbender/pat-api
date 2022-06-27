import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import { addMutation, getQuery, deleteMutation, updateMutation } from '@mocks/queries/activity';
import * as moment from 'moment';
import { gqlPlugin } from '@integration/lib/plugins';
const inputs = require('@mocks/inputs/activity.json');

/**
 * Activity integreation tests
 *
 * @group integration/graphql/health
 */

describe('Health - Activity', () => {
  const CONFIG_ID = 'activity';
  const MOCK_SAMPLED_ON_1: string = moment().toISOString();
  const MOCK_SAMPLED_ON_2: string = moment().subtract(3, 'days').toISOString();
  let itemIDs: string[] = [];
  let request: SuperTest<Test>;

  beforeAll(async () => {
    await clearTable(CONFIG_ID);
  });

  beforeEach(async () => {
    request = supertest(globalThis.patApiServer);
  });

  describe('create mutation', () => {
    it('works with input variation 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: {
              ...inputs.addMutation[0],
              sampledOn: MOCK_SAMPLED_ON_1,
            },
          },
        });

      const { response: data } = res.body.data.addActivity;

      if (data.id) itemIDs = [...itemIDs, data.id];

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.energy).toEqual(226);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(56);
      expect(data.energyComplete).toEqual(false);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(8);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(15);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(50);
      expect(data.exerciseComplete).toEqual(false);
      expect(data.ringsProgress).toEqual(72);
      expect(data.ringsComplete).toEqual(false);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('works with input variation 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: addMutation,
          variables: {
            input: {
              ...inputs.addMutation[1],
              sampledOn: MOCK_SAMPLED_ON_2,
            },
          },
        });

      const { response: data } = res.body.data.addActivity;

      if (data.id) itemIDs = [...itemIDs, data.id];

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.energy).toEqual(400);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(100);
      expect(data.energyComplete).toEqual(true);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(12);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(30);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(100);
      expect(data.exerciseComplete).toEqual(true);
      expect(data.ringsProgress).toEqual(100);
      expect(data.ringsComplete).toEqual(true);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('query', () => {
    it('query for item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { id: itemIDs[0] },
        });

      const { response: data } = res.body.data.activity;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.energy).toEqual(226);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(56);
      expect(data.energyComplete).toEqual(false);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(8);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(15);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(50);
      expect(data.exerciseComplete).toEqual(false);
      expect(data.ringsProgress).toEqual(72);
      expect(data.ringsComplete).toEqual(false);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('query for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.activity;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.energy).toEqual(400);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(100);
      expect(data.energyComplete).toEqual(true);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(12);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(30);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(100);
      expect(data.exerciseComplete).toEqual(true);
      expect(data.ringsProgress).toEqual(100);
      expect(data.ringsComplete).toEqual(true);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('query for item by date', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { date: MOCK_SAMPLED_ON_1 },
        });

      const { response: data } = res.body.data.activity;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.energy).toEqual(226);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(56);
      expect(data.energyComplete).toEqual(false);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(8);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(15);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(50);
      expect(data.exerciseComplete).toEqual(false);
      expect(data.ringsProgress).toEqual(72);
      expect(data.ringsComplete).toEqual(false);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('update mutation', () => {
    it('can change value for item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: updateMutation,
          variables: {
            input: inputs.updateMutation[0],
            id: itemIDs[0],
          },
        });

      const { response: data } = res.body.data.updateActivity;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.energy).toEqual(226);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(56);
      expect(data.energyComplete).toEqual(false);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(8);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(30);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(100);
      expect(data.exerciseComplete).toEqual(true);
      expect(data.ringsProgress).toEqual(72);
      expect(data.ringsComplete).toEqual(false);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can change value for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: updateMutation,
          variables: {
            input: inputs.updateMutation[1],
            id: itemIDs[1],
          },
        });

      const { response: data } = res.body.data.updateActivity;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.energy).toEqual(399);
      expect(data.energyUnit).toEqual('kcal');
      expect(data.energyGoal).toEqual(400);
      expect(data.energyProgress).toEqual(99);
      expect(data.energyComplete).toEqual(false);
      expect(data.standHours).toEqual(12);
      expect(data.standProgress).toEqual(100);
      expect(data.standGoal).toEqual(12);
      expect(data.standComplete).toEqual(true);
      expect(data.exerciseMinutes).toEqual(30);
      expect(data.exerciseGoal).toEqual(30);
      expect(data.exerciseProgress).toEqual(100);
      expect(data.exerciseComplete).toEqual(true);
      expect(data.ringsProgress).toEqual(99);
      expect(data.ringsComplete).toEqual(false);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });

  describe('delete mutation', () => {
    it('can remove item 1', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { id: itemIDs[0] },
        });

      const { response: data } = res.body.data.deleteActivity;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[0]);
      expect(data.configID).toEqual(CONFIG_ID);
    });

    it('can remove item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: deleteMutation,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.deleteActivity;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[1]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});
