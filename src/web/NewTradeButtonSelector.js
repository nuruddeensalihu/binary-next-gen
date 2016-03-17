import { createSelector } from 'reselect';

const newTrade = createSelector(
    [state => state.workspace.get('activeTradeIndex'), state => state.trades],
    (activeIndex, trades) => ({
        symbol: trades.getIn([activeIndex, 'symbol']),
        noOfTrades: trades.size,
    })
);

export default newTrade;
