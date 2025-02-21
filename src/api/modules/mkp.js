import Axios from "@/plugins/http/axios.js";
import AxiosConfig from "@/config/axiosConfig";

export default {
  listMkp: (data) => {
    return Axios({
      url: `${AxiosConfig.baseUrl}/gaiai-file/list`,
      method: "get",
      data,
    });
  },
};
