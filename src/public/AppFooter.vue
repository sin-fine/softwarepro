<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- 关于我们 -->
        <div class="footer-section">
          <h4 class="footer-heading">关于我们</h4>
          <ul class="footer-links">
            <li><a href="#">平台介绍</a></li>
            <li><a href="#">团队成员</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        <!-- 学习资源 -->
        <div class="footer-section">
          <h4 class="footer-heading">学习资源</h4>
          <ul class="footer-links">
            <li><a href="#">课程中心</a></li>
            <li><a href="#">学习社区</a></li>
            <li><a href="#">帮助中心</a></li>
          </ul>
        </div>
        <!-- 合作伙伴 -->
        <div class="footer-section">
          <h4 class="footer-heading">合作伙伴</h4>
          <ul class="footer-links">
            <li><a href="#">文化机构</a></li>
            <li><a href="#">教育机构</a></li>
            <li><a href="#">非遗传承人</a></li>
          </ul>
        </div>
        <!-- 关注我们 -->
        <div class="footer-section">
          <h4 class="footer-heading">关注我们</h4>
          <div class="social-links">
            <a href="#" aria-label="微信"><i class="fab fa-weixin"></i></a>
            <a href="#" aria-label="微博"><i class="fab fa-weibo"></i></a>
            <a href="#" aria-label="QQ"><i class="fab fa-qq"></i></a>
          </div>
        </div>
      </div>
      <!-- 版权信息 -->
      <div class="footer-copyright">
        <p>© 2025 非遗文化传承. All rights reserved. 京ICP备12345678号-1</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props:{
    showNavAndFooter: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
/* 底部组件的样式，可根据需要调整 */
.site-footer {
  background-color: #B91C1C;
  color: #d1d5db;
  padding: 4rem 0;
  font-family: "Microsoft YaHei", "Heiti SC", "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section {
  margin-bottom: 1.5rem;
}

.footer-heading {
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: #d1d5db;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ffffff;
}

.footer-copyright {
  padding-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .site-footer {
    padding: 3rem 0;
  }
}
</style>