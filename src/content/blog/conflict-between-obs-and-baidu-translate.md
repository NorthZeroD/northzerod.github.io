---
title: 记录一起OBS与百度翻译的冲突
description: 记录一起OBS与百度翻译的冲突
pubDate: 2025-10-25T18:00:00+08:00
lastModDate: 2025-10-25T18:30:00+08:00
toc: true
share: false
giscus: true
ogImage: true
---

在使用OBS插件:link[Input Overlay]{id=https://obsproject.com/forum/resources/input-overlay.552/}的时候，遇到输入叠层无法采集的问题，排查一圈发现是:link[百度翻译桌面端]{id=https://fanyi.baidu.com/home}造成的。

其实早就异象了，只是我没想到是百度翻译的问题（

先启动百度翻译再启动OBS，或反过来，都能感到明显卡顿（主要体现在光标移动会迟滞一小会，录制倒是正常）。二者只打开其一，就很顺畅了。
