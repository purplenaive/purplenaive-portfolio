import { createStore } from 'vuex'
import { createApp } from 'vue'

import { router } from './router';

import App from './App.vue'

const store = createStore({
  state () {
    return {
      tistory_access_key: "f1c5c7f914900a7f5f7a323bad3f499f_f68e91174ece5ce4c1fed1092b5cbd1d",
      coding_category: 769738,
      instagram_user_id: "17841402014008066",
      instagram_long_lived_access_token: "IGQVJVQnNHNU1Oc3o4RnEzVlotSlgxWHJrai13cFVzazQ4RkU2WmRHY0xnLURjZAjZAaODlYVHNOb3RKZAm9XWlNDQm85ZAVQ1WkxsakRvMnd2NVlrcGV6MlpNSE1Oa0pXWF9QMjhhd3ZAYS1FZAdzhlcDdaUENPRHRwVkloaW9V",
      tooltip_targets: []
    }
  },
  mutations: {
    assignTooltipTargets(state) {
      const targets = document.querySelectorAll(".tooltipBox");

      state.tooltip_targets = targets;
    }
  },
  getters: {
    getTooltipTargets(state) {
      return state.tooltip_targets;
    }
  }
})

const app = createApp(App);

app.use(router).use(store) .mount("#app")