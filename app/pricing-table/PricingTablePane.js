import React from 'react';
import SegmentedControl from '../common/SegmentedControl';
import PricingTable from './PricingTable';
import PricingTableFilter from './PricingTableFilter';

export default class TradingTimesPane extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="pricing-table-content">
				<PricingTableFilter />
				<SegmentedControl
					segments={['Mid', 'Bid', 'Ask', 'Spread']}
					onSelect={this.onAssetSelect} />
				<PricingTable />
			</div>
		);
	}
}