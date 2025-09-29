if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$1 = "/static/default-icon.png";
  const _imports_1$1 = "/static/avatar-level.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$2 = {
    props: {
      name: {
        type: String,
        default: ""
      },
      icon: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: ""
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "star-info" }, [
      vue.createElementVNode("view", { class: "info-avatar" }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          style: { "width": "84rpx", "height": "84rpx" },
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { class: "info-name" }, [
        vue.createElementVNode("view", { class: "name-level" }, [
          vue.createElementVNode("view", null, "易烊千玺"),
          vue.createElementVNode("image", {
            src: _imports_1$1,
            style: { "width": "60rpx", "height": "30rpx" },
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "name-desc" }, "中国内地演员，歌手")
      ]),
      vue.createCommentVNode(' <view class="page-top-left"></view>\r\n    <view class="page-top-right"></view>\r\n    <view class="status_bar"></view> ')
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-6c8a81d8"], ["__file", "D:/Code/IM/components/StarInfo/StarInfo.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _imports_0 = "/static/bar-back.png";
  const _imports_1 = "/static/card-small-1.png";
  const _imports_2 = "/static/card-small-2.png";
  const _imports_3 = "/static/card-small-3.png";
  const _imports_4 = "/static/chat-audio.png";
  const _imports_5 = "/static/chat-input.png";
  const _imports_6 = "/static/chat-more.png";
  const _imports_7 = "/static/chat-more-open.png";
  const _imports_8 = "/static/gift.png";
  const _imports_9 = "/static/card-pic.png";
  const _imports_10 = "/static/card-photo.png";
  const _imports_11 = "/static/card-phone.png";
  const _imports_12 = "/static/card-video.png";
  const _sfc_main$1 = {
    data() {
      return {
        inputValue: "",
        giftVisible: false,
        inputVisible: true,
        moreOpen: false
      };
    },
    onLoad() {
    },
    onUnload() {
    },
    methods: {
      goVideo() {
        uni.showToast({
          icon: "none",
          title: "敬请期待"
        });
      },
      sendMessage() {
        uni.showToast({
          icon: "none",
          title: this.inputValue
        });
        this.inputValue = "";
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_StarInfo = resolveEasycom(vue.resolveDynamicComponent("StarInfo"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat" }, [
      vue.createElementVNode("view", { class: "status_bar" }),
      vue.createElementVNode("view", { class: "chat-star" }, [
        vue.createElementVNode("view", { class: "star-back" }, [
          vue.createElementVNode("image", {
            style: { "width": "14rpx", "height": "14rpx" },
            src: _imports_0
          })
        ]),
        vue.createVNode(_component_StarInfo)
      ]),
      vue.createElementVNode(
        "scroll-view",
        {
          class: "info-list",
          "scroll-y": "",
          style: vue.normalizeStyle($data.moreOpen ? "height: calc(100vh - 550rpx - 135rpx - var(--status-bar-height))" : "height: calc(100vh - 395rpx - 135rpx - var(--status-bar-height))")
        },
        [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(20, (item) => {
              return vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["list-item", item % 2 === 0 ? "self-parent" : "star-parent"])
                },
                [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["item-content", item % 2 === 0 ? "self" : "star"])
                    },
                    " asdas大苏时d" + vue.toDisplayString(item),
                    3
                    /* TEXT, CLASS */
                  )
                ],
                2
                /* CLASS */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "view",
        {
          class: "chat-bottom",
          style: vue.normalizeStyle($data.moreOpen ? "bottom: 0" : "bottom: -155rpx")
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "bottom-tip",
              style: vue.normalizeStyle($data.moreOpen ? "margin-top: 74rpx" : "margin-top: 148rpx")
            },
            [
              vue.createElementVNode("image", {
                class: "tip-image",
                src: _imports_1,
                mode: "heightFix"
              }),
              vue.createElementVNode("image", {
                class: "tip-image",
                src: _imports_2,
                mode: "heightFix"
              }),
              vue.createElementVNode("image", {
                class: "tip-image",
                src: _imports_3,
                mode: "heightFix",
                onClick: _cache[0] || (_cache[0] = ($event) => $data.giftVisible = true)
              })
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode("view", { class: "bottom-input" }, [
            $data.inputVisible ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => $data.inputVisible = false),
              class: "input-image",
              src: _imports_4
            })) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              onClick: _cache[2] || (_cache[2] = ($event) => $data.inputVisible = true),
              class: "input-image",
              src: _imports_5
            })),
            vue.createElementVNode("view", { class: "input-main" }, [
              $data.inputVisible ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                "input",
                {
                  key: 0,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event),
                  onConfirm: _cache[4] || (_cache[4] = (...args) => $options.sendMessage && $options.sendMessage(...args)),
                  "cursor-spacing": 20,
                  "confirm-type": "send",
                  placeholder: "发消息...",
                  "placeholder-style": "color: #ffffff"
                },
                null,
                544
                /* NEED_HYDRATION, NEED_PATCH */
              )), [
                [vue.vModelText, $data.inputValue]
              ]) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, "按住说话"))
            ]),
            !$data.moreOpen ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 2,
              class: "input-image",
              src: _imports_6,
              onClick: _cache[5] || (_cache[5] = ($event) => $data.moreOpen = true)
            })) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 3,
              class: "input-image",
              src: _imports_7,
              onClick: _cache[6] || (_cache[6] = ($event) => $data.moreOpen = false)
            }))
          ]),
          $data.giftVisible ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "opt-gift",
            onClick: _cache[7] || (_cache[7] = ($event) => $data.giftVisible = false)
          }, [
            vue.createElementVNode("image", {
              src: _imports_8,
              mode: "widthFix",
              class: "gift-image"
            })
          ])) : vue.createCommentVNode("v-if", true),
          $data.moreOpen ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "opt-list"
          }, [
            vue.createElementVNode("view", { class: "opt-item" }, [
              vue.createElementVNode("image", {
                src: _imports_9,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "图片")
            ]),
            vue.createElementVNode("view", { class: "opt-item" }, [
              vue.createElementVNode("image", {
                src: _imports_10,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "拍摄")
            ]),
            vue.createElementVNode("view", { class: "opt-item" }, [
              vue.createElementVNode("image", {
                src: _imports_11,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "语音")
            ]),
            vue.createElementVNode("view", {
              class: "opt-item",
              onClick: _cache[8] || (_cache[8] = (...args) => $options.goVideo && $options.goVideo(...args))
            }, [
              vue.createElementVNode("image", {
                src: _imports_12,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "视频")
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Code/IM/pages/chat/chat.vue"]]);
  __definePage("pages/chat/chat", PagesChatChat);
  const _sfc_main = {
    onLaunch: function() {
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:34", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:37", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Code/IM/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
