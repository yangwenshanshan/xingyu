<template>
  <view class="TextMessage" :class="message.flow === 'out' ? 'self' : 'star'" @click="playAudio">
    <view class="message-item" v-if="message.flow === 'out'">
      <view style="margin-right: 20rpx;display: flex;align-items: center;">{{ second }}''</view>
      <image style="width: 30rpx;transform: rotate(180deg);" mode="widthFix" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAxCAYAAAC/BXv3AAADg0lEQVR4AbSYgXnUMAyF8zFBmYBuQJmAMgEwATABMAEwATABMAEwAbBBmYAyAWUD3p+ec8qznDs+1/dZkazI0rMkJ2lvTWN/J3IPiW2PkUBeKfSfHSFLbI9RQE4V8rWoDORHZZLxUUCycnwQAACK1WMUkAuF+i6KA3CfoyLKo4AQ47Eul6I4zjShTGLrMRLIlUIBBi5xGc8lVSUaCUTxJkr0Zlr/KBH9stL2AnkqbziFS0zHO2m9X86lg8SuRw8QghcQ8CfXLtOrZwWj1bOlB4gHZudV7YkoIiOQxGWQEWhW9AD5MXvYX9La729PWVaWh1wPEDLgx5MdUrIQfxHJCLQoJJBVNjD1AOFYPpMzH6va203PCiB4tnQBIQY7fI8QiD5pZYXjzAaC+URWuoHgkCdl6pybRth9Nd3cJ4dK80KLfok4nqRRYjVw7lmhV8hMZSwFWRRbBn5Pt4BQ67cyxyGpBpSm6fiSaOedJnoHgsl5CwggSDlGhdCBvswjp/ZQ1D2MkyBz0shiUE1nGRACOoiyaCsr/lyZT0NZaNxBV6XZAoEv3pzwjNw52aOsme1vU96JGTkEgrVbzrPat4BQHvwVOilAjgFRFrVS7nXHvgXEbefSsMtWT+DMCXvXMXfn6FpU2ZKRluOWkyF6gFAvfwdsBat2szP+nw1VtgDBD6U5FgzAWeOU9UPL1oFcFiA4PQYMjv2YshbKgBybvasIBGeHwGRHlHUQ7xd4IUC0QN8tRjv+14Gg3wKzVb77LA70M8gunk3TSnWRAcEiA/NRNyiNWDUoiz9fshchC7H1HmkCYUEBQ4p5j7xE2SBs/VarjA6YdZtAMCDAbQnUH0ASq8EOvSz0BlQZS+GfB/g9CETrDg4+9QATDf1DKd5z0GS7+1MRAGQtBqKP6KeoKzLZYE2Zw+deajUrBsfQt8Ro62TxpedLuoGQCd/dVjaw9a82MkePdJUm6/4Hvt0wB3iYzuKn+apLT2n8eHK8yYjcVoNs0NTxBk26+OgBwp+cBMchnHkMFOXsX1aUZbHpAYITgvOMgTPPiA9uLyPgbxRIFjjqKAmfoVGHXJ2e3ozgtEW8Tzje8GjD8a56aSQQykVGIggAZKen6/jGAC7TE35KsGke71EZmR9SRA7EySIjQbUXRwEhIL1QIiFTqjKv+CggBKIX7kmAkCW2x0ggROWbBELepH8AAAD//xV/GygAAAAGSURBVAMANsaQY1P6nBkAAAAASUVORK5CYII="></image>
    </view>
    <view class="message-item" v-if="message.flow === 'in'">
      <image style="width: 30rpx;" mode="widthFix" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAxCAYAAAC/BXv3AAADg0lEQVR4AbSYgXnUMAyF8zFBmYBuQJmAMgEwATABMAEwATABMAEwAbBBmYAyAWUD3p+ec8qznDs+1/dZkazI0rMkJ2lvTWN/J3IPiW2PkUBeKfSfHSFLbI9RQE4V8rWoDORHZZLxUUCycnwQAACK1WMUkAuF+i6KA3CfoyLKo4AQ47Eul6I4zjShTGLrMRLIlUIBBi5xGc8lVSUaCUTxJkr0Zlr/KBH9stL2AnkqbziFS0zHO2m9X86lg8SuRw8QghcQ8CfXLtOrZwWj1bOlB4gHZudV7YkoIiOQxGWQEWhW9AD5MXvYX9La729PWVaWh1wPEDLgx5MdUrIQfxHJCLQoJJBVNjD1AOFYPpMzH6va203PCiB4tnQBIQY7fI8QiD5pZYXjzAaC+URWuoHgkCdl6pybRth9Nd3cJ4dK80KLfok4nqRRYjVw7lmhV8hMZSwFWRRbBn5Pt4BQ67cyxyGpBpSm6fiSaOedJnoHgsl5CwggSDlGhdCBvswjp/ZQ1D2MkyBz0shiUE1nGRACOoiyaCsr/lyZT0NZaNxBV6XZAoEv3pzwjNw52aOsme1vU96JGTkEgrVbzrPat4BQHvwVOilAjgFRFrVS7nXHvgXEbefSsMtWT+DMCXvXMXfn6FpU2ZKRluOWkyF6gFAvfwdsBat2szP+nw1VtgDBD6U5FgzAWeOU9UPL1oFcFiA4PQYMjv2YshbKgBybvasIBGeHwGRHlHUQ7xd4IUC0QN8tRjv+14Gg3wKzVb77LA70M8gunk3TSnWRAcEiA/NRNyiNWDUoiz9fshchC7H1HmkCYUEBQ4p5j7xE2SBs/VarjA6YdZtAMCDAbQnUH0ASq8EOvSz0BlQZS+GfB/g9CETrDg4+9QATDf1DKd5z0GS7+1MRAGQtBqKP6KeoKzLZYE2Zw+deajUrBsfQt8Ro62TxpedLuoGQCd/dVjaw9a82MkePdJUm6/4Hvt0wB3iYzuKn+apLT2n8eHK8yYjcVoNs0NTxBk26+OgBwp+cBMchnHkMFOXsX1aUZbHpAYITgvOMgTPPiA9uLyPgbxRIFjjqKAmfoVGHXJ2e3ozgtEW8Tzje8GjD8a56aSQQykVGIggAZKen6/jGAC7TE35KsGke71EZmR9SRA7EySIjQbUXRwEhIL1QIiFTqjKv+CggBKIX7kmAkCW2x0ggROWbBELepH8AAAD//xV/GygAAAAGSURBVAMANsaQY1P6nBkAAAAASUVORK5CYII="></image>
      <view style="margin-left: 20rpx;display: flex;align-items: center;">{{ second }}''</view>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue'

const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.onCanplay(() => {
  second.value = parseInt(innerAudioContext.duration)
})
const props = defineProps({
  message: {
    type: Object,
    default: () => {}
  },
})
const second = ref('')
if (props.message && props.message.payload) {
  innerAudioContext.src = props.message.payload.url;
}
function playAudio () {
  innerAudioContext.play();
}
</script>
<style lang="scss" scoped>
.TextMessage {
  max-width: 552rpx;
  width: fit-content;
  box-sizing: border-box;
  padding: 20rpx;
  display: flex;
  align-items: center;
  .message-item{
    display: flex;
    align-items: center;
  }
}
.self{
  background: #FF92C1;
  border-top-left-radius: 32rpx;
  border-top-right-radius: 8rpx;
  border-bottom-right-radius: 32rpx;
  border-bottom-left-radius: 32rpx;
}
.star{
  border-top-left-radius: 8rpx;
  border-top-right-radius: 32rpx;
  border-bottom-right-radius: 32rpx;
  border-bottom-left-radius: 32rpx;
  background: #FFFFFF99;
  backdrop-filter: blur(20rpx);
}
</style> 