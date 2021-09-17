var app = new Vue({
    el: '#root',
    data: {
      images: [
        "https://static-www.quotidianopiemontese.it/wp-content/2021/07/Italia-Belgio-Euro-2020-1.jpg",
        "https://www.adnkronos.com/resources/026b-12b19793c0e6-a0ee2d5204de-1000/format/big/italia_spagna_06_afp.jpg",
        "https://static.sky.it/images/skysport/it/calcio/europei/2021/07/10/italia-inghilterra-three-lions-no-della-uefa/tifosi_inglesi.jpg",
        "https://staticfanpage.akamaized.net/wp-content/uploads/sites/27/2021/07/GettyImages-1327321430.jpg",
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1614x394:1616x392)/origin-imgresizer.eurosport.com/2021/07/12/3171933-64994108-2560-1440.jpg",
        "https://static.sky.it/images/skysport/it/calcio/europei/2021/07/11/europei-finale-italia-inghilterra-inni-tifosi/italia%20campione%20ipa.jpg.transform/hero-mobile-2x/2a94dac662dbdbb42c33f45e0bba8c28ec1c0f2f/img.jpg"
      ],
      imageIndex: 0
    },
    methods:{
        pre_img: function(){
            this.imageIndex--;
            if ( this.imageIndex == -1){
                this.imageIndex = this.images.length -1;
            }
            
        },
        next_img: function(){
            this.imageIndex++;
            if( this.imageIndex >= this.images.length ){
                this.imageIndex = 0;
            }
        },
        currentImage: function(index){
            this.imageIndex = index;
        }
    }
  })
