import * as supertest from 'supertest';
import { SuperTest, Test } from 'supertest';
import { clearTable } from '@database';
import { GRAPHQL_PATH } from '@integration/lib/constants';
import { addMutation, getQuery, deleteMutation, updateMutation } from '@mocks/queries/cbc';
import * as moment from 'moment';
import { gqlPlugin } from '@integration/lib/plugins';
const inputs = require('@mocks/inputs/cbc.json');

/**
 * Cbc integreation tests
 *
 * @group integration/graphql/health
 */

describe('Health - Cbc', () => {
  const CONFIG_ID = 'cbc';
  const PLATELETS_ID = 'platelets';
  const MOCK_UNIT = 'Thousand_uL';
  const MOCK_SAMPLED_ON: string = moment().toISOString();
  const itemIDs: string[] = [];
  const plateletIDs: string[] = [];
  let request: SuperTest<Test>;

  beforeAll(async () => {
    await clearTable(PLATELETS_ID);
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
              sampledOn: MOCK_SAMPLED_ON,
            },
          },
        });

      const { response: data } = res.body.data.addCbc;

      if (data.id) itemIDs.push(data.id);
      if (data.platelets?.id) plateletIDs.push(data.platelets?.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.wbcCount).toEqual(9.1);
      expect(data.rbcCount).toEqual(4.19);
      expect(data.hematrocrit).toEqual(38.9);
      expect(data.hgb).toEqual(12.6);
      expect(data.mvc).toEqual(92.7);
      expect(data.mch).toEqual(30);
      expect(data.mchc).toEqual(32.3);
      expect(data.redCellDistributionWidth).toEqual(15.3);
      expect(data.meanPlateletVolume).toEqual(7.6);
      expect(data.granulocytes).toEqual(6.1);
      expect(data.lymphocytes).toEqual(2.5);
      expect(data.monocytes).toEqual(0.5);
      expect(data.neutrophil).toEqual(66.8);
      expect(data.lymphocytePercent).toEqual(27.7);
      expect(data.monocytePercent).toEqual(5.5);
      expect(data.plateletsId.length).toEqual(36);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id.length).toEqual(36);
      expect(data.platelets?.value).toEqual(1350);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId.length).toEqual(36);
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
              sampledOn: MOCK_SAMPLED_ON,
            },
          },
        });

      const { response: data } = res.body.data.addCbc;

      if (data.id) itemIDs.push(data.id);
      if (data.platelets?.id) plateletIDs.push(data.platelets?.id);

      expect(typeof data.id).toEqual('string');
      expect(data.id.length).toEqual(36);
      expect(data.wbcCount).toEqual(11);
      expect(data.rbcCount).toEqual(4.36);
      expect(data.hematrocrit).toEqual(40);
      expect(data.hgb).toEqual(15);
      expect(data.mvc).toEqual(90);
      expect(data.mch).toEqual(31.9);
      expect(data.mchc).toEqual(32);
      expect(data.redCellDistributionWidth).toEqual(10.1);
      expect(data.meanPlateletVolume).toEqual(7);
      expect(data.granulocytes).toEqual(5.7);
      expect(data.lymphocytes).toEqual(2.85);
      expect(data.monocytes).toEqual(0.22);
      expect(data.neutrophil).toEqual(70.1);
      expect(data.lymphocytePercent).toEqual(27.6);
      expect(data.monocytePercent).toEqual(5);
      expect(data.plateletsId.length).toEqual(36);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id?.length).toEqual(36);
      expect(data.platelets?.value).toEqual(1401);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId?.length).toEqual(36);
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

      const { response: data } = res.body.data.cbc;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.wbcCount).toEqual(9.1);
      expect(data.rbcCount).toEqual(4.19);
      expect(data.hematrocrit).toEqual(38.9);
      expect(data.hgb).toEqual(12.6);
      expect(data.mvc).toEqual(92.7);
      expect(data.mch).toEqual(30);
      expect(data.mchc).toEqual(32.3);
      expect(data.redCellDistributionWidth).toEqual(15.3);
      expect(data.meanPlateletVolume).toEqual(7.6);
      expect(data.granulocytes).toEqual(6.1);
      expect(data.lymphocytes).toEqual(2.5);
      expect(data.monocytes).toEqual(0.5);
      expect(data.neutrophil).toEqual(66.8);
      expect(data.lymphocytePercent).toEqual(27.7);
      expect(data.monocytePercent).toEqual(5.5);
      expect(data.plateletsId).toEqual(plateletIDs[0]);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id).toEqual(plateletIDs[0]);
      expect(data.platelets?.value).toEqual(1350);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId).toEqual(itemIDs[0]);
    });

    it('query for item 2', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { id: itemIDs[1] },
        });

      const { response: data } = res.body.data.cbc;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.wbcCount).toEqual(11);
      expect(data.rbcCount).toEqual(4.36);
      expect(data.hematrocrit).toEqual(40);
      expect(data.hgb).toEqual(15);
      expect(data.mvc).toEqual(90);
      expect(data.mch).toEqual(31.9);
      expect(data.mchc).toEqual(32);
      expect(data.redCellDistributionWidth).toEqual(10.1);
      expect(data.meanPlateletVolume).toEqual(7);
      expect(data.granulocytes).toEqual(5.7);
      expect(data.lymphocytes).toEqual(2.85);
      expect(data.monocytes).toEqual(0.22);
      expect(data.neutrophil).toEqual(70.1);
      expect(data.lymphocytePercent).toEqual(27.6);
      expect(data.monocytePercent).toEqual(5);
      expect(data.plateletsId).toEqual(plateletIDs[1]);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id).toEqual(plateletIDs[1]);
      expect(data.platelets?.value).toEqual(1401);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId).toEqual(itemIDs[1]);
    });

    it('query for item by date', async () => {
      const res = await request
        .post(GRAPHQL_PATH)
        .use(gqlPlugin)
        .send({
          query: getQuery,
          variables: { date: MOCK_SAMPLED_ON },
        });

      const { response: data } = res.body.data.cbc;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.wbcCount).toEqual(9.1);
      expect(data.rbcCount).toEqual(4.19);
      expect(data.hematrocrit).toEqual(38.9);
      expect(data.hgb).toEqual(12.6);
      expect(data.mvc).toEqual(92.7);
      expect(data.mch).toEqual(30);
      expect(data.mchc).toEqual(32.3);
      expect(data.redCellDistributionWidth).toEqual(15.3);
      expect(data.meanPlateletVolume).toEqual(7.6);
      expect(data.granulocytes).toEqual(6.1);
      expect(data.lymphocytes).toEqual(2.5);
      expect(data.monocytes).toEqual(0.5);
      expect(data.neutrophil).toEqual(66.8);
      expect(data.lymphocytePercent).toEqual(27.7);
      expect(data.monocytePercent).toEqual(5.5);
      expect(data.plateletsId).toEqual(plateletIDs[0]);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id).toEqual(plateletIDs[0]);
      expect(data.platelets?.value).toEqual(1350);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId).toEqual(itemIDs[0]);
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

      const { response: data } = res.body.data.updateCbc;

      expect(data.id).toEqual(itemIDs[0]);
      expect(data.wbcCount).toEqual(5);
      expect(data.rbcCount).toEqual(4.5);
      expect(data.hematrocrit).toEqual(39.75);
      expect(data.hgb).toEqual(18);
      expect(data.mvc).toEqual(92.7);
      expect(data.mch).toEqual(30);
      expect(data.mchc).toEqual(32.3);
      expect(data.redCellDistributionWidth).toEqual(15.3);
      expect(data.meanPlateletVolume).toEqual(7.6);
      expect(data.granulocytes).toEqual(6.1);
      expect(data.lymphocytes).toEqual(2.5);
      expect(data.monocytes).toEqual(0.5);
      expect(data.neutrophil).toEqual(66.8);
      expect(data.lymphocytePercent).toEqual(27.7);
      expect(data.monocytePercent).toEqual(5.5);
      expect(data.plateletsId).toEqual(plateletIDs[0]);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id).toEqual(plateletIDs[0]);
      expect(data.platelets?.value).toEqual(1350);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId).toEqual(itemIDs[0]);
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

      const { response: data } = res.body.data.updateCbc;

      expect(data.id).toEqual(itemIDs[1]);
      expect(data.wbcCount).toEqual(11);
      expect(data.rbcCount).toEqual(4.36);
      expect(data.hematrocrit).toEqual(40);
      expect(data.hgb).toEqual(15);
      expect(data.mvc).toEqual(90);
      expect(data.mch).toEqual(31.9);
      expect(data.mchc).toEqual(32);
      expect(data.redCellDistributionWidth).toEqual(10.1);
      expect(data.meanPlateletVolume).toEqual(7);
      expect(data.granulocytes).toEqual(5.7);
      expect(data.lymphocytes).toEqual(2.85);
      expect(data.monocytes).toEqual(0.22);
      expect(data.neutrophil).toEqual(70.1);
      expect(data.lymphocytePercent).toEqual(27.6);
      expect(data.monocytePercent).toEqual(5);
      expect(data.plateletsId).toEqual(plateletIDs[1]);
      expect(moment(data.sampledOn).isValid()).toBeTruthy();
      expect(moment(data.createdOn).isValid()).toBeTruthy();
      expect(moment(data.updatedOn).isValid()).toBeTruthy();
      expect(data.configID).toEqual(CONFIG_ID);
      expect(data.platelets?.id).toEqual(plateletIDs[1]);
      expect(data.platelets?.value).toEqual(1500);
      expect(data.platelets?.unit).toEqual(MOCK_UNIT);
      expect(moment(data.platelets?.sampledOn).isValid()).toBeTruthy();
      expect(data.platelets?.cbcId).toEqual(itemIDs[1]);
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

      const { response: data } = res.body.data.deleteCbc;

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

      const { response: data } = res.body.data.deleteCbc;

      expect(res.status).toEqual(200);
      expect(data.id).toEqual(itemIDs[1]);
      expect(data.configID).toEqual(CONFIG_ID);
    });
  });
});
