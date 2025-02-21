export const errorRoutes = [
  {
    path: "/:path(.*)*",
    name: "redirect",
    redirect: "/404",
    meta: {
      auth: false,
      isHide: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "redirect",
    redirect: "/404",
    meta: {
      auth: false,
      isHide: true,
    },
  },
  {
    path: "/401",
    name: "noPower",
    component: () => import("@/views/error/NoPower.vue"),
    meta: {
      title: "NoPower",
      name: "NoPower",
      auth: false,
      isHide: true,
    },
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/views/error/NotFound.vue"),
    meta: {
      title: "NotFound",
      name: "NotFound",
      auth: false,
      isHide: true,
    },
  },
  {
    path: "/500",
    name: "serverError",
    component: () => import("@/views/error/ServerError.vue"),
    meta: {
      title: "ServerError",
      name: "ServerError",
      auth: false,
      isHide: true,
    },
  },
];

export const baseRoutes = [
  {
    path: "",
    name: "",
    component: () => import("@/views/admin/Index.vue"),
    meta: {
      auth: false,
      isHide: false,
    },
    redirect: to => {
      return {path: "/home"}
    },
    children: [{
      path: "/home",
      name: "GamesHome",
      component: () => import("@/views/admin/Home.vue"),
      meta: {
        title: "GamesHome",
        name: "GamesHome",
      },
    },{
      path: "/detail",
      name: "GamesDetail",
      component: () => import("@/views/admin/Detail.vue"),
      meta: {
        title: "GamesDetail",
        name: "GamesDetail",
      },
    },],
  }, {
    path: "/loading",
    name: "Loading",
    component: () => import("@/views/admin/m/components/Loading.vue"),
    meta: {
      title: "Loading",
      name: "Loading",
    },
  }, {
    path: "/user",
    name: "User",
    component: () => import("@/views/Index.vue"),
    meta: {
      auth: false,
      isHide: false,
    },
    redirect: to => {
      return {path: "/shop"}
    },
    children: [{
      path: "/shop",
      name: "UserShop",
      component: () => import("@/views/Shop.vue"),
      meta: {
        title: "UserShop",
        name: "UserShop",
      },
    }, {
      path: "/earn",
      name: "UserEarn",
      component: () => import("@/views/Earn.vue"),
      meta: {
        title: "UserEarn",
        name: "UserEarn",
      },
    }, {
      path: "/invite",
      name: "UserInvite",
      component: () => import("@/views/Invite.vue"),
      meta: {
        title: "UserInvite",
        name: "UserInvite",
      },
    }, {
      path: "/friends",
      name: "UserFriends",
      component: () => import("@/views/InviteFriends.vue"),
      meta: {
        title: "UserFriends",
        name: "UserFriends",
      },
    }, {
      path: "/requests",
      name: "UserRequests",
      component: () => import("@/views/InviteRequests.vue"),
      meta: {
        title: "UserRequests",
        name: "UserRequests",
      },
    }, {
      path: "/wallet",
      name: "UserWallet",
      component: () => import("@/views/Wallet.vue"),
      meta: {
        title: "UserWallet",
        name: "UserWallet",
      },
    }, {
      path: "/exchange",
      name: "UserExchange",
      component: () => import("@/views/Exchange.vue"),
      meta: {
        title: "UserExchange",
        name: "UserExchange",
      },
    },],
  }, {
    path: "/test",
    name: "Test",
    component: () => import("@/views/admin/m/Test.vue"),
    meta: {
      title: "Test",
      name: "Test",
    },
  },
];

export default [...errorRoutes, ...baseRoutes];
