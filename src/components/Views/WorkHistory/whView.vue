<template>
  <div>
    <div class="header">
      Work History
    </div>
    
    <div id="carousel">
      <div class="prev">
        <img  @click="selectWH(prev)" :src="getImgUrl(prev.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.prvTrans}">
      </div>
      <div class="top">
        <img  @click="selectWH(top)" :src="getImgUrl(top.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.topTrans}">
      </div>
      <div class="selected">
        <img  @click="selectWH(current)" :src="getImgUrl(current.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.crnTrans}">
        </div>
        <div class="next">
        <img  @click="selectWH(next)" :src="getImgUrl(next.img)" alt="kitten" class="img" :class="{'fade-out': !transObject.nxtTrans}">
      </div>
      </div> 

    <Transition>
      <div v-if="transObject.msgTrans" class="workTitle">
      {{ current.title }}
    </div>
    </Transition>
    <Transition>
    <div v-if="transObject.msgTrans" class="whMessage">
      {{ current.message }}
    </div>
  </Transition>
  </div>
</template>
<script>

import { sidebarWidth } from '../../Navigation/Sidebar/state'
import { EXPIERENCE } from '../../../config/entity'
export default {

  setup() {
   

    return { sidebarWidth, EXPIERENCE };
  },
  data() {
    let current = EXPIERENCE.Nexxis;
    let prev = EXPIERENCE.GridIron;
    let next = EXPIERENCE.IBM;
    let top = EXPIERENCE.Wegmans;
    let transObject = {
      msgTrans: true,
      prvTrans: true,
      crnTrans: true,
      nxtTrans: true,
      topTrans: true
    };
    return { current, prev, next, top, transObject }
  },
  methods: {
    selectWH(value) {
      let { current, prev, next } = this;
      if (value != current) {
        this.transObject.msgTrans = !this.transObject.msgTrans;
        this.transObject.crnTrans = !this.transObject.crnTrans
        let swap = current;
        if (prev == value) {
          this.transObject.prvTrans = !this.transObject.prvTrans;
          setTimeout(() => {
            this.prev = swap;
          this.current = value;
          Object.keys(this.transObject).forEach((k) => this.transObject[k] = true);
          }, 1500);
        }
        else if(next == value) {
          this.transObject.nxtTrans = !this.transObject.nxtTrans
          
          setTimeout(() => {
            this.next = swap;
          this.current = value;
          Object.keys(this.transObject).forEach((k) => this.transObject[k] = true);
          }, 1000);
        }
        else {
          this.transObject.topTrans = !this.transObject.topTrans
          
          setTimeout(() => {
            this.top = swap;
          this.current = value;
          Object.keys(this.transObject).forEach((k) => this.transObject[k] = true);
          }, 1000);
        }
        
      }
    },
    getImgUrl(pic) {
      return require('../../../assets/' + pic + '.png')
    }
  }

}
</script>
<style scoped>
.workTitle{
  padding-left: 15%;
  font-size: 300%;

}
.img {
  width: 500px;
  transition: opacity 1s;
}

.img.fade-out {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.whMessage {
  padding-top: 3%;
  padding-left: 19%;
}
.header {
  padding-left: 15%;
  font-size: 550%;
}
img {
  width: 400px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
}
.img-holder .crnt img {
  height: 750;
  cursor: pointer;
}
.img-holder img:hover {
  cursor: pointer;
}
#carousel {
  position: relative;
  height: 400px;
  transform: translateY(30%) translateX(8%);
}

#carousel div {
  position: absolute;
}

#carousel div img {
  width: 400px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
}


#carousel div.prev {
  z-index: 5;
  left: 30%;
  transform: translateY(50px) translateX(-50%);
}
#carousel div.top {
  z-index: 10;
  left: 50%;
  transform: translateY(-150px) translateX(-200px)scale(.75);
}

#carousel img:hover {
  cursor: pointer;
}

#carousel div.prev img {
  width: 300px;
}


#carousel div.selected {
  z-index: 10;
  left: 50%;
  transform: translateY(20px) translateX(-50%);
}

 #carousel div.next {
  z-index: 5;
  left: 70%;
  transform: translateY(50px) translateX(-50%);
}

#carousel div.next img {
  width: 300px;
} 


</style>