<template>
  <v-app>
    <v-navigation-drawer class="hidden-md-only" v-model="sidebar" app>
        <v-list>
            <v-list-item 
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path"
            >
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>{{ item.title }}</v-list-item-content>
            </v-list-item>
            <v-list-item style="cursor: pointer">
                <v-list-item-action>
                  <v-icon>
                    mdi-login
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content @click="modal()">
                    Login
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app style="height: auto;">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor:pointer">
            <img
              height="85px"
              width="85px"
              src="./assets/logo.png"
              style="margin-top: 2px;margin-bottom: -10px"
            >
          </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
          <v-btn
          
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          
          >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
          </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          @click="modal()"
        ><v-icon>mdi-login</v-icon> LOGIN</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
        <router-view></router-view>
    </v-main>

    

  <!------------
    MODAL LOGIN
  -------------->


    <v-bottom-sheet v-model="loginDialog" width="800"  class="text-center">
      <v-sheet class="text-center" height="300px">
        
        <div class="my-3" style="padding-left: 30%;padding-right: 30%;padding-top:1%">
          <h2 style="color:#007580;">Login</h2>
          <v-text-field
            label="Username"
            clearable
          ><v-icon slot="prepend" color="blue">mdi-account</v-icon></v-text-field><br>
          <v-text-field
            class="mb-n3"
            label="Password"
            type="password"
            clearable
          >
          <v-icon slot="prepend" color="blue">mdi-account-key</v-icon>
          </v-text-field>
          <span class="ml-n10" style="color:#cccccc;">Not registered?</span><span style="color: #007580;cursor:pointer" @click="signup()">Create an account</span><br><br>
          <v-btn color="success" width="100%" rounded>Login</v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-bottom-sheet inset v-model="signupDialog" width="800" class="text-center">
      <v-sheet class="text-center" height="690px">
        <div class="my-3" style="padding-left: 30%;padding-right: 30%;padding-top:1%">
          <h2 style="color:#007580;padding-bottom:17%">Sign Up</h2>
          <v-text-field
            v-model="fillupForm.firstName"
            ref="txt"
            label="First Name"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="fillupForm.lastName"
            label="Lastname"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="fillupForm.contactNumber"
            label="Contact Number"
            max="12"
            @keypress="isNumber(event)"
            clearable
          ></v-text-field>
          <v-slider
           v-model="fillupForm.age"
              color="#007580"
              label="Age"
              min="1"
              max="120"
              thumb-label
          ></v-slider>
          <v-text-field
              v-model="fillupForm.password1"
              label="Password"
              type="password"
              clearable
          ></v-text-field>
          <v-text-field
            v-model="fillupForm.password2"
            label="Repeat Password"
            type="password"
            clearable
          ></v-text-field>
            <v-btn color="info" width="100%" @click="finishedSingup()">Signup</v-btn><br><br>
            <v-btn color="error" width="100%" @click="backToLogin()">Back</v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
    <v-snackbar
      v-model="alert"
      class="text-center ma-2"
    ><v-icon color="red">mdi-alert-circle</v-icon>
       {{alertMessage}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>


<script>


export default {
  data(){
    return{
      alertMessage: '',
       sidebar: false,
       loginDialog: false,
       signupDialog: false,
       alert: false,
       fillupForm: { },
       menuItems: [
          {
              title: 'Home',
              path: '/',
              icon: 'mdi-home'
          },
          {
              title: 'Product',
              path: '/product',
              icon: 'mdi-gift'
          },
           {
              title: 'About',
              path: '/about',
              icon: 'mdi-comment-text-outline'
          },
      ]
    }
  },
  watch:{
      signupDialog(val){
        if(val == false) {
          this.fillupForm = {}
          this.alert = false
        }else{
          this.fillupForm.firstName = ''
          this.fillupForm.lastName = ''
          this.fillupForm.contactNumber = ''
          this.fillupForm.password1 = ''
          this.fillupForm.password2 = ''
        }
      }
  },
  methods: {
    modal() {
      this.loginDialog = true
    },
    signup(){
      this.loginDialog = false
      this.signupDialog = true
    },
    backToLogin(){
      this.signupDialog = false
      this.loginDialog = true
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    finishedSingup() {
      if( this.fillupForm.firstName == "" ){
        this.alert = true
        this.alertMessage = "Please Input First Name!"
      }else if(this.fillupForm.lastName == "") {
        this.alert = true
        this.alertMessage = "Please Input Last Name!"
      }else if(this.fillupForm.contactNumber == "") {
        this.alert = true
        this.alertMessage = "Please Input Contact Number!"
      }else if(this.fillupForm.password1 == "") {
        this.alert = true
        this.alertMessage = "Please Input Password!"
      }else if(this.fillupForm.password2 == "") {
        this.alert = true
        this.alertMessage = "Please Input Repeat Password!"
      }else if(this.fillupForm.password1 != this.fillupForm.password2) {
        this.alert = true
        this.alertMessage = "Password dont match!"
      }
    }
  },

}
</script>

<style>

#app {
  font-family: Georgia, serif;
  
}
.v-toolbar__title{
  font-family: "Gill Sans", sans-serif;
}

@font-face {
        font-family: "RickonRegular";
        src: local("RickonRegular"),
        url(./fonts/rickon-font/RickonRegular.ttf) format("truetype");
  }
</style>