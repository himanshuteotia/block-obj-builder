import BlockObjBuilder from '../index';

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
    const blockObj = new BlockObjBuilder();
    expect(blockObj.build()).toEqual({
      ...buildObj,
      blockId: expect.anything(),
      created: expect.anything()
    });
  });
});
