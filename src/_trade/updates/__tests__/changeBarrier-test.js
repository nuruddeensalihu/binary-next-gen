import { expect } from 'chai';
import changeBarrier from '../changeBarrier';

describe('changeBarrier', () => {
    it('should always return value without changing', () => {
        const newVal = 0.99999;
        const updatedBarrier = changeBarrier([newVal, newVal], {});
        expect(updatedBarrier.barrier).to.equal(0.99999);
        expect(updatedBarrier.barrier2).to.equal(0.99999);
    });
});
