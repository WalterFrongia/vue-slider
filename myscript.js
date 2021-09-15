var app = new Vue(
{
    el: '#app',
    data: {
        images:[
            {
                source:"https://mole24.it/wp-content/uploads/2019/11/space_adventure_torino.jpg",
                alt:"",
            },
            {
                source:"https://images3.alphacoders.com/905/905078.jpg",
                alt:"",
            },
            {
                source:"https://images6.alphacoders.com/923/thumb-1920-923687.jpg",
                alt:"",
            },
        ],
        imageIndex: 0, //questa è la chiave dell'oggetto.
    },

    methods: {
        
        //FUNZIONE PER SCORRERE LE IMG SIA QUELLA PRIMA CHE QUELLA DOPO, IMAGEINDEX VA MOTIFICATO ANCHE SU HTML PER DARE UN INDICE ALL'IMG.
        previusImage: function(){   //questa funzione permette di scorrere l'array di uno aumentando di uno l'indice
            this.imageIndex--;      //
            console.log(this.imageIndex);

            if(this.imageIndex < 0){
                this.imageIndex = this.images.length - 1;
            }
        },

        nextImage: function(){     //questa funzione permette di scorrere l'array di uno sottraendo di uno l'indice     
            this.imageIndex++;
            console.log(this.imageIndex);

            if(this.imageIndex >= this.images.length){
                this.imageIndex = 0;
            }
        },

    }
});