<template>
  <div class="whView">
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

import { thinkPeaks } from 'fontawesome';
import { sidebarWidth } from '../../Navigation/Sidebar/state'
export default {

  setup() {
    const workExperience = {
      Nexxis: {
        name: 'Nexxis',
        img: 'Nexxis',
        title: 'Full-Stack Software Engineer',
        message: 'Mr. Truban assisted in the development and maintenance of a large-scale legacy application. Through an agile process Mr. Truban would meet with the client on a bi-weekly basis to determine requirements needed, and then proceed with feature development. '
      },
      IBM: {
        name: 'IBM',
        img: 'ibm',
        title:'Federal Technical Associate - Application Developer',
        message: 'Mr. Truban develops applications for IBM clients by translating system requirements into appropriate designs using Agile methods. He uses VS Code and Eclipse to develop web applications with JavaScript and leverages MVC patterns and ensures the client’s requirements are satisfied.'
      },
      GridIron: {
        name: 'Grid Iron IT',
        img: 'Grid',
        title: 'Angular Developer',
        message: 'Mr. Truban helped maintain the operation of a large-scale portal middleware application critical for clients’ operations. His tasks included adjusting the application to allow new applications connection to the clients database and other applications and improving the security and runtime of various features the portal utilized through leveraging the Angular framework, and Oracle SQL queries.'
      },
      Wegmans: {
        name: 'Wegmans',
        img: 'wegmans',
        title: 'Prepared Foods Staff',
        message: "Before transitioning to a career as a software engineer, I spent ten years at Wegmans, where I advanced into a management role. In addition to managing people and refining soft skills, my responsibilities included writing schedules, handling orders, and setting the workflow for a department. This multifaceted role allowed me to develop a comprehensive skill set that encompassed effective people management, task delegation, professional customer interactions, and the logistical aspects of scheduling and order inventory. Despite not directly contributing to technical skills, this experience has proven invaluable in my current role as a software engineer."
      }
    };

    return { sidebarWidth, workExperience };
  },
  data() {
    let current = this.workExperience.Nexxis;
    let prev = this.workExperience.GridIron;
    let next = this.workExperience.IBM;
    let top = this.workExperience.Wegmans;
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
.whView{
  animation: fadeIn 2s;
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