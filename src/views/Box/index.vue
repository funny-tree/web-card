<template>
  <div class="box cards" @mouseenter="closeShow = true" @mouseleave="closeShow = false">
    <transition name="el-fade-in-linear">
      <close-one
        class="close"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="store.boxOpenState = false"
      />
    </transition>
    <!-- 设置按钮已隐藏，如需恢复请取消注释
    <transition name="el-fade-in-linear">
      <setting-two
        class="setting"
        theme="filled"
        size="28"
        fill="#ffffff60"
        v-show="closeShow"
        @click="store.setOpenState = true"
      />
    </transition>
    -->
    <div class="content">
      <!-- 顶部 Tab 栏 -->
      <div class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab-item', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </div>
      </div>
      <!-- 当前 Tab 内容 -->
      <div class="tab-content">
        <component :is="currentComponent" />
      </div>

      <!-- ===== 原作者组件，暂时保留不删，如需恢复请取消注释 =====
      <TimeCapsule />
      <MoreContent />
      -->
    </div>
  </div>
</template>

<script setup>
import { CloseOne } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import Changelog from "@/components/Changelog.vue";
import AboutMe from "@/components/AboutMe.vue";
import FriendLinks from "@/components/FriendLinks.vue";
// 原作者组件，暂时保留不删，如需恢复请取消下方注释
// import TimeCapsule from "@/components/TimeCapsule.vue";
// import MoreContent from "@/components/MoreContent.vue";

const store = mainStore();
const closeShow = ref(false);

const tabs = [
  { key: "changelog", label: "更新日志" },
  { key: "about", label: "关于我" },
  { key: "links", label: "友情链接" },
];

const activeTab = ref("changelog");

const currentComponent = computed(() => {
  switch (activeTab.value) {
    case "about":
      return AboutMe;
    case "links":
      return FriendLinks;
    case "changelog":
    default:
      return Changelog;
  }
});

// 每次打开 Box 重置到第一个 tab
watch(
  () => store.boxOpenState,
  (v) => {
    if (v) activeTab.value = "changelog";
  },
);
</script>

<style lang="scss" scoped>
.box {
  flex: 1 0 0%;
  margin-left: 0.75rem;
  height: 80%;
  max-width: 50%;
  position: relative;
  animation: fade 0.5s;

  &:hover {
    transform: scale(1);
  }

  .close,
  .setting {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 28px;
    height: 28px;
    transition:
      transform 0.3s,
      opacity 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }

  .setting {
    right: 56px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    height: 100%;

    .tabs {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      .tab-item {
        padding: 0.4rem 0.9rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.95rem;
        opacity: 0.7;
        transition: all 0.3s;
        &:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.08);
        }
        &.active {
          opacity: 1;
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }

    .tab-content {
      flex: 1;
      overflow-y: auto;
    }
  }
}
</style>
