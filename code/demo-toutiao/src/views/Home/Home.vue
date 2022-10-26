<template>
  <div class="home-container">
    <van-nav-bar
      title="头条"
    />
    <van-pull-refresh v-model="isLoading" :disabled="this.finished" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ArticleInfo 
            v-for="item in artList" 
            :key="item.art_id" 
            :title="item.title"
            :author="item.aut_name"
            :comments="item.comm_count"
            :pubdate="item.pubdate"
            :cover="item.cover"
            >
            </ArticleInfo>
            <span v-if="this.finished===true" style="color: #969799; display:flex; justify-content: center">已经到底啦</span>
        </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {getArticleListAPI} from '@/api/ArticleAPI'
import ArticleInfo from '@/components/Article/ArticleInfo'

export default {
    data () {
        return {
            // 页码值
            page: 1,
            // 每页显示多少条数据
            limit: 10,
            // 文章内容信息
            artList: [],
            // 值为true不允许上拉加载
            loading: true,
            // 数据是否全部加载
            finished: false,
            // 下拉刷新是否结束
            isLoading: false
        }
    },
    components: {
        ArticleInfo
    },
    created () {
        this.initArticleList();
    },
    methods: {
        async initArticleList (isRefresh) {
            const {data: res} = await getArticleListAPI(this.page, this.limit);

            if (isRefresh) {
                // 是下拉刷新
                // 新数据加在原数组前面
                this.artList = [...res, ...this.artList];
                // 下拉刷新结束，值置为false，允许下次下拉刷新
                this.isLoading = false;
            } else {
                // 是上拉加载
                // ... 将数组中的内容拿出来，加载原数组后面
                this.artList.push(...res);
                // 请求完一次数据后，将loading设置为false，允许下一次请求
                this.loading = false;
            }

            // 判断数据是否全部加载完毕
            if (res.length === 0) {
                this.finished = true;
            }
        },
        onLoad () {
            // 加载下一页数据， page+1
            this.page++;
            this.initArticleList();
        },
        onRefresh () {
            this.page++;
            this.initArticleList(true);
        }
    }
}
</script>

<style lang="less" scoped>
::v-deep .van-nav-bar__content {
    height: 50px;
    background-color: #6495ED;
    .van-nav-bar__title {
        color: white;
        font-weight: 700;
        font-size: 18px;
    }
}
</style>