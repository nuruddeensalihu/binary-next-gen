import React, { PropTypes, Component } from 'react';

export default class DropDown extends Component {

	static propTypes = {
		shown: PropTypes.bool,
		onClose: PropTypes.func,
		children: PropTypes.any,
		style: PropTypes.object,
	};

	render() {
		const { shown, onClose, children, style } = this.props;

		if (!shown) return null;

		return (
			<div>
				{style	?
					<div
						style={style}
						className="drop-down"
						onClick={e => e.stopPropagation()}
					>
						{React.cloneElement(children, { onClose })}
					</div> :
					<div
						className="drop-down"
						onClick={e => e.stopPropagation()}
					>
						{React.cloneElement(children, { onClose })}
					</div>
				}
				<div className="full-screen-overlay" onClick={onClose} />
			</div>
		);
	}
}
