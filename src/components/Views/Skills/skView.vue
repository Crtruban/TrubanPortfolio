<template>
    <div >
        <div class="header">
            Skills
        </div>
        <div>
            <div class="collection">
                <span class="skillHeader">Front End Skills:</span>
                <span class="skill" v-for="skill in SKILLS.frontEnd" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill }}
                </v-chip>
            </span>
            </div>
            <div class="collection">
                <span class="skillHeader">Back End Skills:</span>
                <span class="skill" v-for="skill in SKILLS.backEnd" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill }}
                </v-chip>
            </span>
            </div>
            <div class="collection">
                <span class="skillHeader">Soft Skills:</span>
                <span class="skill" v-for="skill in SKILLS.softSkills" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill }}
                </v-chip>
            </span>
            </div>
            <div class="collection">
                <span class="skillHeader">Clerance:</span>
                <span class="skill" v-for="skill in SKILLS.clear" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    <v-tooltip activator="parent" location="bottom">
                        {{ skill.tooltip }}
                    </v-tooltip>
                    {{ skill.value }}
                </v-chip>
            </span>
            </div>
        </div>

    </div>
</template>
<script>
import { SKILLS } from '../../../config/entity'

export default {
    setup() {
        return { SKILLS }
    }
}
</script>
<style scoped>


.collection{
    transform: scale(1.4);
    padding-top: 2%;
    padding-left: 19%;
    display: flex;
    align-items: flex-start;
}


.skillHeader {
    text-decoration: underline;
    font-size: larger;
    padding-left: 0;
}
span.skill {
    padding-left: .5%;
}

</style>