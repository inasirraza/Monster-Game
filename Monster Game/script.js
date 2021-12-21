new Vue({
    el: '.container',
    data:{
        isGamePlaying: true,
        showLog : false,
        
        damage : 5,
        playerHealth : 100,
        monsterHealth : 100,

        messageLog: [],
        colorPlayer: 'green',
        colorMonster: 'green'
    },
    computed:{
        styleP : function(){
            return{
                width: this.playerHealth + '%', 
                backgroundColor: this.colorPlayer
            }
        },
        styleM : function(){
            return{
                width: this.monsterHealth + '%', 
                backgroundColor: this.colorMonster
            }
        }
    },
    methods:{
        won: function(){

        },
        restart: function(){
            this.show = !this.show
            location.reload(true)
        },
        attack: function(){
            this.playerHealth -= this.damage
            this.monsterHealth -= this.damage+4

            this.messageLog.push({
                playerMessage: `Monster hits player  by ${this.damage}`,
                monsterMessage: `Player hits monster  by ${this.damage+4}`
            })
            if(this.monsterHealth<20){
                alert('You won')
                location.reload(true)
            }else if(this.playerHealth<20){
                alert('You lost')
                location.reload(true)
            }
            if(this.playerHealth<20){
                this.colorPlayer = 'orangered'
            }else if(this.monsterHealth<20){
                this.colorMonster = 'orangered'
            }
            this.showLog = true

        },
        specialAttack: function(){
            this.playerHealth -= this.damage-2
            this.monsterHealth -= this.damage+8

            this.messageLog.push({
                playerMessage: `Monster hits player  by ${this.damage-2}`,
                monsterMessage: `Player hits monster  by ${this.damage+8}`
            })

            if(this.monsterHealth<20){
                alert('You won')
                location.reload(true)
            }else if(this.playerHealth<20){
                alert('You lost')
                location.reload(true)
            }
            if(this.playerHealth<20){
                this.colorPlayer = 'orangered'
            }else if(this.monsterHealth<20){
                this.colorMonster = 'orangered'
            }    
            this.showLog = true
        },
        heal: function(){
            if(this.playerHealth>10 && this.playerHealth<80){
                setTimeout(()=>{
                    this.playerHealth += 4
                    if(this.playerHealth>20){
                        this.colorPlayer = 'green'
                    }
                }, 1500)
            }else{
                console.log('Could not heal');
            }
        }

    }
}
);