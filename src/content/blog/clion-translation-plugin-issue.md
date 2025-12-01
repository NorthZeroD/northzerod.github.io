---
title: CLion翻译插件不支持远程开发导致快速文档失效
description: CLion翻译插件不支持远程开发导致快速文档失效
pubDate: 2025-12-01T23:50:00+08:00
lastModDate: 2025-12-01T23:50:00+08:00
toc: true
share: false
giscus: true
ogImage: true
---

在使用 CLion + WSL远程开发 的时候，遇到光标悬浮在代码上不显示快速文档的问题，排查一圈发现，原来是 :link[Translation]{id=https://intellij-translation.yiiguxing.top} 插件尚未支持远程开发导致的。禁用后即可解决。

*见 :link[Issue#6266]{id=https://github.com/YiiGuxing/TranslationPlugin/issues/6266}*
