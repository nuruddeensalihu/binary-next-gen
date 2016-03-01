import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as LiveData from '../_data/LiveData';
import SelectGroup from '../_common/SelectGroup';
import languages from '../_constants/languages';
import { updateAppConfig } from '../_actions/AppConfigActions';
import Perf from 'react-addons-perf';
import languagePickerSelector from '../web/languagePickerSelector';
import updatePriceProposalSubscription from '../_actions/TradeActions';

@connect(languagePickerSelector)
export default class LanguagePicker extends Component {

    static propTypes = {
        selected: PropTypes.oneOf(languages.map(ln => ln.value)),
        dispatch: PropTypes.func.isRequired,
        tradeIndexes: PropTypes.array.isRequired,
    };

    static defaultProps = {
        selected: 'EN',
    };

    updateLanguage(event) {
        const { dispatch, tradeIndexes } = this.props;
        dispatch(updateAppConfig('language', event.target.value));

        Object.keys(tradeIndexes).forEach(key => {
            dispatch(updatePriceProposalSubscription(key, null));
        });

        LiveData.changeLanguage(event.target.value);

        Perf.start();
        setTimeout(() => {
            Perf.stop();
            const measurements = Perf.getLastMeasurements();
            Perf.printInclusive(measurements);
            Perf.printWasted(measurements);
        }, 10000);
    }

    render() {
        const { selected } = this.props;
        return (
            <SelectGroup
                options={languages}
                value={selected}
                onChange={::this.updateLanguage}
                {...this.props}
            />
        );
    }
}
