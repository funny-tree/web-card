<template>
  <div class="about-me">
    <div class="title">
      <Icon size="20">
        <User />
      </Icon>
      <span>关于我</span>
    </div>
    <div class="content cards" v-html="renderMd(text)"></div>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import { User } from "@vicons/fa";
import { renderMd } from "@/utils/markdown.js";

// TODO: 在此填写关于我的内容，支持 markdown 语法
const text = `# 关于我
- 大学在读学生
- 会Cpp-Qt/Py-FastAPI`;
</script>

<style lang="scss" scoped>
.about-me {
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
  .content {
    padding: 1.25rem 1.5rem;
    font-size: 0.95rem;
    line-height: 1.7rem;
    max-height: 60vh;
    overflow-y: auto;
    :deep(h1) {
      margin: 0 0 0.75rem;
      font-size: 1.3rem;
    }
    :deep(h2),
    :deep(h3) {
      margin: 0.75rem 0 0.5rem;
    }
    :deep(ul),
    :deep(ol) {
      margin: 0.25rem 0;
      padding-left: 1.5rem;
    }
    :deep(li) {
      margin: 0.2rem 0;
    }
    :deep(a) {
      color: var(--el-color-primary);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    :deep(code) {
      padding: 0.1rem 0.35rem;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      font-size: 0.85rem;
    }
  }
}
</style>
