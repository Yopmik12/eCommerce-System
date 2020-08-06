<template>
  <v-container style="margin-top: -10px;" fluid>
         <v-row>
             <v-col cols="6"  style="padding: 0">
                <v-img class="logo"
                    src="../assets/online_shop.jpg"  
                >
                </v-img>
             </v-col>
             <v-col cols="6" style="padding: 0">

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
             <v-col cols="6" style="padding: 0">
                    <v-lazy
                        v-model="isActive"
                        transition="fab-transition"
                        >
                        <v-img 
                        src="../assets/Home.jpg"
                        
                        width="800"
                        
                        >
                        </v-img>
                    </v-lazy>
             </v-col>
            <v-col cols="6" style="padding: 0" class="pt-16">

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
             <v-col cols="6" style="padding: 0;margin:auto;" class="pt-16 pl-16 pr-16">


                    <span style="font-weight: bold">
                     Buy now and get up to 70% discount
                    </span><br>
                    <span style="color: grey">
                    48 Hour Flash Sale
                    </span><br><br>
                    <span style="color: grey">
                    As a gift from our beloved customer we have a flash sale up to 70% off. For us to show support to care. Please keep supporting us. What are you waiting for hurry up and grab the deal before its to late.
                    </span><br>
                    <v-btn rounded outlined class="btn-hover mt-5">
                        Buy Now!
                    </v-btn>

            </v-col>
             <v-col cols="6" style="padding: 0">
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
  </v-container>
</template>

<script>

export default {
    data(){
        return{
            TEST:"TEST",
             isActive: false
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
</style>
