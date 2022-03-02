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
      instagram_long_lived_access_token: "IGQVJXcUVGQzVGc2V3cUw5RUdLd1FvNUY4dDVfQXVZAX3d1cFZARcHJCNHk1TE1VaVdxb2FzcGlFd2FibnJXU3NsczljdzUxSU9Hb3pEcUE0cnQzaFZAwUDdLNm9ucllLajFTZAmlUYmlR",
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