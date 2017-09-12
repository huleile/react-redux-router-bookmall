# react-redux-router-bookmall
利用 react+redux+react-router-dom 搭建简易书城,页面高能请注意(巨丑无比会辣眼睛)

### 实现功能
- 图书管理:静态添加图书信息到本地,页面自动跳转到图书列表
- 图书列表:点击图书进入图书详情页,添加到书库自动跳转到我的书库
- 我的书库:展示收藏的图书信息
- axios获取数据: 通过axios 发送 ajax 请求获取服务器信息并展示
- 服务器是通过 express + postgre 搭建的此处未上传

### 如何运行
* git clone https://github.com/huleile/react-redux-router-bookmall.git
* cd react-redux-router-bookmall
* npm install
* npm run dev

### 所用到技术
* react
* redux
* react-redux
* react-router-dom
* axios
* redux-thunk

### 第三方库记录 待后续研究
* antd
* Immutable
* fetch
* nprogress
* github-markdown-css
* normalize.css
* redux-logger
* rc-queue-anim
* minimist
* copyfiles
* open
* phantomjs-prebuilt

#### 坑
* actions 获取第三方数据的方法
