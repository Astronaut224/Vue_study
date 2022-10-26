import request from "@/utils/request";

// 按需向外导出一个API函数
export const getArticleListAPI = (_page, _limit) => {
    return request.get('/articles', {params: {
        _page: _page,
        _limit: _limit
    }})
}