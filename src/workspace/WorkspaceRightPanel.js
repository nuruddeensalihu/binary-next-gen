import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
// import WatchlistContainer from '../watchlist/WatchlistContainer';
import TradingTimesContainer from '../trading-times/TradingTimesContainer';
import AssetIndexContainer from '../asset-index/AssetIndexContainer';
import NewsContainer from '../news/NewsContainer';
import VideoListContainer from '../video/VideoListContainer';
import PortfolioContainer from '../portfolio/PortfolioContainer';
import StatementContainer from '../statement/StatementContainer';
import DailyPricesContainer from '../daily-prices/DailyPricesContainer';
import AssetDetailsContainer from '../asset-details/AssetDetailsContainer';
import DigitStatsContainer from '../digit-stats/DigitStatsContainer';
import SettingsContainer from '../settings/SettingsContainer';

const components = [
	// WatchlistContainer,
	PortfolioContainer,
	StatementContainer,
	TradingTimesContainer,
	AssetIndexContainer,
	VideoListContainer,
	NewsContainer,
	DailyPricesContainer,
	AssetDetailsContainer,
	DigitStatsContainer,
	SettingsContainer,
];

export default class WorkspaceRightPanel extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		actions: PropTypes.object.isRequired,
		workspace: PropTypes.object.isRequired,
	};

	render() {
		const { actions, workspace } = this.props;

		const ActiveComponent = components[workspace.rightActiveTab];

		return (
			<div
				className="workspace-panel"
				style={{ width: workspace.rightPanelSize }}
			>
				<ActiveComponent actions={actions} />
			</div>
		);
	}
}
