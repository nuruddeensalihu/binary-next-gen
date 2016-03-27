import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import VideoList from './VideoList';
import immutableChildrenToJS from '../_utils/immutableChildrenToJS';

import videoSelectors from './VideoSelectors';

@connect(videoSelectors)
export default class VideoListContainer extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <VideoList {...immutableChildrenToJS(this.props)} />
        );
    }
}
