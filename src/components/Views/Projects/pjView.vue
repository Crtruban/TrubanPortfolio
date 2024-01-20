<template>
  <div>
    <div class="header">
      Projects
    </div>
    <v-row>
      <v-col cols="3">
        <v-expansion-panels class="w-auto pl-10">
          <v-expansion-panel v-for="(projArray, company) in PROJECTS" :key="company">
            <v-expansion-panel-title>
              <v-row no-gutters class="d-flex justify-center">
                {{ company }}
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row justify="space-around" no-gutters>
                <span class="pt-2" v-for="project in projArray" :key="project">
                  <v-chip class="w-auto projectChip" @click="setProject(project)">{{ project.name }}</v-chip>
                </span>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col col="8">
        <transition  name="page-opacity" mode="out-in">
        <v-row v-if="!initialLoad && transition">
            <v-col col="8">
          <div class="projectInit" >
          {{ projectExplanation }}
          </div>
        </v-col>
        </v-row>
      </transition>
        <transition  name="page-opacity" mode="out-in">
        <div class="projectDialog" v-if="initialLoad && transition">
          <v-row>
            <v-col col="8">
          <div class="projectHeader" >
          {{ projectTitle }}
          </div>
        </v-col>
        </v-row>
        <v-row>
          <div class="projectOverview d-flex pb-10">
            <span class="projectInit">Overview: </span>
          <span class="projectDet">{{ projectExplanation }}</span>
        </div>
      </v-row>
      <v-row>
        <div class="projectContribution"><v-col col="1">
        <span class="projectInit"> Contributions: </span></v-col><v-col col="7">
        <span class="projectDet">{{ projectContribution }}</span></v-col>
        </div>
      </v-row>
        </div>
      </transition>
      </v-col>
    </v-row>

  </div>
</template>
<script>
import { PROJECTS } from '../../../config/entity'

export default {
  setup() {
    return {PROJECTS}
  },
  data() {
    let initialLoad = false;
    let projectTitle = '';
    let projectExplanation = 'Please click one of the projects on the left to display a project.';
    let projectContribution = '';
    let transition = true;
    return { projectExplanation,projectContribution, projectTitle, initialLoad, transition }
  },
  methods: {
    setProject(value) {
      this.transition = false;
      this.initialLoad = true;
      this.projectExplanation = value.explanation;
      this.projectContribution = value.contribution;
      this.projectTitle = value.name;
      setTimeout(() => this.transition = true, 500);
      
    }
  }

}
</script>
<style scoped>

.header {
  padding-left: 22.5%;
  font-size: 550%;
}
.projectHeader {
  font-size: 300%;
  font-weight: 600;
  text-decoration: underline;
}
.projectDialg {
  display: flexbox;
  width: 70%;
  align-content: flex-end;
}
.v-expansion-panel-title {
  background: rgb(172, 8, 8);
  color: white;
  text-shadow: 0 0 3px #000000, 0 0 5px #c5c5c5;
}

.projectChip {
  max-width: 300px;
}
.projectInit {
  font-weight: 300;
  font-size: 150%;
}
</style>