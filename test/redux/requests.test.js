import axios from 'axios';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';

import {
  createActionNoArgs,
  createActionWithPayload,
  createActionWithPayloadAndMeta,
} from '../../src/redux/actions';
import * as Requests from '../../src/redux/requests';

const client = new MockAdapter(axios);
const createStore = configureMockStore([thunk]);

const Actions = {
  requestList: createActionNoArgs('request.list'),
  receiveList: createActionWithPayload('receive.list'),
  requestDetails: createActionNoArgs('request.details'),
  receiveDetails: createActionWithPayloadAndMeta('receive.details', ['alias']),
  requestStore: createActionNoArgs('request.store'),
  receiveStore: createActionWithPayloadAndMeta('receive.store', ['alias']),
  requestDelete: createActionNoArgs('request.delete'),
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

      return store.dispatch(Requests.requestList('/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.list',
        }, {
          type: 'receive.list',
          payload: [1, 2, 3],
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onGet('/foo').reply(404);

      return store.dispatch(Requests.requestList('/foo', Actions)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.be.deep.equal({ type: 'request.list' });
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.list');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 404');
      });
    });
  });

  describe('#requestDetails()', () => {
    it('Should receive detailed response', () => {
      client.onGet('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestDetails('alias', '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.details',
        }, {
          type: 'receive.details',
          meta: { alias: 'alias' },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onGet('/foo').reply(404);

      return store.dispatch(Requests.requestDetails('alias', '/foo', Actions)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.be.deep.equal({ type: 'request.details' });
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.details');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 404');
      });
    });
  });

  describe('#requestStore()', () => {
    it('Should execute PUT request', () => {
      client.onPut('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestStore('alias', { id: 1 }, '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.store',
        }, {
          type: 'receive.store',
          meta: { alias: 'alias' },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should execute POST request', () => {
      client.onPost('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestStore('alias', { id: 1 }, '/foo', Actions, true)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.store',
        }, {
          type: 'receive.store',
          meta: { alias: 'alias' },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should execute PUT request without alias', () => {
      client.onPut('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestStore(null, { id: 1 }, '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'receive.store',
          meta: { alias: null },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should execute POST request without alias', () => {
      client.onPost('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestStore(null, { id: 1 }, '/foo', Actions, true)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'receive.store',
          meta: { alias: null },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onPut('/foo').reply(404);

      return store.dispatch(Requests.requestStore('alias', { id: 1 }, '/foo', Actions)).catch((e) => {
        expect(e).to.have.nested.property('message', 'Request failed with status code 404');
        expect(e).to.have.nested.property('response.status', 404);
      }).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.be.deep.equal({ type: 'request.store' });
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.store');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 404');
      });
    });
  });

  describe('#requestPatch()', () => {
    it('Should receive patch response', () => {
      client.onPatch('/foo').reply(200, { id: 1 });

      return store.dispatch(Requests.requestPatch('alias', '/foo', { id: 1 }, Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.details',
        }, {
          type: 'receive.details',
          meta: { alias: 'alias' },
          payload: { id: 1 },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onPatch('/foo').reply(404);

      return store.dispatch(Requests.requestPatch('alias', '/foo', { id: 1 }, Actions)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.be.deep.equal({ type: 'request.details' });
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.details');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 404');
      });
    });
  });

  describe('#requestDelete()', () => {
    it('Should receive delete response', () => {
      client.onDelete('/foo').reply(204);

      return store.dispatch(Requests.requestDelete('alias', '/foo', Actions)).then(() => {
        expect(store.getActions()).to.be.deep.equal([{
          type: 'request.delete',
        }, {
          type: 'receive.delete',
          meta: { alias: 'alias' },
        }]);
      });
    });

    it('Should receive an error response', () => {
      client.onDelete('/foo').reply(404);

      return store.dispatch(Requests.requestDelete('alias', '/foo', Actions)).catch((e) => {
        expect(e).to.have.nested.property('message', 'Request failed with status code 404');
        expect(e).to.have.nested.property('response.status', 404);
      }).then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.be.deep.equal({ type: 'request.delete' });
        expect(actions[1]).to.have.nested.property('error', true);
        expect(actions[1]).to.have.nested.property('type', 'receive.delete');
        expect(actions[1]).to.have.nested.property('payload.message', 'Request failed with status code 404');
      });
    });
  });
});
