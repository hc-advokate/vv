<template>
<div class="com-body earn-body re-full">
  <Back path="/home"></Back>
  <div class="com-container earn-container re-w-full">
    <div class="re-flex-row-center" v-if="false">
      <a-image fit="cover" :preview="false" :src="ImgDemoAva" class="ea-ava"></a-image>
    </div>
    <div class="re-flex-row-center ea-name" v-if="false">Leo</div>
    <div class="re-flex-row-center" v-if="false">
      <div class="re-flex-row-center ea-amount">
        <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center ea-ico"></a-image>
        <span class="eaa-value">36</span>
      </div>
    </div>

    <div class="com-font-title-sub ea-title eat-dt">Youtube</div>
    <div class="com-list ea-list">
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoYtb" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Daily news</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.youTuBeDailyNews" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.YouTuBeDailyNews.key)">GO</a-button>
        </div>
      </div>
    </div>

    <div class="com-font-title-sub ea-title eat-dt">Daily Reward</div>
    <div class="ea-list">
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoDaily" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Daily reward</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.signDailyReward" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.SignDailyReward.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoGame" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Play Hexa Ringracer</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.payDroneGame" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.PayDroneGame.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoGame" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Play DreamCatcher</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.payDreamcatcherGame" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.PayDreamcatcherGame.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoGame" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Play Gemfruit Harvest</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.payCandyGame" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.PayCandyGame.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoGame" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Play HexaHero</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.payHexaHeroGame" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.PayHexaHeroGame.key)">GO</a-button>
        </div>
      </div>
    </div>

    <div class="com-font-title-sub ea-title eat-dt">Task List</div>
    <div class="ea-list">
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoTg" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Join our TG channe!</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.joinOurTGChanne" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.JoinOurTGChanne.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoX" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Follow our X account</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.followOurXAccount" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.FollowOurXAccount.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoExchange" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Choose your exchange</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.chooseYouExchange" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.ChooseYouExchange.key)">GO</a-button>
        </div>
      </div>
      <div class="com-item ea-item">
        <div class="ci-l ea-lt">
          <a-image fit="cover" :preview="false" :src="IcoInvite" class="re-flex-row-center cil-img ii-img"></a-image>
          <div class="cil-text">
            <div class="text-name">Invite 3 friends</div>
            <div class="text-num re-flex-row-center-ai">
              <a-image fit="cover" :preview="false" :src="ImgCoinGB" class="re-flex-row-center cil-ico ii-ico"></a-image>
              <span class="ii-num">+50</span>
            </div>
          </div>
        </div>
        <div class="ci-r re-flex-row-center">
          <a-image v-if="data.invite3Friends" fit="cover" :preview="false" :src="ImgSuccess" class="re-flex-row-center btn-ico"></a-image>
          <a-button v-else class="re-flex-row-center btn-btn" @click="onSubmitTask(dataTask.Invite3Friends.key)">GO</a-button>
        </div>
      </div>
    </div>
  </div>
  <Quick></Quick>
</div>
</template>

<script setup>
import Back from "@/views/components/Back.vue";
import Quick from "@/views/components/Quick.vue";
import ImgDemoAva from "@/assets/demo/demo-ava.png";
import IcoYtb from "@/assets/icon/ytb.png";
import IcoDaily from "@/assets/icon/daily.png";
import IcoTg from "@/assets/icon/tg.png";
import IcoX from "@/assets/icon/x.png";
import IcoExchange from "@/assets/icon/exchange.png";
import IcoInvite from "@/assets/icon/invite.png";
import ImgCoinGB from "@/assets/icon/coin-g-big.png";
import ImgSuccess from "@/assets/icon/status-suc.png";
import IcoGame from "@/assets/icon/game.png";
import {onMounted, reactive} from "vue";
import api from "@/api/index.js";
import {useRouter} from "vue-router";

let data = reactive({
  chooseYouExchange: false,
  followOurXAccount: false,
  invite3Friends: false,
  joinOurTGChanne: false,
  payCandyGame: false,
  payDreamcatcherGame: false,
  payDroneGame: false,
  payHexaHeroGame: false,
  signDailyReward: false,
  youTuBeDailyNews: false,
});

