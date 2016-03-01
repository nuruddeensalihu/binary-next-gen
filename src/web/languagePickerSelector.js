import { createStructuredSelector } from 'reselect';

import { tradeIndexesSelector, selectedLanguageSelector } from '../_store/directSelectors';

export default createStructuredSelector({
    selected: selectedLanguageSelector,
    tradeIndexes: tradeIndexesSelector,
});
