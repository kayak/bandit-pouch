import axios from 'axios';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import {
  createActionWithMeta,
  createActionWithPayloadAndMeta,
} from '../../src/redux/actions';
import * as Requests from '../../src/redux/requests';

const client = new MockAdapter(axios);
const createStore = configureMockStore([thunk]);

const Actions = {
  requestList: createActionWithMeta('request.list', ['params']),
  receiveList: createActionWithPayloadAndMeta('receive.list', ['params']),
  requestDetails: createActionWithMeta('request.details', ['alias']),
  receiveDetails: createActionWithPayloadAndMeta('receive.details', ['alias']),
  requestStore: createActionWithMeta('request.store', ['alias']),
  receiveStore: createActionWithPayloadAndMeta('receive.store', ['alias']),
  requestDelete: createActionWithMeta('request.delete', ['alias']),
  receiveDelete: createActionWithPayloadAndMeta('receive.delete', ['alias']),
};

describe('redux/requests', () => {
  let store;

  beforeEach(() => {
    store = createStore({ loading: false, records: [] });
  });

  afterEach(() => {
    client.reset();
  });

  describe('#requestList()', () => {
    it('Should receive list actions', () => {
      client.onGet('/foo').reply(200, [1, 2, 3]);

      return store.dispatch(Requests.requestList('/foo', {}, Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.list',
          meta: { params: {} },
        }, {
          type: 'receive.list',
          meta: { params: {} },
          payload: [1, 2, 3],
        }]);
      });
    });

    it('Should receive list actions with query parameters', () => {
      client.onGet('/foo', { params: { id: 1 } }).reply(200, [1]);

      return store.dispatch(Requests.requestList('/foo', { id: 1 }, Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.list',
          meta: { params: { id: 1 } },
        }, {
          type: 'receive.list',
          meta: { params: { id: 1 } },
          payload: [1],
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onGet('/foo').reply(403);

      return store.dispatch(Requests.requestList('/foo', {}, Actions)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.nested.property('type', 'request.list');
        expect(actions[0]).to.have.deep.nested.property('meta.params', {});
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.list');
        expect(actions[1]).to.have.deep.nested.property('meta.params', {});
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 403');
      });
    });
  });

  describe('#requestDetails()', () => {
    it('Should receive detailed response', () => {
      client.onGet('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestDetails('alias', '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.details',
          meta: { alias: 'alias' },
        }, {
          type: 'receive.details',
          meta: { alias: 'alias' },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onGet('/foo').reply(401);

      return store.dispatch(Requests.requestDetails('alias', '/foo', Actions)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.nested.property('type', 'request.details');
        expect(actions[0]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.details');
        expect(actions[1]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 401');
      });
    });
  });

  describe('#requestStore()', () => {
    it('Should execute PUT request', () => {
      client.onPut('/foo', { id: 1 }).reply(200, { id: 1, updated: true });

      return store.dispatch(Requests.requestStore('alias', { id: 1 }, '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.store',
          meta: { alias: 'alias' },
        }, {
          type: 'receive.store',
          meta: { alias: 'alias' },
          payload: { id: 1, updated: true },
        }]);
      });
    });

    it('Should execute POST request', () => {
      client.onPost('/foo', { id: 1 }).reply(200, { id: 1, created: true });

      return store.dispatch(Requests.requestStore('alias', { id: 1 }, '/foo', Actions, true)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.store',
          meta: { alias: 'alias' },
        }, {
          type: 'receive.store',
          meta: { alias: 'alias' },
          payload: { id: 1, created: true },
        }]);
      });
    });

    it('Should execute PUT request without alias', () => {
      client.onPut('/foo', { id: 1 }).reply(200, { id: 1, updated: true });

      return store.dispatch(Requests.requestStore(null, { id: 1 }, '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'receive.store',
          meta: { alias: null },
          payload: { id: 1, updated: true },
        }]);
      });
    });

    it('Should execute POST request without alias', () => {
      client.onPost('/foo', { id: 1 }).reply(200, { id: 1, created: true });

      return store.dispatch(Requests.requestStore(null, { id: 1 }, '/foo', Actions, true)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'receive.store',
          meta: { alias: null },
          payload: { id: 1, created: true },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onPut('/foo', { id: 1 }).reply(500);

      return store.dispatch(Requests.requestStore('alias', { id: 1 }, '/foo', Actions)).catch((e) => {
        expect(e).to.have.nested.property('message', 'Request failed with status code 500');
        expect(e).to.have.nested.property('response.status', 500);
      }).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.nested.property('type', 'request.store');
        expect(actions[0]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.store');
        expect(actions[1]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 500');
      });
    });
  });

  describe('#requestPatch()', () => {
    it('Should receive patch response', () => {
      client.onPatch('/foo', { id: 1 }).reply(200, { id: 1, patched: true });

      return store.dispatch(Requests.requestPatch('alias', '/foo', { id: 1 }, Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.details',
          meta: { alias: 'alias' },
        }, {
          type: 'receive.details',
          meta: { alias: 'alias' },
          payload: { id: 1, patched: true },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onPatch('/foo', { id: 1 }).reply(500);

      return store.dispatch(Requests.requestPatch('alias', '/foo', { id: 1 }, Actions)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.nested.property('type', 'request.details');
        expect(actions[0]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.details');
        expect(actions[1]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 500');
      });
    });
  });

  describe('#requestDelete()', () => {
    it('Should receive delete response', () => {
      client.onDelete('/foo').reply(204);

      return store.dispatch(Requests.requestDelete('alias', '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.delete',
          meta: { alias: 'alias' },
        }, {
          type: 'receive.delete',
          meta: { alias: 'alias' },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onDelete('/foo').reply(503);

      return store.dispatch(Requests.requestDelete('alias', '/foo', Actions)).catch((e) => {
        expect(e).to.have.nested.property('message', 'Request failed with status code 503');
        expect(e).to.have.nested.property('response.status', 503);
      }).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.nested.property('type', 'request.delete');
        expect(actions[0]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.delete');
        expect(actions[1]).to.have.deep.nested.property('meta.alias', 'alias');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 503');
      });
    });
  });
});
