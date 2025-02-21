import Axios from "@/plugins/http/axios.js";
import AxiosConfig from "@/config/axiosConfig";

export default {
  emailSub: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/email/subscribe`,
      method: "post",
      data,
    });
  },
  loginTel: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/login/telegram`,
      method: "post",
      data,
    });
  },
  walletTonToken: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/login/ton-hexahero`,
      method: "post",
      data,
    });
  },
  friendsList: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-task/friends`,
      method: "get",
      data,
    });
  },
  taskList: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-task/status`,
      method: "get",
      data,
    });
  },
  /**
   * "key": "YouTuBeDailyNews"
   */
  taskUpdate: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-task/finish`,
      method: "post",
      data,
    });
  },
  /**
   */
  walletList: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-game/scores`,
      method: "get",
      data,
    });
  },
  /**
   * "key": "starchips gaia hex"
   * "value": "1"
   */
  walletEx: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-game/scores-to-gai`,
      method: "post",
      data,
    });
  },
  /**
   * name
   */
  gameList: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-game/likes`,
      method: "get",
      data,
    });
  },
  /**
   * "name": ""
   */
  gameEdit: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gg-game/like`,
      method: "post",
      data,
    });
  },
};
