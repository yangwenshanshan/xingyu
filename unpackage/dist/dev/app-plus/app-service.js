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
  const _imports_2$4 = "/static/default-icon.png";
  const _imports_1$5 = "/static/avatar-level.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "star-info" }, [
      vue.createElementVNode("view", { class: "info-avatar" }, [
        vue.createElementVNode("image", {
          src: _imports_2$4,
          style: { "width": "84rpx", "height": "84rpx" },
          mode: "widthFix"
        })
      ]),
      vue.createElementVNode("view", { class: "info-name" }, [
        vue.createElementVNode("view", { class: "name-level" }, [
          vue.createElementVNode("view", { style: { "margin-right": "10rpx" } }, "易烊千玺"),
          vue.createElementVNode("image", {
            src: _imports_1$5,
            style: { "width": "60rpx", "height": "30rpx" },
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "name-desc" }, "中国内地演员，歌手")
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-6c8a81d8"], ["__file", "D:/Code/IM/components/StarInfo/StarInfo.vue"]]);
  const ON_LOAD = "onLoad";
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
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "base-page" }, [
      vue.createElementVNode("view", { class: "page-top-left" }),
      vue.createElementVNode("view", { class: "page-top-right" }),
      vue.createElementVNode("view", { class: "status_bar" }),
      vue.createElementVNode("view", { class: "content-main" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-34ef6681"], ["__file", "D:/Code/IM/components/BasePage/BasePage.vue"]]);
  const _imports_0$3 = "/static/bar-home-active.png";
  const _imports_1$4 = "/static/bar-home.png";
  const _imports_2$3 = "/static/bar-serve-active.png";
  const _imports_2$2 = "/static/bar-serve.png";
  const _imports_4$2 = "/static/bar-shop.png";
  const _imports_5$2 = "/static/bar-me.png";
  const _sfc_main$6 = {
    __name: "Bar",
    props: {
      actived: {
        type: Number,
        default: 0
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const activeIndex = vue.ref(props.actived);
      function goPage(index) {
        if (index === activeIndex.value) {
          return;
        }
        if (index === 3 || index === 4) {
          return;
        }
        if (index === 1) {
          uni.redirectTo({
            url: "/pages/index/index"
          });
        }
        if (index === 2) {
          uni.redirectTo({
            url: "/pages/chatList/chatList"
          });
        }
      }
      const __returned__ = { props, activeIndex, goPage, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bar" }, [
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goPage(1)),
          class: vue.normalizeClass(["bar-item", { "acitve": $setup.activeIndex === 1 }])
        },
        [
          $setup.activeIndex === 1 ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            style: { "width": "35rpx" },
            src: _imports_0$3,
            mode: "widthFix"
          })) : vue.createCommentVNode("v-if", true),
          $setup.activeIndex !== 1 ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            style: { "width": "35rpx" },
            src: _imports_1$4,
            mode: "widthFix"
          })) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.goPage(2)),
          class: vue.normalizeClass(["bar-item", { "acitve": $setup.activeIndex === 2 }])
        },
        [
          $setup.activeIndex === 2 ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            style: { "width": "35rpx" },
            src: _imports_2$3,
            mode: "widthFix"
          })) : vue.createCommentVNode("v-if", true),
          $setup.activeIndex !== 2 ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            style: { "width": "35rpx" },
            src: _imports_2$2,
            mode: "widthFix"
          })) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.goPage(3)),
          class: vue.normalizeClass(["bar-item", { "acitve": $setup.activeIndex === 3 }])
        },
        [
          vue.createElementVNode("image", {
            style: { "width": "44rpx" },
            src: _imports_4$2,
            mode: "widthFix"
          })
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "view",
        {
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.goPage(4)),
          class: vue.normalizeClass(["bar-item", { "acitve": $setup.activeIndex === 4 }])
        },
        [
          vue.createElementVNode("image", {
            style: { "width": "34rpx" },
            src: _imports_5$2,
            mode: "widthFix"
          })
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-0f74e904"], ["__file", "D:/Code/IM/components/Bar/Bar.vue"]]);
  const _imports_0$2 = "/static/home-left.png";
  const _imports_1$3 = "/static/home-search.png";
  const _imports_3$1 = "/static/item-like.png";
  const _sfc_main$5 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      function goChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
      function goDetail() {
        uni.navigateTo({
          url: "/pages/detail/detail"
        });
      }
      const __returned__ = { goChat, goDetail };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_StarInfo = resolveEasycom(vue.resolveDynamicComponent("StarInfo"), __easycom_0$1);
    const _component_BasePage = resolveEasycom(vue.resolveDynamicComponent("BasePage"), __easycom_0);
    const _component_Bar = resolveEasycom(vue.resolveDynamicComponent("Bar"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      vue.createVNode(_component_BasePage, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "home-title" }, [
            vue.createElementVNode("image", {
              src: _imports_0$2,
              alt: ""
            }),
            vue.createElementVNode("p", null, "Starrice")
          ]),
          vue.createElementVNode("view", { class: "home-search" }, [
            vue.createElementVNode("image", {
              src: _imports_1$3,
              alt: ""
            })
          ]),
          vue.createElementVNode("scroll-view", {
            class: "people-list",
            "scroll-y": ""
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(5, (item) => {
                return vue.createElementVNode("view", { class: "people-item" }, [
                  vue.createElementVNode("view", {
                    class: "item-content",
                    onClick: $setup.goDetail
                  }, [
                    vue.createElementVNode("view", { class: "content-top" }, [
                      vue.createVNode(_component_StarInfo),
                      vue.createElementVNode("view", {
                        class: "top-right",
                        onClick: vue.withModifiers($setup.goChat, ["stop"])
                      }, [
                        vue.createElementVNode("image", {
                          style: { "width": "32rpx" },
                          src: _imports_2$2,
                          mode: "widthFix"
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "content-bottom" }, [
                      vue.createElementVNode("view", { class: "content-opt" }, [
                        vue.createElementVNode("view", { class: "opt-item" }, [
                          vue.createElementVNode("image", {
                            style: { "width": "24rpx" },
                            src: _imports_3$1,
                            mode: "widthFix"
                          }),
                          vue.createElementVNode("text", { class: "item-text" }, "345K")
                        ]),
                        vue.createElementVNode("view", { class: "opt-item" }, [
                          vue.createElementVNode("image", {
                            style: { "width": "24rpx" },
                            src: _imports_2$2,
                            mode: "widthFix"
                          }),
                          vue.createElementVNode("text", { class: "item-text" }, "1293")
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "content-text" }, "他是中国新生代艺人中兼具流量与实力的代表人物，以​​演技突破​​和​​多栖发展​​著称…")
                    ])
                  ])
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_Bar, { actived: 1 })
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/Code/IM/pages/index/index.vue"]]);
  const _imports_0$1 = "/static/bar-back.png";
  const _imports_1$2 = "/static/card-small-1.png";
  const _imports_2$1 = "/static/card-small-2.png";
  const _imports_3 = "/static/expectations.png";
  const _imports_4$1 = "/static/card-small-3.png";
  const _imports_5$1 = "/static/chat-audio.png";
  const _imports_6$1 = "/static/chat-input.png";
  const _imports_7$1 = "/static/chat-more.png";
  const _imports_8 = "/static/chat-more-open.png";
  const _imports_9 = "/static/gift.png";
  const _imports_10 = "/static/card-pic.png";
  const _imports_11 = "/static/card-photo.png";
  const _imports_12 = "/static/card-phone.png";
  const _imports_13 = "/static/card-video.png";
  const _sfc_main$4 = {
    __name: "chat",
    setup(__props, { expose: __expose }) {
      __expose();
      const callingVisible = vue.ref(false);
      const inputValue = vue.ref("");
      const giftVisible = vue.ref(false);
      const inputVisible = vue.ref(true);
      const moreOpen = vue.ref(false);
      const longPressing = vue.ref(false);
      function goVideo() {
        uni.showToast({
          icon: "none",
          title: "敬请期待"
        });
      }
      function sendMessage() {
        uni.showToast({
          icon: "none",
          title: inputValue.value
        });
        inputValue.value = "";
      }
      function goCard() {
        uni.navigateTo({
          url: "/pages/card/card"
        });
      }
      function showAudio() {
        uni.setNavigationBarColor({
          frontColor: "#ffffff"
        });
        callingVisible.value = true;
      }
      function sendMsgImage() {
        uni.chooseImage({
          count: 1,
          sourceType: ["album"],
          sizeType: ["original", "compressed"],
          success: (res) => {
            formatAppLog("log", "at pages/chat/chat.vue:106", res);
          }
        });
      }
      function sendMsgVideo() {
        uni.chooseVideo({
          sourceType: ["camera"],
          maxDuration: 60,
          success: (res) => {
            formatAppLog("log", "at pages/chat/chat.vue:115", res);
          }
        });
      }
      function goBack() {
        uni.navigateBack();
      }
      function inputVisibleClick(flag) {
        inputVisible.value = flag;
        if (flag === false) {
          moreOpen.value = false;
        }
      }
      function moreOpenClick(flag) {
        moreOpen.value = flag;
        if (flag === true) {
          inputVisible.value = true;
        }
      }
      function handleTouchStart(e) {
        formatAppLog("log", "at pages/chat/chat.vue:135", e);
        if (inputVisible.value === false) {
          return;
        }
        onLongPress();
      }
      function handleTouchEnd() {
        longPressing.value = false;
      }
      function onLongPress() {
        longPressing.value = true;
      }
      onLoad(() => {
        formatAppLog("log", "at pages/chat/chat.vue:148", 111);
      });
      const __returned__ = { callingVisible, inputValue, giftVisible, inputVisible, moreOpen, longPressing, goVideo, sendMessage, goCard, showAudio, sendMsgImage, sendMsgVideo, goBack, inputVisibleClick, moreOpenClick, handleTouchStart, handleTouchEnd, onLongPress, get onLoad() {
        return onLoad;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_StarInfo = resolveEasycom(vue.resolveDynamicComponent("StarInfo"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat" }, [
      vue.createElementVNode("view", { class: "status_bar" }),
      vue.createElementVNode("view", { class: "chat-star" }, [
        vue.createElementVNode("view", {
          class: "star-back",
          onClick: $setup.goBack
        }, [
          vue.createElementVNode("image", {
            style: { "width": "14rpx" },
            mode: "widthFix",
            src: _imports_0$1
          })
        ]),
        vue.createVNode(_component_StarInfo)
      ]),
      vue.createElementVNode(
        "scroll-view",
        {
          class: "info-list",
          "scroll-y": "",
          style: vue.normalizeStyle($setup.moreOpen ? "height: calc(100vh - 550rpx - 135rpx - var(--status-bar-height))" : "height: calc(100vh - 395rpx - 135rpx - var(--status-bar-height))")
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
          style: vue.normalizeStyle($setup.moreOpen ? "bottom: 0" : "bottom: -155rpx")
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "bottom-tip",
              style: vue.normalizeStyle($setup.moreOpen ? "margin-top: 74rpx" : "margin-top: 148rpx")
            },
            [
              !$setup.longPressing ? (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                [
                  vue.createElementVNode("image", {
                    class: "tip-image",
                    src: _imports_1$2,
                    mode: "heightFix",
                    onClick: $setup.goCard
                  }),
                  vue.createElementVNode("view", { class: "image-parent" }, [
                    vue.createElementVNode("image", {
                      class: "tip-image",
                      src: _imports_2$1,
                      mode: "heightFix"
                    }),
                    vue.createElementVNode("image", {
                      class: "tip-image-tip",
                      src: _imports_3,
                      mode: "heightFix"
                    })
                  ]),
                  vue.createElementVNode("image", {
                    class: "tip-image",
                    src: _imports_4$1,
                    mode: "heightFix",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.giftVisible = true)
                  })
                ],
                64
                /* STABLE_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ),
          vue.createCommentVNode(` :class="longPressing ? 'longPressing' : 'input-main'"  `),
          vue.createElementVNode(
            "view",
            {
              class: "bottom-input",
              "data-id": "nhf",
              onTouchstart: $setup.handleTouchStart,
              onTouchend: $setup.handleTouchEnd
            },
            [
              $setup.inputVisible ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                onClick: _cache[1] || (_cache[1] = ($event) => $setup.inputVisibleClick(false)),
                class: "input-image",
                src: _imports_5$1
              })) : (vue.openBlock(), vue.createElementBlock("image", {
                key: 1,
                onClick: _cache[2] || (_cache[2] = ($event) => $setup.inputVisibleClick(true)),
                class: "input-image",
                src: _imports_6$1
              })),
              vue.createElementVNode("view", { class: "input-main" }, [
                $setup.inputVisible ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
                  "input",
                  {
                    key: 0,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.inputValue = $event),
                    onConfirm: $setup.sendMessage,
                    "cursor-spacing": 20,
                    "confirm-type": "send",
                    placeholder: "发消息...",
                    "placeholder-style": "color: #ffffff"
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                )), [
                  [vue.vModelText, $setup.inputValue]
                ]) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "main-speak"
                }, "按住说话"))
              ]),
              !$setup.moreOpen ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 2,
                class: "input-image",
                src: _imports_7$1,
                onClick: _cache[4] || (_cache[4] = ($event) => $setup.moreOpenClick(true))
              })) : (vue.openBlock(), vue.createElementBlock("image", {
                key: 3,
                class: "input-image",
                src: _imports_8,
                onClick: _cache[5] || (_cache[5] = ($event) => $setup.moreOpenClick(false))
              }))
            ],
            32
            /* NEED_HYDRATION */
          ),
          $setup.giftVisible ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "opt-gift",
            onClick: _cache[6] || (_cache[6] = ($event) => $setup.giftVisible = false)
          }, [
            vue.createElementVNode("image", {
              src: _imports_9,
              mode: "widthFix",
              class: "gift-image"
            })
          ])) : vue.createCommentVNode("v-if", true),
          $setup.moreOpen && $setup.inputVisible ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "opt-list"
          }, [
            vue.createElementVNode("view", {
              class: "opt-item",
              onClick: $setup.sendMsgImage
            }, [
              vue.createElementVNode("image", {
                src: _imports_10,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "图片")
            ]),
            vue.createElementVNode("view", {
              class: "opt-item",
              onClick: $setup.sendMsgVideo
            }, [
              vue.createElementVNode("image", {
                src: _imports_11,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "拍摄")
            ]),
            vue.createElementVNode("view", {
              class: "opt-item",
              onClick: $setup.showAudio
            }, [
              vue.createElementVNode("image", {
                src: _imports_12,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "语音")
            ]),
            vue.createElementVNode("view", {
              class: "opt-item",
              onClick: $setup.goVideo
            }, [
              vue.createElementVNode("image", {
                src: _imports_13,
                mode: "heightFix"
              }),
              vue.createElementVNode("view", null, "视频")
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $setup.callingVisible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "calling"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/Code/IM/pages/chat/chat.vue"]]);
  const _imports_1$1 = "/static/detail-friend.png";
  const _imports_2 = "/static/detail-more.png";
  const _imports_4 = "/static/detail-type.png";
  const _imports_5 = "/static/detail-line.png";
  const _imports_6 = "/static/detail-holder-1.png";
  const _imports_7 = "/static/detail-holder-2.png";
  const _sfc_main$3 = {
    __name: "detail",
    setup(__props, { expose: __expose }) {
      __expose();
      function goBack() {
        uni.navigateBack();
      }
      const __returned__ = { goBack };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_BasePage = resolveEasycom(vue.resolveDynamicComponent("BasePage"), __easycom_0);
    const _component_Bar = resolveEasycom(vue.resolveDynamicComponent("Bar"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "detail" }, [
      vue.createVNode(_component_BasePage, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "detail-title" }, [
            vue.createElementVNode("view", {
              class: "detail-left",
              onClick: $setup.goBack
            }, [
              vue.createElementVNode("image", {
                style: { "width": "14rpx" },
                mode: "widthFix",
                src: _imports_0$1
              })
            ]),
            vue.createElementVNode("view", { class: "detail-right" }, [
              vue.createElementVNode("image", {
                style: { "width": "98rpx", "margin-right": "25rpx" },
                mode: "widthFix",
                src: _imports_1$1
              }),
              vue.createElementVNode("image", {
                style: { "width": "20rpx" },
                mode: "widthFix",
                src: _imports_2
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "detail-avatar" }, [
            vue.createElementVNode("image", {
              class: "avatar-img",
              src: _imports_2$4,
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "avatar-name" }, "@易烊千玺"),
            vue.createElementVNode("view", { class: "avatar-desc" }, "中国内地，演员，歌手，人气少年偶像组合TFBOYS成员")
          ]),
          vue.createElementVNode("view", { class: "deail-info" }, [
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("view", { class: "item-count" }, "9008.3万"),
              vue.createElementVNode("view", { class: "item-name" }, "粉丝")
            ]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("view", { class: "item-count" }, "37.8亿"),
              vue.createElementVNode("view", { class: "item-name" }, "获赞")
            ]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("view", { class: "item-count" }, "166"),
              vue.createElementVNode("view", { class: "item-name" }, "发布")
            ])
          ]),
          vue.createElementVNode("view", { class: "detail-type" }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: _imports_4
            })
          ]),
          vue.createElementVNode("view", { class: "detail-line" }, [
            vue.createElementVNode("image", {
              mode: "widthFix",
              src: _imports_5
            })
          ]),
          vue.createElementVNode("view", { class: "detail-publish-list" }, [
            vue.createElementVNode("view", { class: "publish-item" }, [
              vue.createElementVNode("image", {
                mode: "widthFix",
                src: _imports_6
              })
            ]),
            vue.createElementVNode("view", { class: "publish-item" }, [
              vue.createElementVNode("image", {
                mode: "widthFix",
                src: _imports_7
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_Bar, { actived: 1 })
    ]);
  }
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/Code/IM/pages/detail/detail.vue"]]);
  const _imports_1 = "/static/chat-list-title.png";
  const _sfc_main$2 = {
    __name: "chatList",
    setup(__props, { expose: __expose }) {
      __expose();
      const active = vue.ref(1);
      function goChat() {
        uni.navigateTo({
          url: "/pages/chat/chat"
        });
      }
      function goDetail() {
        uni.navigateTo({
          url: "/pages/detail/detail"
        });
      }
      vue.onMounted(() => {
        setTimeout(() => {
          active.value = 2;
        }, 0);
      });
      function goBack() {
        uni.navigateBack();
      }
      const __returned__ = { active, goChat, goDetail, goBack, onMounted: vue.onMounted, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_BasePage = resolveEasycom(vue.resolveDynamicComponent("BasePage"), __easycom_0);
    const _component_Bar = resolveEasycom(vue.resolveDynamicComponent("Bar"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-list" }, [
      vue.createVNode(_component_BasePage, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "home-title" }, [
            vue.createElementVNode("image", {
              onClick: $setup.goBack,
              style: { "width": "14rpx" },
              src: _imports_0$1,
              mode: "widthFix"
            }),
            vue.createElementVNode("p", null, "Starrice")
          ]),
          vue.createElementVNode("view", { class: "home-search" }, [
            vue.createElementVNode("image", {
              src: _imports_1,
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("scroll-view", {
            class: "people-list",
            "scroll-y": ""
          }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(10, (item) => {
                return vue.createElementVNode("view", { class: "people-item" }, [
                  vue.createElementVNode("view", {
                    class: "item-content",
                    onClick: $setup.goChat
                  }, [
                    vue.createElementVNode("view", { class: "item-avatar" }, [
                      vue.createElementVNode("image", {
                        mode: "widthFix",
                        src: _imports_2$4
                      }),
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(["avatar-count", item * 20 < 99 ? "round" : "auto-round"])
                        },
                        vue.toDisplayString(item * 20),
                        3
                        /* TEXT, CLASS */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "item-info" }, [
                      vue.createElementVNode("view", { class: "info-name" }, "易烊千玺"),
                      vue.createElementVNode("view", { class: "info-text" }, "刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄刚刚结束拍摄")
                    ]),
                    vue.createElementVNode("view", { class: "item-time" }, "10:19")
                  ])
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_Bar, { actived: 2 })
    ]);
  }
  const PagesChatListChatList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/Code/IM/pages/chatList/chatList.vue"]]);
  const _imports_0 = "/static/card-bg.png";
  const _sfc_main$1 = {
    __name: "card",
    setup(__props, { expose: __expose }) {
      __expose();
      function goBack() {
        uni.navigateBack();
      }
      const __returned__ = { goBack };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.createElementVNode("view", { class: "status_bar" }),
      vue.createElementVNode("view", { class: "home-title" }, [
        vue.createElementVNode("p", null, "Starrice")
      ]),
      vue.createElementVNode("view", { class: "card-img" }, [
        vue.createElementVNode("image", {
          mode: "widthFix",
          style: { "width": "100%" },
          src: _imports_0
        }),
        vue.createElementVNode("view", {
          class: "close",
          onClick: $setup.goBack
        })
      ])
    ]);
  }
  const PagesCardCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Code/IM/pages/card/card.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/chatList/chatList", PagesChatListChatList);
  __definePage("pages/card/card", PagesCardCard);
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
