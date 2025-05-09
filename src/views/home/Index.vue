<script setup lang="ts">
import Constants from "@/plugins/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';
import {reactive, ref} from "vue";

  const modules = [Navigation];

  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
</script>

<template>
  <section class="home" id="">
    <div class="h-body">
      <div class="re-flex-row-between h-header">
        <img class="hb-logo" :src="Constants.logo" alt="" />
        <img class="hb-menu" :src="Constants.ico.menu" alt="" />
      </div>
      <div class="h-contant">
        <swiper
          navigation
          :modules="modules"
          :slides-per-view="1"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="h-list"
        >
          <swiper-slide class="h-item hc-1">
            <div class="re-flex-row-center">
              <img class="c1-img" :src="Constants.home.img1" alt="" />
            </div>
            <div class="re-flex-row-center">
              <img class="c1-ico" :src="Constants.ico.line" alt="" />
            </div>
            <h1 class="gradient-txt c1-title">Building Legacies, Together</h1>
            <div class="c1-line"></div>
            <p class="c1-desc">At Adelson Ventures, we invest in startups reshaping industries. If you’re building the future of technology, sustainability, or financial innovation, let’s partner for exponential growth."</p>
            <div class="re-flex-row-center">
              <button class="re-flex-row-center c1-btn">
                <span>Explore Opportunities</span>
                <img class="btn-ico" :src="Constants.ico.dctRight" alt="" />
              </button>
            </div>
          </swiper-slide>
          <swiper-slide class="h-item hc-2">
            <h1 class="gradient-txt_90 c-title">WHO WE ARE</h1>
            <div class="re-flex-row-center">
              <img class="c-img" :src="Constants.home.img2" alt="" />
            </div>
            <p class="c-desc">Adlelson Ventures is venture capital firm built by founders, for founders. We bridge the gap between visionary ideas and scalable success. Our team combines decades of operational expertise with deep financial acumen to turn early-stage startups into industry leaders.</p>
          </swiper-slide>
          <swiper-slide class="h-item hc-2">
            <h1 class="gradient-txt_90 c-title">CORE  VALUES</h1>
            <div class="re-flex-row-center">
              <img class="c-img" :src="Constants.home.img3" alt="" />
            </div>
            <h2 class="gradient-txt c-title_small">We back fearless entrepreneurs solving hard problems. </h2>
            <p class="c-desc_no">Long-Term Partnerships: We commit beyond capital—aligning with founders for 5+ years.</p>
            <p class="c-desc_no">Operator’s Edge: Our hands-on support includes go-to-market strategy, talent acquisition, and scaling infrastructure.</p>
          </swiper-slide>
          <swiper-slide class="h-item hc-3">
            <h1 class="gradient-txt_90 c-title">Contact Us</h1>
            <div class="form">
              <div class="form-item re-flex-row-center-ai" ref="name">
                <label id="name">Name</label>
                <div class="form-in re-flex-row">
                  <div class="gradient-input form-in_half">
                    <input class="input-sty" placeholder="First Name" />
                  </div>
                  <div class="gradient-input form-in_half ">
                    <input class="input-sty" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div class="form-item re-flex-row-center-ai" ref="email">
                <label id="email">Email</label>
                <div class="gradient-input form-in">
                  <input class="input-sty" placeholder="" />
                </div>
              </div>
              <div class="form-item re-flex-row" ref="message">
                <label id="message">Message</label>
                <div class="gradient-input form-in form-textarea">
                  <textarea class="input-sty" placeholder="" rows="3"></textarea>
                </div>
              </div>
              <div class="form-item re-flex-row" ref="submit">
                <label id="submit"></label>
                <div class="form-in form-btns re-flex-row-center">
                  <button class="form-btn re-t-cp">Submit</button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
	.home {
    width: 100%;
    height: 100%;
		background-color: #000;
    background-image: url("@/assets/images/home/bg.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
	}
  .h-body {
    width: 414px;
    height: 351px;
    background: rgba(12,31,71,0.8);
    backdrop-filter: blur(2px);
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    padding: 16px;
  }
  .h-header {
    .hb-logo {
      width: 18px;
      height: 16px;
    }
    .hb-menu {
      width: 14px;
      height: 11px;
    }
  }
  .h-contant {
    :deep(.swiper-button-prev) {
      left: 0;
      width: 21px;
      height: 8px;
      background-image: url("@/assets/images/ico/left.png");
      background-repeat: no-repeat;
      background-size: contain;
      &::after {
        content: " ";
      }
    }
    :deep(.swiper-button-next) {
      right: 0;
      width: 21px;
      height: 8px;
      background-image: url("@/assets/images/ico/right.png");
      background-repeat: no-repeat;
      background-size: contain;
      &::after {
        content: " ";
      }
    }
    :deep(.swiper-button-disabled) {
      opacity: 0;
    }

    .h-list {
      .h-item {
        min-height: 290px;
      }
    }
  }

  .hc-1 {
    .c1-img {
      width: 161px;
      height: 60px;
      margin-top: 62px;
    }
    .c1-ico {
      width: 28px;
      height: 5px;
      margin-top: 26px;
    }
    .c1-title {
      font-family: RobotoSerif-Regular, RobotoSerif;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 1.5;
      text-align: center;
      font-style: normal;
      margin-top: 25px;
    }
    .c1-line {
      width: 281px;
      height: 0.1px;
      background: linear-gradient(90deg, rgba(255, 234, 170, 1), rgba(158, 133, 77, 1)) 0 0;
      margin: 10px auto 0;
    }
    .c1-desc {
      width: 281px;
      font-family: SourceHanSans-Regular, SourceHanSans;
      font-weight: 400;
      font-size: 9px;
      color: #FFFFFF;
      line-height: 1.3333;
      text-align: center;
      font-style: normal;
      margin: 3px auto 0;
    }
    .c1-btn {
      width: 128px;
      height: 16px;
      background: linear-gradient( 180deg, #F4D98C 0%, #F5D47A 31%, #A38239 100%);
      font-family: HelveticaNeue;
      font-size: 10px;
      color: #0C1F47;
      line-height: 0.8;
      text-align: center;
      font-style: normal;
      margin-top: 28px;
      .btn-ico {
        width: 9px;
        height: 6px;
        margin-left: 4px;
      }
    }
  }
  .hc-2 {
    .c-title {
      font-family: RobotoSerif-Regular, RobotoSerif;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      margin-top: 16px;
    }
    .c-title_small {
      font-family: SourceHanSans-Bold, SourceHanSans;
      font-weight: bold;
      font-size: 9px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      margin-top: 5px;
    }
    .c-img {
      width: 281px;
      height: 146px;
      margin-top: 13px;
    }
    .c-desc {
      width: 281px;
      font-family: SourceHanSans-Regular, SourceHanSans;
      font-weight: 400;
      font-size: 9px;
      color: #FFFFFF;
      line-height: 1.3333;
      text-align: center;
      font-style: normal;
      margin: 8px auto 0;
    }
    .c-desc_no {width: 281px;
      font-family: SourceHanSans-Regular, SourceHanSans;
      font-weight: 400;
      font-size: 9px;
      color: #FFFFFF;
      line-height: 1.3333;
      text-align: center;
      font-style: normal;
      margin: 5px auto 0;
    }
  }

  .hc-3 {
    .c-title {
      font-family: RobotoSerif-Regular, RobotoSerif;
      font-weight: normal;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
      margin-top: 30px;
    }
    .form {
      width: 283px;
      margin: 30px auto 0;
      textarea {
        resize: none;
      }
      .form-item {
        margin-top: 16px;
        &:first-child {
          margin-top: 0;
        }
        label {
          width: 40px;
          font-family: SourceHanSans-Regular, SourceHanSans;
          font-weight: 400;
          font-size: 9px;
          color: #FFFFFF;
          line-height: 1;
          text-align: right;
          font-style: normal;
        }
        .form-in {
          width: calc(100% - 40px - 8px);
          margin-left: 8px;
        }
        .form-in_half {
          width: calc(50% - 2px);
          margin-left: 4px;
          &:first-child {
            margin-left: 0;
          }
        }
        .form-textarea {
          height: 56px;
        }
        .input-sty {
          width: 100%;
          height: 100%;
          padding: 3px 7px 4px;
          font-family: SourceHanSans-Regular, SourceHanSans;
          font-weight: 400;
          font-size: 9px;
          color: #FFFFFF;
          line-height: 1;
          text-align: left;
          font-style: normal;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
      .form-btns {
        margin-top: 2px;
        .form-btn {
          width: 71px;
          height: 20px;
          background: linear-gradient( 180deg, #F4D98C 0%, #F5D47A 41%, #A38239 100%);
          border-radius: 3px;
          font-family: SourceHanSans-Regular, SourceHanSans;
          font-weight: 400;
          font-size: 9px;
          color: #000425;
          line-height: 1.4444;
          text-align: center;
          font-style: normal;
        }
      }
    }
  }
</style>