const dataTask = {
  YouTuBeDailyNews: {
    id: 0,
    key: "YouTuBeDailyNews",
    gaia: 50,
    type: 1,
    url: '',
  },
  SignDailyReward: {
    id: 0,
    key: "SignDailyReward",
    gaia: 50,
    type: 2,
    url: '',
  },
  PayDroneGame: {
    id: 15,
    key: "PayDroneGame",
    gaia: 50,
    type: 2,
    url: '/detail',
  },
  PayCandyGame: {
    id: 14,
    key: "PayCandyGame",
    gaia: 50,
    type: 2,
    url: '/detail',
  },
  PayDreamcatcherGame: {
    id: 11,
    key: "PayDreamcatcherGame",
    gaia: 50,
    type: 2,
    url: '/detail',
  },
  PayHexaHeroGame: {
    id: 1,
    key: "PayHexaHeroGame",
    gaia: 50,
    type: 2,
    url: '/detail',
  },
  JoinOurTGChanne: {
    id: 0,
    key: "JoinOurTGChanne",
    gaia: 50,
    type: 3,
    url: '',
  },
  FollowOurXAccount: {
    id: 0,
    key: "FollowOurXAccount",
    gaia: 50,
    type: 3,
    url: '',
  },
  ChooseYouExchange: {
    id: 0,
    key: "ChooseYouExchange",
    gaia: 50,
    type: 3,
    url: '/wallet',
  },
  Invite3Friends: {
    id: 0,
    key: "Invite3Friends",
    gaia: 50,
    type: 3,
    url: "",
  },
};

const onSubmitTask = (key) => {
  if (key === "ChooseYouExchange") {
    toPage(dataTask[key]);
  } else {
    api.userApi.taskUpdate({key: key}).then((res) => {
      initData();
      toPage(dataTask[key]);
    });
  }
}

const router = useRouter();
const toPage = (obj) => {
  if (obj.id) {
    router.push({path: obj.url, query: {id: obj.id}});
  } else {
    window.location.href = obj.url;
  }
}

const initData = () => {
  api.userApi.taskList({}).then((res) => {
    if (!res.code) {
      data.chooseYouExchange = res.data.chooseYouExchange;
      data.followOurXAccount = res.data.followOurXAccount;
      data.invite3Friends = res.data.invite3Friends;
      data.joinOurTGChanne = res.data.joinOurTGChanne;
      data.payCandyGame = res.data.payCandyGame;
      data.payDreamcatcherGame = res.data.payDreamcatcherGame;
      data.payDroneGame = res.data.payDroneGame;
      data.payHexaHeroGame = res.data.payHexaHeroGame;
      data.signDailyReward = res.data.signDailyReward;
      data.youTuBeDailyNews = res.data.youTuBeDailyNews;
    }
  });
}

onMounted(() => {
  initData();
  if (window.localStorage.getItem("tgUserId")) {
    dataTask.Invite3Friends.url = `https://t.me/share/url?url=https://t.me/TOKENATION_FI_bot/TOKENATION?startapp=${window.localStorage.getItem("tgUserId")}&text=🎁 Play, Earn - Where Every Game Leads to an Airdrop Adventure! GAME ON!`;
    dataTask.JoinOurTGChanne.url = `https://t.me/share/url?url=https://t.me/TOKENATION_FI_bot/&text=🎁 Play, Earn - Where Every Game Leads to an Airdrop Adventure! GAME ON!`;
  }
})
</script>

<style scoped lang="scss">
@use "./index.scss";
.ea-ava {
  width: 80px;
  border-radius: 50%;
}
.ea-name {
  font-family: Barlow-Black, Barlow;
  font-weight: 900;
  font-size: 20px;
  color: #FFFFFF;
  line-height: 1;
  text-align: center;
  font-style: normal;
  margin-top: 10px;
}
.ea-amount {
  width: 50%;
  margin-top: 20px;
  padding: 5px 0;
  background: rgba(106, 57, 255, 0.3);
  border-radius: 38px;
  .ea-ico {
    width: 20px;
  }
  .eaa-value {
    font-family: Barlow-Bold, Barlow;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 1;
    text-align: left;
    font-style: normal;
    margin-left: 10px;
  }
}
.ea-title {
  font-family: Barlow-Bold, Barlow;
  font-weight: bold;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
}
.eat-bt {
  margin-top: 20px;
}
.eat-dt {
  margin-top: 30px;
}
.ea-list {
  margin-top: 20px;
  .ea-item {
    background: #24252B;
    border-radius: 10px;
    color: #FFF;
    .ii-img {
      height: 50px;
    }
    .ii-num {
      margin-left: 10px;
    }
    .btn-ico {
      width: 25px;
    }
    .btn-btn {
      width: 66px;
      height: 38px;
      background: #6A39FF;
      border-radius: 22px;
      font-family: Barlow-Bold, Barlow;
      font-weight: bold;
      font-size: 20px;
      color: #FFFFFF;
      line-height: 1;
      text-align: center;
      font-style: normal;
    }
  }
}
</style>
