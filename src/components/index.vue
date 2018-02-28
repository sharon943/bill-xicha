
<template>
  <div>
  </div>
</template>
<script>
import global from './global.vue'
export default {
  name: 'index',
  data () {
    return {
      code: '',
      mess: '',
    }
  },
  computed:{

  },
  created(){
    this.storeId=global.storeId
    this.request()
  },
  methods:{
    request(){

// var that=this
      // $(document).ready(function(){ console.log("ready")})
      var redirectUrl = encodeURIComponent(global.API+"/bill/index.html#/heytea");

      // fetch('https://api.vi-ni.com/webapi/v1/weixin/codeByOnlyOpenId/'+redirectUrl+'/376?scope=snsapi_userinfo', {
      //   method:'GET',
      //   mode: 'cors',
      // }).then(res => res.json()).then((d => {
      //
      //     console.log(d)
      //     var url=d.oauth_url
      //     location.href=url
      //
      // }))
      this.$http.get(global.API+'/webapi/v1/weixin/codeByOnlyOpenId/'+redirectUrl+'/'+this.storeId+'?scope=snsapi_userinfo',{
          mode: 'cors',
        }).then(function(result){
        console.log(213)
        console.log(result)
        // alert('111')
        // console.log(result.data)
        var url=result.body.oauth_url
        console.log(result.body)
        console.log(result.bodyText)
       console.log(url)
        location.href=url
      }).catch(function (error) {
        // alert('222')
        console.log(123)
        console.log(error);
      })

    },
    request2(){
      this.$router.push({name:'heytea'})
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

