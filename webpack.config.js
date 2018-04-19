let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./index.js',
    output: {
        path:path.resolve('dist'),
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.(css|less)$/,loader:'style-loader!css-loader!less-loader'},
            {test:/\.(jpg|png|gif)$/,loader:'url-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    resolve: {
        module: [
            'node_modules',
            path.resolve(__dirname, 'src/common'),
            path.resolve(__dirname, 'src/component')
        ]
    }
};