import React, { PureComponent } from 'react';
// import MobileToolbarBack from '../mobile/MobileToolbarBack';
// import AnimatedPopup from '../containers/AnimatedPopup';
import NewsList from './NewsList';
// import ArticleFull from './ArticleFull';

export default class NewsCard extends PureComponent {

    props: {
        articles: any[],
    };

    static contextTypes = {
        router: () => undefined,
    };

    constructor(props) {
        super(props);
        this.state = {
            showArticle: false,
            params: { index: 0 },
        };
    }

    // onClickPreview = idx =>
    //     this.setState({ showArticle: true, params: { index: idx } });
    //
    // onClickBack = () =>
    //     this.setState({ showArticle: false, params: { index: 0 } });

    render() {
        const { articles } = this.props;
        // const { showArticle } = this.state;

        return (
            <div className="news-list-card scrollable">
                {/* <AnimatedPopup shown={showArticle}>
                    <MobileToolbarBack onClick={this.onClickBack} backBtnBarTitle="Back" />
                    <ArticleFull
                        articles={articles}
                        params={params}
                    />
                </AnimatedPopup> */}
                {/* {!showArticle && */}
                    <NewsList articles={articles} />
                {/* } */}
            </div>
        );
    }
}
