import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDMEd3umQp7ktPIUvgGcAemRBAL4-P-jD4",
  authDomain: "vue-calender-52a5b.firebaseapp.com",
  databaseURL: "https://vue-calender-52a5b.firebaseio.com",
  projectId: "vue-calender-52a5b",
  storageBucket: "vue-calender-52a5b.appspot.com",
  messagingSenderId: "421318369427",
  appId: "1:421318369427:web:6b1b4e9c0d352b3492ad66"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
