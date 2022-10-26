<template>
  <div class="articleInfo-container">
    <van-cell>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="title-box">
            <span>{{ title }}</span>
            <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> 
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
            <img :src="item" alt="" class="thumb" v-for="(item, index) in cover.images" :key="index">
        </div>
      </template>
      <template #label>
        <div class="label-box">
            <span>作者 {{author}}&nbsp;&nbsp; {{comments}}评论 &nbsp;&nbsp; 发布日期 {{ pubdate }}</span>
            <!-- 关闭按钮 -->
            <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        comments: {
            // 通过数组为当前属性定义多种可能的类型
            type: [Number, String],
            default: '0'
        },
        pubdate: {
            type: String,
            default: ''
        },
        cover: {
            type: Object,
            default: function () {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.label-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.thumb {
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
}

.title-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.thumb-box {
    display: flex;
    justify-content: space-between;
}
</style>