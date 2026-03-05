/*
 *
 *
脚本功能：百度网盘 首页精简 + 我的页面去广告 + Banner清理
软件版本：百度网盘
下载地址：App Store
脚本作者：AI整理
更新时间：2026-03
电报频道：
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# >百度网盘 首页精简 + 我的页面去广告
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/proxy\/guide url script-response-body https://raw.githubusercontent.com/xtdzzzz-ctrl/ziyonn/refs/heads/main/hupi.js
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url script-response-body https://raw.githubusercontent.com/xtdzzzz-ctrl/ziyonn/refs/heads/main/hupi.js
^https?:\/\/pan\.baidu\.com\/api\/.* url script-response-body https://raw.githubusercontent.com/xtdzzzz-ctrl/ziyonn/refs/heads/main/hupi.js


[mitm]
hostname = pan.baidu.com,*.baidu.com

*
*
*/


let body = $response.body;

// 首页 banner 清理
body = body.replace(/"banner_list":\[[\s\S]*?\]/g, '"banner_list":[]');

// 活动入口清理
body = body.replace(/"activity_list":\[[\s\S]*?\]/g, '"activity_list":[]');

// 推荐服务
body = body.replace(/"recommend_list":\[[\s\S]*?\]/g, '"recommend_list":[]');

// 我的页面广告卡片
body = body.replace(/"card_list":\[[\s\S]*?\]/g, '"card_list":[]');

// 广告模块
body = body.replace(/"ad_list":\[[\s\S]*?\]/g, '"ad_list":[]');

// VIP推广banner
body = body.replace(/"vip_banner":\{[\s\S]*?\}/g, '"vip_banner":{}');

// 活动弹窗
body = body.replace(/"popup":\{[\s\S]*?\}/g, '"popup":{}');

// 推荐入口
body = body.replace(/"entrance_list":\[[\s\S]*?\]/g, '"entrance_list":[]');

// 开屏广告
body = body.replace(/"splash_ad":\{[\s\S]*?\}/g, '"splash_ad":{}');

// 通用广告字段
body = body.replace(/"ad":true/g, '"ad":false');
body = body.replace(/"advert":true/g, '"advert":false');

// 错误码统一成功
body = body.replace(/"code":\d+/g, '"code":200');

$done({ body });