import React, { PropTypes, Component } from 'react';
import dateToDateString from 'binary-utils/lib/dateToDateString';
import todayLocaleString from 'binary-utils/lib/todayLocaleString';
import oneYearAfterStr from 'binary-utils/lib/oneYearAfterStr';
import InputGroup from 'binary-components/lib/InputGroup';
import MarketSubmarketPickerContainer from '../asset-picker/MarketSubmarketPickerContainer';
import TradingTimesTable from './TradingTimesTable';

export default class TradingTimesCard extends Component {

	static propTypes = {
		actions: PropTypes.object.isRequired,
		assets: PropTypes.array.isRequired,
		tradingTimes: PropTypes.array.isRequired,
		tradingTimesFilter: PropTypes.object.isRequired,
	};

	assetMatchFilter(symbolName, filter) {
		const { assets } = this.props;
		const assetObj = assets.find(x => x.symbol === symbolName);
		const returnObj = assetObj ? (assetObj.market === filter || assetObj.submarket === filter) : null;
		return returnObj;
	}

	render() {
		const { actions, tradingTimes, tradingTimesFilter } = this.props;
		const filter = tradingTimesFilter.filter;
		const tradingTimesDate = tradingTimesFilter.date;

		return (
			<div className="trading-times-card">
				<div className="trading-times-filter">
					<MarketSubmarketPickerContainer
						onChange={x => actions.updateTradingTimesFilter(x)}
						allOptionShown={false}
						value={filter}
					/>
					<InputGroup
						type="date"
						defaultValue={dateToDateString(tradingTimesDate)}
						min={todayLocaleString()}
						max={oneYearAfterStr()}
						className="trading-times-date-picker"
						onChange={x => actions.updateTradingTimesDate(x.target.value)}
					/>
				</div>
				<TradingTimesTable
					{...this.props}
					key={filter}
					times={tradingTimes.filter(a => ::this.assetMatchFilter(a.symbol, filter))}
				/>
			</div>
		);
	}
}
