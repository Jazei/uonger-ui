# 卡片组件

### 示例
<m-card imgSrc="/1.jpg" summary="测试 card 组件"></m-card>

### 代码
```html
<m-card imgSrc="/1.jpg" summary="测试 card 组件"></m-card>
```

### Attribute
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | ---| --- | --- | --- | --- |
| width | 卡片宽度 | Number | false | - |
| imgSrc | 图片地址 | String | false | - |
| imgHeight | 图片高度 | Number | false | - |
| summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |