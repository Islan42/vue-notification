import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const NotificationMessageComponent = {
  props: {
    type: {type: String, default: 'info'},
    header: {type: String, default: 'Check it out'},
  },
  emits: ['close-notification'],
  template: '#notification-message-template'
}
createApp({
  components: {
    NotificationMessage: NotificationMessageComponent,
  },
  data(){
    return {
      notification: true,
    }
  },
  methods: {
    closeit(){
      this.notification = !this.notification
    },
  }
}).mount("#app")
