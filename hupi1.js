/*
 *
 *
脚本功能：百度网盘 去掉首页Tab + 我的页面隐藏游戏中心
软件版本：百度网盘
更新时间：2026
*******************************

[rewrite_local]

# Tab栏配置
^https?:\/\/pan\.baidu\.com\/api\/.* url script-response-body https://raw.githubusercontent.com/xtdzzzz-ctrl/ziyonn/refs/heads/main/hupi2.js

# 我的页面
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/proxy\/guide url script-response-body https://raw.githubusercontent.com/xtdzzzz-ctrl/ziyonn/refs/heads/main/hupi2.js


[mitm]
hostname = pan.baidu.com,*.baidu.com

*
*
*/


let body = $response.body;


// 删除首页tab
body = body.replace(/"tab_id":"home".*?}/g,"");

body = body.replace(/"tabName":"首页".*?}/g,"");

body = body.replace(/"home":\{[\s\S]*?\}/g,"");


// 删除游戏中心
body = body.replace(/"gameCenter":\{[\s\S]*?\}/g,"");
body = body.replace(/"game_center":\{[\s\S]*?\}/g,"");
body = body.replace(/"game_list":\[[\s\S]*?\]/g,"[]");


// 删除游戏入口
body = body.replace(/"title":"游戏中心".*?}/g,"");


// 修复JSON
body = body.replace(/,\s*,/g,",");
body = body.replace(/\[\s*,/g,"[");

$done({body});
