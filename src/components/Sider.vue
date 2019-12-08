<template>
  <div class="sider">
    <div class="content">
      <div class="avatar">
        <router-link to="/article" class="link">VAER</router-link>
      </div>
      <div class="list">
          <div class="selector">——</div>
          <div class="selector" v-for='item of nav' :key='item.key'>
            <router-link :to='item.path' class="link">{{item.name}}</router-link>
          </div>
          <div class="selector">——</div>
      </div>
      <div class="site">
        
      </div>
    </div>
  </div>
</template>

<script>
import nav from '@/config/nav';
export default {
  name: 'sider',
  data() {
    return {
      nav
    }
  },
};
</script>

<style scoped lang="less">
.sider {
  height: 100vh;
  background: #444;
  .content {
    width: 150px;
    margin: 0 auto;
    padding-top: 50px;
    .avatar {
      width: 150px;
      height: 75px;
      line-height: 75px;
      text-align: center;
      border: 3px solid #fff;
      font-size: 40px;
      font-weight: 800;
      .link {
        text-decoration: none;
        color: #fff;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-height: 500px;
      padding: 100px 0;
      margin: auto 0;
      .selector {
        .link {
          font-size: 18px;
          text-decoration: none;
          color: #fff;
          &:hover {
            color: #aaa;
          }
        }
      }
    }
  }
}
</style>
