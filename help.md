---
layout: page
title: 幫助
---

## 如何參與

## 格式說明

## 罕見字方案

中文有別於歐洲字母文字，字符量龐大，尤其是在整理古籍時，字符量更是驚人，現有的字體不足以顯示完全這些罕見字。比如這個：

![𩏶](https://cloud.githubusercontent.com/assets/290496/5556695/c6077c8c-8d1f-11e4-815d-60103c670626.png "http://glyphwiki.org/glyph/u293f6.svg")

這個字念 jiū。位於 Unicode CJK Ext-B: U+293F6，在錄入這個字時，使用如下格式：

```
<rare data-unicode="293F6" data-pinyin="jiū">米韋隹火</rare>
```

每本書我們會生成一套對應的罕見字字體，在網頁上時使用 Web Font 調用罕見字字體來顯示，在生成 EPUB
時將罕見字字體作爲 Embed Font 內置於 EPUB 文件內。
