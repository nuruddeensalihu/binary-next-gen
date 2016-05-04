import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import DropDown from '../containers/DropDown';
import AssetPickerContainer from './AssetPickerContainer';
import layoutHeight from './layoutAssetPickerHeight';
export default class AssetPickerDropDown extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    static propTypes = {
        actions: PropTypes.object.isRequired,
        compact: PropTypes.bool,
        index: PropTypes.number.isRequired,
        selectedSymbol: PropTypes.string.isRequired,
        selectedSymbolName: PropTypes.string.isRequired,
        tradesCount: PropTypes.number.isRequired,
        layoutN: PropTypes.number.isRequired,
    };

    static contextTypes = {
        router: React.PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            dropdownShown: false,
        };
    }

    openAssetPicker() {
        const { compact } = this.props;
        const { router } = this.context;
        if (!compact) {
            this.setState({ dropdownShown: true });
        } else {
            router.push('asset-picker');
        }
    }

    render() {
        const { actions, index, selectedSymbol, selectedSymbolName, tradesCount, layoutN } = this.props;
        const { dropdownShown } = this.state;
        const layoutPattern = layoutHeight(`layout${tradesCount}${layoutN}`);
        const pattern = layoutPattern.pattern;
        const layout = layoutPattern.layout;
        console.log('the x is', pattern);
        const style = {
            height: (90 / pattern) + '%',
        };
        const defaultStyle = {
            height: 45 + '%',
        };
        console.log('the style is', style);
        const isExist = layout.indexOf(index);
        return (
            <div>
             {isExist > -1 ?
                <DropDown
                    shown={dropdownShown}
                    onClose={() => this.setState({ dropdownShown: false })}
                    style={style}
                >
                    <AssetPickerContainer
                        actions={actions}
                        tradeIdx={index}
                        selectedAsset={selectedSymbol}
                    />
                </DropDown>

                :
                <DropDown
                    shown={dropdownShown}
                    onClose={() => this.setState({ dropdownShown: false })}
                >
                    <AssetPickerContainer
                        actions={actions}
                        tradeIdx={index}
                        selectedAsset={selectedSymbol}
                    />
                </DropDown>
             }
                <div
                    className="picker-label"
                    onMouseDown={::this.openAssetPicker}
                >
                    {selectedSymbolName}
                </div>
            </div>
        );
    }
}
