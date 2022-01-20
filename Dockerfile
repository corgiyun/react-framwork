# 使用 node:14-alpine 基础镜像
# 带有 alpine 标签的基础镜像基于最小化的操作系统 alpine，拥有更小的体积
FROM node:14-alpine

ENV PROJECT_ENV production

# 许多 package 会根据此环境变量，做出不同的行为
# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量
# 注意: 该环境变量有时可能引起问题
# ENV NODE_ENV production

WORKDIR /code
ADD . /code

# http-server 用以起静态资源服务器
RUN npm install && npm run build && npm install -g http-server
EXPOSE 80

# create-react-app 中 build 为最后的静态资源目录
# 如果你不是使用 cra 构建的，此处的 ./build 需要更改为你的静态资源目录
CMD http-server ./build -p 80