<template>
    <div class="alert_back">
      <div class="alert_box">
        <div>
          <p>{{message}}</p>
          <div class="choose">
            <div @click="closethis">取消</div>
            <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo">确定</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import '@/assets/css/alert_font.css';

  export default {
      props:['message'],
      data:{

    },
    methods: {
        closethis(){
            this.$parent.is_show = false;
        },
        bindGetUserInfo(e) {
            var _this = this;
            if (e.mp.detail.rawData){
                //用户按了允许授权按钮
                console.log('用户按了允许授权按钮')
                console.log(e.mp.detail.userInfo);

                mpvue.setStorageSync('userInfo', e.mp.detail.userInfo)

                // 登录
                wx.login({
                    success: res => {
                        // 发送 res.code 到后台换取 openId, sessionKey, unionId
                        _this.$net.post({
                            url: 'wx/login',
                            data: {
                                'code': res.code,
                                'detail':e.mp.detail.userInfo
                            }
                        }).then(res => {
                            mpvue.setStorageSync('token', res.data.access_token)
                            mpvue.setStorageSync('openid', res.data.openid)
                            _this.$location.rediect('/pages/mine/main');

                        })
                    }
                })

            } else {
                //用户按了拒绝按钮
                console.log('用户按了拒绝按钮')
            }
        },
    }
  };
</script>
