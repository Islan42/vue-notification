import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const NotificationMessageComponent = {
  props: {
    type: {type: String, default: 'info'},
    header: {type: String, default: 'Check it out'},
  },
  template: '#notification-message-template',
  data(){
    return {
      hidden: false,
    }
  },
  methods: {
    hide(){
      this.hidden = true
    },
  }
}
createApp({
  components: {
    NotificationMessage: NotificationMessageComponent,
  },
}).mount("#app")
