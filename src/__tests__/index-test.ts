import BlockObjBuilder from '../index';
const ISO_DATE_STRING = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
const OBJECT_ID_STRING = /^[a-f\d]{24}$/i;

const buildObj = {
  blockId: '5f81dcd62c77cd23383566b6',
  content: {},
  created: '2020-10-10T16:09:58.300Z',
  group: 'built-at-runtime',
  meta: {},
  name: 'built-at-runtime',
  version: 2
};
describe('Block builder obj', () => {
  it('BlockTextManager', async () => {
    const blockBuilderObj = new BlockObjBuilder();
    const blockObj = blockBuilderObj.build();
    expect(buildObj).toEqual({
      ...blockObj,
      blockId: expect.stringMatching(OBJECT_ID_STRING),
      created: expect.stringMatching(ISO_DATE_STRING)
    });
  });
});
