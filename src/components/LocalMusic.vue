<template>
  <div class="local-music">
    <!-- 当前播放的歌名和歌手 -->
    <span class="song-name">
      {{ currentSong.name ? currentSong.name + " - " + currentSong.artist : "未播放" }}
    </span>
    <!-- 封面图 -->
    <img class="cover" :src="currentSong.cover" v-if="currentSong.cover" />
    <!-- 播放器控件 -->
    <div class="controls">
      <span class="btn" @click="prevSong">上一首</span>
      <span class="btn" @click="togglePlay">{{ isPlaying ? "暂停" : "播放" }}</span>
      <span class="btn" @click="nextSong">下一首</span>
    </div>
    <!-- APlayer 隐藏在底层，只负责播放 -->
    <APlayer
      ref="playerRef"
      :audio="playList"
      :theme="'#efefef'"
      :volume="0.7"
      :listFolded="true"
      @play="onPlay"
      @pause="onPause"
    />
  </div>
</template>

<script setup>
import APlayer from "@worstone/vue-aplayer";
import playList from "@/assets/musicList.json";

const playerRef = ref(null);
const isPlaying = ref(false);

// 当前歌曲信息，初始化为第一首歌
const currentSong = reactive({
  name: playList[0]?.name || "",
  artist: playList[0]?.artist || "",
  cover: playList[0]?.cover || "",
});

// 播放事件：拿到当前歌曲信息写入 currentSong
const onPlay = () => {
  isPlaying.value = true;
  const index = playerRef.value.aplayer.index;
  currentSong.name = playList[index].name;
  currentSong.artist = playList[index].artist;
  currentSong.cover = playList[index].cover || "";
};

const onPause = () => {
  isPlaying.value = false;
};

// 播放/暂停
const togglePlay = () => {
  playerRef.value.toggle();
};

// 上一首
const prevSong = () => {
  playerRef.value.skipBack();
  nextTick(() => playerRef.value.play());
};

// 下一首
const nextSong = () => {
  playerRef.value.skipForward();
  nextTick(() => playerRef.value.play());
};
</script>

<style lang="scss" scoped>
.local-music {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .song-name {
    margin-bottom: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
  }

  .cover {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
    margin-bottom: 8px;
  }

  .controls {
    display: flex;
    gap: 12px;
    margin-bottom: 6px;
    .btn {
      padding: 2px 10px;
      background: #ffffff26;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: #ffffff4d;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .aplayer {
    width: 100%;
    border: none !important;
    box-shadow: none;
    :deep(.aplayer-body) {
      display: none;
    }
    :deep(.aplayer-list) {
      display: none;
    }
  }
}
</style>