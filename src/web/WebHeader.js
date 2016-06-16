import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Logo from 'binary-components/lib/Logo';
import WebSidebarContainer from '../sidebar/WebSidebarContainer';
import Balance from '../balance/BalanceContainer';
import LayoutPickerContainer from '../layout-picker/LayoutPickerContainer';

export default class WebHeader extends Component {

	shouldComponentUpdate = shouldPureComponentUpdate;

	static propTypes = {
		actions: PropTypes.object.isRequired,
	};

	render() {
		const { actions } = this.props;

		return (
			<div className="header inverse">
				<Logo />
				<LayoutPickerContainer actions={actions} />
				<Balance />
				<WebSidebarContainer />
			</div>
		);
	}
}
