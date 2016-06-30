var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH  = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH= path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry : path.resolve(SRC_PATH, 'index.jsx'),
    output : {
        path : BUILD_PATH,
        filename : 'bundle.js'
    },
    resolve : {
        extensions : ['', '.js', '.jsx']
    },
    module : {
        preLoaders : [
            {
                text : /\.jsx?$/,
                include : SRC_PATH,
                loader : 'jshint-loader'
            }
        ],
        loaders : [
            {
                test : /\.jsx?$/,
                loader : 'babel',
                include : SRC_PATH,
                query : {
                    presets : ['es2015', 'react']
                }
            },
            {
                test : /\.css/,
                loaders : ['style', 'css']
            }
        ]
    },
    jshint : {
        'esnext' : true
    }
};
