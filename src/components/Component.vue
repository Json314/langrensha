<template lang="html">
  <div class="number_9">
    <div class="img-container" v-if="!beginGame">
      <h3>{{index}}号</h3>
      <div class="imgs">
        <img v-if="showDefaultImg" class="default-img" src="../../static/images/home.jpg" alt="">
        <img v-show="!showDefaultImg" class="role" src="" alt="">
        <transition name="fade">
          <h3 class="title" v-show="!showDefaultImg"><span>{{title}}</span></h3>
        </transition>
      </div>
    </div>
    <transition name="fade">
      <div class="game-info" v-if="beginGame">
        <el-row>
          <el-col :span="12" v-for="(item, index) in selectedRole" :key="index">
            <div class="grid-content bg-purple">
              <h4 class="title">{{index + 1}}号 <span>{{item[0]}}</span></h4>
              <div class="player-status">
                <img :src="'../../static/images/'+ item[1]+'.jpg'" alt="">
                <div class="dead">
                  <span>死亡</span>
                </div>
              </div>

              <div class="buttons">
                <el-button class="btn kill" type="danger" size="mini" :data-info="item[2]" @click="kill($event)">杀死</el-button>
                <el-button class="btn save" type="success" size="mini" :data-info="item[2]" @click="kill($event)" style="display: none;">救活</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
    <el-popover
      ref="popover5"
      placement="top"
      width="160"
      v-model="visible2">
      <p>确认开始游戏吗吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
        <el-button type="primary" size="mini" @click="begin">确定</el-button>
      </div>
    </el-popover>

    <el-button v-if="showDefaultImg && !showBeginButton" class="btn" type="primary" @click="choiceRole">选择角色</el-button>
    <el-button v-if="!showDefaultImg && !showBeginButton && !restart" class="btn" type="success" @click="confirmRole">确认角色</el-button>
    <el-button v-show="showBeginButton && showDefaultImg" class="btn beginGame" type="primary" v-popover:popover5>开始游戏</el-button>
    <el-button v-if="restart" class="btn beginGame" type="danger" onclick="window.location.reload()">重新开始</el-button>


  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    props: ['role', 'playerCount', 'status'],
    data(){
      return {
        title: '',
        showDefaultImg: true,
        showBeginButton: false,
        beginGame: false,
        restart: false,
        index: 1,
        // role: [['村民', 'cunmin'], ['预言家', 'yuyanjia'], ['狼人', 'langren'], ['女巫', 'nvwu'], ['狼人', 'langren'], ['村民', 'cunmin'], ['猎人', 'lieren'], ['狼人', 'langren'], ['村民', 'cunmin']],
        selectedRole: [],
        visible2: false
      }
    },
    methods: {
      //选择角色，选择9次。每选择一次角色，显示确认角色
      choiceRole(){
        if(this.index < (this.playerCount+1)){
          var random = Math.floor(Math.random()*this.role.length);   //随机抽取一个角色
          var role = this.role[random];
          this.selectedRole.push(role);             //已选择角色
          var _this = this;
          $('.role').attr('src', './static/images/'+role[1]+'.jpg');
          this.title = role[0];
          $('.role')[0].onload = function(){
            _this.showDefaultImg = false;    //隐藏默认图片
          }
          this.role.splice(random, 1);
        }
      },
      //确认角色，确认8次，第9次，显示开始游戏
      confirmRole(){
        if(this.index < this.playerCount){
          this.index++;
        }else{
          this.showDefaultImg = false;    //隐藏默认图片
          this.showBeginButton = true;
        }
        this.showDefaultImg = true;
        this.title = '';
      },
      kill(event){
        if(event.target.nodeName == 'SPAN'){
          var target = $(event.target).parent();
        }else{
          var target = $(event.target);
        }
        target.hide();
        if(target.hasClass('kill')){    //杀死
          target.parent().find('.save').show();
          target.parent().parent().addClass('active');
          this.status[target.attr('data-info')]--;    //当前人所在的阵营，个数减1
        }else{      //救活
          target.parent().find('.kill').show();
          target.parent().parent().removeClass('active');
          this.status[target.attr('data-info')]++;      //当前人所在的阵营，个数加1
        }
        if(this.status.min == 0 || this.status.shen == 0){
          // alert('狼人胜利');
          this.$notify({
            title: '恭喜',
            message: '狼人胜利！',
            type: 'success'
          });
        }else if(this.status.lang == 0){
          this.$notify({
            title: '恭喜',
            message: '好人胜利！',
            type: 'success'
          });
        }
      },
      begin(){
        this.visible2 = false;
        this.beginGame = true;
        this.showDefaultImg = false;
        this.showBeginButton = false;
        this.restart = true;    //显示重新开始
      }
    }
  }
</script>

<style lang="scss" scoped>
  .img-container{
    text-align: center;
    img{
      width: 100%;
      height: 340px;
      float: left;
    }
    div{
      overflow: hidden;
      width: 80%;
      margin: 0 auto;
    }
    .title{
      position: absolute;
      top: 20px;
      width: 100%;
      text-align: center;
      span{
        padding: 5px 20px;
        background-color: rgba(0,0,0,.3);
        color: #f00;
        border-radius: 5px;
      }
      margin: 0 auto;
      text-align: center;
      z-index: 10;
    }
  }
  .imgs{
    position: relative;
  }
  .game-info{
    img{
      width: 100%;
      height: 195px;
    }
    .title{
      margin-top: 8px;
      margin-bottom: 8px;
      span{
        color: #13CE66;
      }
    }
    .buttons{
      button{
        margin-top: 8px;
        margin-left: 0;
      }
    }
    .player-status{
      position: relative;
      .dead{
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 6px;
        left: 0;
        color: #f00;
        background-color: rgba(0,0,0,.5);
        text-align: center;
        span{
          position: relative;
          top: 85px;
          font-size: 2rem;
        }
      }
    }
    .active .dead{
      display: block;
    }
  }

  .btn{
    margin-top: 30px;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
  }
</style>
