<template>
  <v-container style="margin-top: -10px; padding-bottom: 0px" fluid>
        <v-lazy
            v-model="isActive"
            :options="{
            threshold: .1000    
            }"
        v-if="bottomOfWindow > 555"
        transition="scale-transition"
                >
            <a  href="#sec1" v-smooth-scroll><v-btn fab style="position: fixed;bottom:20px;right:30px;z-index:99;">
            <font-awesome-icon class="ml-n0 mb-n1" style="font-size: 20px; color:#333;" icon="arrow-up"/>
            </v-btn></a>
        </v-lazy>
        <v-row id="sec1">
             <v-col cols="12"> 
                 <v-lazy
                    v-model="isActive"
                    :options="{
                    threshold: .1000
                    }"
                    transition="scale-transition"
                >
                <v-parallax src="../assets/parallax.jpg" height="500" style="position:relative;margin: -13px;">
                    <span class="headerFont">Clothes for your daily needs</span><br>
                    <span class="headerSub" style="bottom: 10px;">Join now and be the first to know our new offers and promotions!</span> 
                    <a  href="#sec-3" v-smooth-scroll><v-btn fab class="scrollButton">
                        <font-awesome-icon class="ml-n0 mb-n1" style="font-size: 20px; color:#333;" icon="arrow-down"/>
                    </v-btn></a>
                    <a href="#secBuy" v-smooth-scroll class="text-center learnMore">Learn More <font-awesome-icon icon="angle-right" style="font-size: 20px;padding-top:3px;"></font-awesome-icon></a>
                </v-parallax>
                 </v-lazy>
             </v-col>
         </v-row>
         <v-row id="sec-3">
             <v-col md="6"  style="padding: 0">
                <v-img class="logo"
                    src="../assets/online_shop.jpg"  
                >
                </v-img>
             </v-col>
             <v-col md="6" style="padding: 0">

                    <v-img 
                    class="white--text align-end logo"
                    
                    src="../assets/logo1.jpg"
                    >
                    <v-card-title>
                            NEW ARRIVALS!
                            <br><br>
                              Comfort, Redesigned
                    </v-card-title>
                    <v-btn elevation="2" to="/" color="primary" style="margin: 10px;">SHOP NOW!</v-btn>
                    </v-img>
                    
             </v-col>
         </v-row>
         <v-row>
             <v-col md="6" style="padding: 0">
                    <v-lazy
                        v-model="isActive"
                        transition="scroll-x-transition"
                        :options="{
                        threshold: .50
                        }"
                        >
                        <v-img 
                        src="../assets/Home.jpg"
                        
                        width="800"
                        
                        >
                        </v-img>
                    </v-lazy>
             </v-col>
            <v-col md="6" style="padding: 0" class="pt-16 pa-5">

                    <span class="text-xl-h4 mb-5" style="font-family: Georgia, serif;color: #818185;font-size: 1.97em;">
                        About Us
                    </span><br><br>
                    <span class="text-xl-h4 mb-5" style="font-family: Georgia, serif;color: #007580 !important;font-size: 1.97em;">
                        Good Things Inside
                    </span><br>
                    <p>
                        Good Things Inside  is an authentic American heritage brand, based in the Ozark Mountains, celebrating the region’s unique history of outdoor recreation, sporting and folklore.
                    </p>
                    <v-btn rounded outlined class="btn-hover mb-2">
                        Learn More
                    </v-btn>
            </v-col>
         </v-row>
         <v-row>
             <v-col>
                 <div class="text-center">
                         <h2 class="text-xl-h4 mb-n1" style="font-family: Georgia, serif;color: #007580 !important;font-size: 1.97em;">Trending Collection </h2>
                         <span style="color:grey; font-size:12px">We'd love to serve with great quality stuff for you </span>
                 </div>
                <carousel 
                    autoplay 
                    :autoplayTimeout="5000"
                    :perPage="carouselPage"
                    paginationActiveColor="#007580"
                >
                    <slide v-for="(item, index) in slides" :key="index">
                        <v-card
                            class="mx-auto my-12"
                            :max-width="itemWidth"
                        >
                            <v-img
                            height="500"
                            :src="getImage(item.items)"
                            ></v-img>
                            <v-card-title>{{item.name}}</v-card-title>
                            <v-card-text>
                            <div class="my-4 subtitle-1">
                                $ • {{item.brand}}
                            </div>

                            <div style="height: 50px">{{item.description}}</div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn rounded outlined class="btn-hover ma-3" width="93%">Buy Now</v-btn>
                            </v-card-actions>
                        </v-card>
                    </slide>
                </carousel>
             </v-col>
         </v-row>
         <v-row class="text-center " >
             
            <v-col class="userInformation" :cols="shopInformation">
                    <font-awesome-icon class="mr-3 fontAwesome" icon="shopping-cart"/><br>
                    <span class="mt-n5" style="font-weight:bold; font-size:17px">Easy way to shop</span><br>
                    <span style="color:grey; font-size:10px;">Many items to choose from</span>
            </v-col>
            <v-col class="userInformation" :cols="shopInformation" >
                    <font-awesome-icon class="mr-0 fontAwesome" icon="headphones"/><br>
                    <span class="mt-n5" style="font-weight:bold; font-size:17px">Fast Service</span><br>
                    <span style="color:grey; font-size:10px;">Service staff reply as fast as they can</span>
            </v-col>
            <v-col class="userInformation" :cols="shopInformation" >
                    <font-awesome-icon class="mr-1 fontAwesome" icon="truck"/><br>
                    <span class="mt-n5" style="font-weight:bold; font-size:17px">Free Shipping</span><br>
                    <span style="color:grey; font-size:10px;">Free standard shipping on all orders over ₱500 </span>
            </v-col>
            <v-col class="userInformation" :cols="shopInformation">
                    <font-awesome-icon class="mr-0 fontAwesome"  icon="credit-card"/><br>
                    <span class="mt-n5" style="font-weight:bold; font-size:17px">Pay Online</span><br>
                    <span style="color:grey; font-size:10px;">Many different ways to pay online</span>
            </v-col>
         </v-row>
         <v-row id="secBuy">
             <v-col md="6" style="padding: 0;margin:auto;" class="pa-5">
                    <span style="font-weight: bold">
                     Buy now and get up to 70% discount
                    </span><br>
                    <span style="color: grey">
                    Flash Sale
                    </span><br><br>
                    <span style="color: grey">
                    As a gift from our beloved customer we have a flash sale up to 70% off. For us to show support to care. Please keep supporting us. What are you waiting for hurry up and grab the deal before its to late.
                    </span><br>
                    <v-btn rounded outlined class="btn-hover mt-5">
                        Buy Now!
                    </v-btn>

            </v-col>
             <v-col md="6" style="padding: 0">
                  <v-lazy
                        v-model="isActive"
                        transition="fab-transition"
                        >
                        <v-img 
                        src="../assets/endorsement.jpg"
                        height="550"
                        width="auto"
                        
                        >
                        </v-img>
                    </v-lazy>
             </v-col>
         </v-row>
         <v-row  style="background-color: #312c2b; color: #ffffff; font-family: sans-serif;" class="pt-10">
             <v-col :cols="watchCols" class="pa-6">
                <span style="font-size: 19px;">SHOW US THAT YOU CARE</span><br>
                <span style="color: #696666">Feel free to leave us a message and for other inquiry.</span><br><br>
                <v-text-field
                    color="#696666"
                    background-color="white"
                    filled
                    label="Name"
                ></v-text-field>
                <v-textarea
                    color="#696666"
                    background-color="white"
                    height="120"
                    label="Message"
                    filled
                >
                </v-textarea>
                <v-icon color="white" large class="mr-5 icon">mdi-facebook</v-icon>
                <v-icon color="white" large class="mr-5 icon">mdi-instagram</v-icon>
                <v-icon color="white" large class="icon">mdi-twitter</v-icon>
             </v-col>
             <v-col :cols="watchCols" class="pa-6">
                 <span style="font-size: 19px;">CONTENT DISCLAIMER</span><br>
                 <span style="color: #696666">This  information is obtained with list that considered to be reliable, however no representation is made as to, and no responsibility or liability  is accepted for, the accuracy or completeness of the information, Information contained herein is subject to change at any time without notice</span><br>
                 <br><span style="font-size: 19px;">INDEX DATA USAGE NOTICE</span><br>
                 <span style="color: #696666">All data and content on the website and in the database product are for informational and personal use only. The total return data provided on the website, the database product, and the reports generated from them are for internal, non commercial use only.</span>
             </v-col>
         </v-row>
         <v-row style="background-color: #312c2b;color: #e3e1e1; font-family: sans-serif;">
             <v-col class="text-center">
                 <span style="font-size: 15px;">&copy;2020 - {{ new Date() | moment("YYYY") }} Kyle Prince Garcia</span>
             </v-col>
         </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
             isActive: false,
             bottomOfWindow: 0,
              window: {
                    width: 0,
                    height: 0
                },
            slides: [
                {
                    items:'item1.jpg',
                    name: 'M&S Collection Set',
                    brand: 'M&S',
                    description: 'leading British retailer bringing quality, great value food, clothing and homeware to millions of customers around the world.'
                
                },
                {
                    items:'item2.jpg',
                    name: 'Colored Polo Shirt',
                    brand: 'Ralph Lauren',
                    description: 'American fashion company producing products ranging from the mid-range to the luxury segments. '
                
                },
                {
                    items:'item3.jpg',
                    name: 'Nike Apparel',
                    brand: 'Nike',
                    description: 'NIKE, Inc. engages in the design, development, marketing, and sale of athletic footwear, apparel, accessories, equipment, and services.'
                
                },
                {
                    items:'item4.jpg',
                    name: 'Santy Black',
                    brand: 'Z Supply',
                    description: 'Z SUPPLY designs reflect the belief that simplicity, comfort and style should coexist in every closet.'
                
                },
                {
                    items:'item5.jpg',
                    name: 'Women Friday Set',
                    brand: 'Prada',
                    description: 'Prada clothes and accessories have been described as both classic and eccentric.'
                
                },
                {
                    items:'item6.jpg',
                    name: 'Boys apparel',
                    brand: 'Hermes',
                    description: 'Hermes is a fashion house steeped in history and tradition. Family-owned for five generations.'
                
                },
                {
                    items:'item7.jpg',
                    name: 'Mens Ties, Bow Ties, Shirts',
                    brand: 'Tie Bar',
                    description: 'Tie Bar is your one-stop destination for designer menswear with quality made ties, bow ties, mens dress shirts, socks, tie bars & more.'
                
                },
                {
                    items:'item8.jpg',
                    name: 'T-Shirt for men',
                    brand: 'Graphix',
                    description: 'Garment Graphixs provide branded and embroidered workwear for a range of industries.'
                
                }
			]
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        window.addEventListener('scroll', this.handleScroll);
        this.scroll()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        getImage(val){
            return require('../assets/' + val)
        },
        scroll() {
            window.onscroll = () => {
             this.bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
            //  console.log(this.bottomOfWindow)
         }
        }
    },
    computed: {
        watchCols: function(){
            if(this.window.width >= '800'){
                return 6
            }else{
                return 12
            }
        },
        carouselPage: function(){
            if(this.window.width > '240' && this.window.width < '1000'){
                return 1
            }else if (this.window.width > '1000' && this.window.width < '1300'){
                return 2
            }{
                return 3
            }
        },
        shopInformation: function(){
            if(this.window.width < 700){
                return 12
            }
            return 3
            
        },
        itemWidth(){
            if (this.window.width < 380) {
                return 280 
            }else if (this.window.width < 425){
                return 350
            }
            return 400
        }
    }
}
</script>
<style>
    .logo{
        height: 570px;
        width: auto;
    }
    .btn-hover{
       background-color: #ffffff;
       color: #212121;
    }

    .btn-hover:hover{
        background-color: #007580;
        color: #ffffff;
    }
    .icon{
        cursor: pointer;
    }
    .icon:hover{
         transform: scale(1.3);
    }
    .userInformation{
        color:white;
        background-color: #183153; 
        padding: 40px;
    }
    .headerFont{
        font-family: RickonRegular;
        color:white;
        font-size:60px;
        text-shadow: 4px 4px #333;
        transition: all .5s;
        text-align: center;
    }
    .headerSub{
        font-family:Arial, Helvetica, sans-serif;
        color:white;
        font-size:25px;
        text-shadow: 2px 1px #333;
        transition: all .5s;
        text-align: center;
    }
    .scrollButton{
        background-color: #f5f5f5;
        border: grey;
        color: white;
        padding: 20px;
        font-size: 16px;
        margin: 4px 2px;
        width: 56px;
        height: 50px;
        border-radius: 50%;
        margin-left: 50%;
        bottom: 0;
        position: absolute;
        text-decoration: none;
    }
    .fontAwesome{
        font-size: 45px; 
        color:#63e6be;
    }
    .fontAwesome:hover{
        transform: scale(1.3);
    }
    .learnMore{
        margin-top: 10px;
        text-decoration:none;
        font-family: arial;
        font-weight:bold;
        font-size:18px;
    }
    
</style>
