import http from '@/config/http';
/**
 * 获取首页默认地址
 */
export const cityGuess = () => http.get('/v1/cities', {
  type: 'guess'
})

/**
 * 获取首页热门城市
 */

export const hotcity = () => http.get('/v1/cities', {
  type: 'hot'
});

/**
 * 获取首页所有城市
 */

export const groupcity = () => http.get('/v1/cities', {
  type: 'group'
});

/**
 * 获取当前所在城市
 */

export const currentcity = number => http.get('/v1/cities/' + number);
