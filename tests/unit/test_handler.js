    
'use strict';

const app = require('../../index.js');
const chai = require('chai');

const { expect } = chai;

const word = {
  name: 'hello world',
};

describe('Tests handler', function () {
    it('verifies successful response', async () => {
        const result = await app.handler(word,undefined,undefined);
        expect(result.body).to.be.equal('hello world');
        expect(result.statusCode).to.equal(200);
	
    });
});
