const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const gutil = require('gulp-util');

const app = express();
const compiler = webpack(config);

app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'styles'),
    dest: path.join(__dirname, 'www'),
}));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static('www'));

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'www/index.html'))
);


app.listen(3000, 'localhost', err => {
    if (err) {
        gutil.log(err);
        return;
    }

    gutil.log('Listening at http://localhost:3000');
});
