<template>
  <div class="changelog">
    <div class="title">
      <Icon size="20">
        <History />
      </Icon>
      <span>更新日志</span>
    </div>
    <div class="log-list">
      <div v-for="(item, index) in logs" :key="index" class="log-item cards">
        <div class="log-head">
          <span class="version">{{ item.version }}</span>
          <span class="date">{{ item.date }}</span>
        </div>
        <div class="log-notes" v-html="renderMd(item.notes)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { History } from "@vicons/fa";
import { renderMd } from "@/utils/markdown.js";
import logs from "@/assets/changelog.json";
</script>

<style lang="scss" scoped>
.changelog {
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
  .log-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .log-item {
      padding: 1rem 1.25rem;
      .log-head {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
        .version {
          font-size: 1.05rem;
          font-weight: 600;
        }
        .date {
          font-size: 0.8rem;
          opacity: 0.6;
          font-style: oblique;
        }
      }
      .log-notes {
        font-size: 0.9rem;
        line-height: 1.6rem;
        :deep(h3) {
          margin: 0.5rem 0;
          font-size: 0.95rem;
        }
        :deep(ul) {
          margin: 0.25rem 0;
          padding-left: 1.25rem;
        }
        :deep(li) {
          margin: 0.15rem 0;
        }
        :deep(a) {
          color: var(--el-color-primary);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
