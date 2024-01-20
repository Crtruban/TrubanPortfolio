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
        <Transition>
        <div class="projectDialog">
          
          <v-row>
            <v-col col="8">
          <div class="projectHeader" v-if="initialLoad">
          {{ projectTitle }}
          </div>
        </v-col>
        </v-row>
          <div class="projectOverview d-flex pb-10">
            <span class="projectInit" v-if="initialLoad">Overview: </span>
          {{ projectExplanation }}
        </div>
        <div class="projectContribution" v-if="initialLoad">
        <span class="projectInit"> Contributions: </span>
         {{ projectContribution }}
        </div>
      
        </div>
      </Transition>
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
    return { projectExplanation,projectContribution, projectTitle, initialLoad }
  },
  methods: {
    setProject(value) {
      this.initialLoad = true;
      this.projectExplanation = value.explanation;
      this.projectContribution = value.contribution;
      this.projectTitle = value.name;
      
    }
  }

}
</script>
<style scoped>
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