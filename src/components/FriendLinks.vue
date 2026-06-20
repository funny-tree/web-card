<template>
  <div class="friend-links">
    <div class="title">
      <Icon size="20">
        <LinkIcon />
      </Icon>
      <span>友情链接</span>
    </div>
    <div v-if="links.length" class="link-grid">
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        class="link-card cards"
        target="_blank"
        rel="noopener"
      >
        <img class="avatar" :src="item.avatar" :alt="item.name" />
        <span class="name">{{ item.name }}</span>
      </a>
    </div>
    <div v-else class="empty cards">暂无友情链接</div>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { Link as LinkIcon } from "@vicons/fa";
import links from "@/assets/friendLinks.json";
</script>

<style lang="scss" scoped>
.friend-links {
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    margin: 0.2rem 0 1.5rem;
    font-size: 1.1rem;
    .i-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 6px;
    }
  }
  .link-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
    max-height: 60vh;
    overflow-y: auto;
    padding-right: 4px;
    .link-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 0.75rem;
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-3px);
      }
      .avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
      }
      .name {
        font-size: 0.9rem;
      }
    }
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    opacity: 0.6;
    font-size: 0.9rem;
  }
}
</style>
