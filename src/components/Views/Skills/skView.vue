<template>
    <div class="pjView">
        <div class="header">
            Skills
        </div>
        <div>
            <div class="collection">
                <span class="skillHeader">Front End Skills:</span>
                <span class="skill" v-for="skill in frontEnd" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill }}
                </v-chip>
            </span>
            </div>
            <div class="collection">
                <span class="skillHeader">Back End Skills:</span>
                <span class="skill" v-for="skill in backEnd" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill }}
                </v-chip>
            </span>
            </div>
            <div class="collection">
                <span class="skillHeader">Soft Skills:</span>
                <span class="skill" v-for="skill in softSkills" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill }}
                </v-chip>
            </span>
            </div>
            <div class="collection">
                <span class="skillHeader">Clerance:</span>
                <span class="skill" v-for="skill in clear" :key="skill" close>
                <v-chip variant="elevated" color="white">
                    {{ skill.value }}
                </v-chip>
            </span>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    data() {
        const frontEnd = ['JavaScript', 'React', 'Angular', 'VueJS', 'HTML', 'XML', 'CSS', 'Cypress', 'Jest', 'Selenium'];
        const backEnd = ['Java', 'Spring Boot', 'Postgres', 'C#', ' ASP.NET', 'C++', 'Oracle SQL', 'MariaDB', 'MSQL', ' Docker', ' Microsoft Azure', 'AWS'];
        const tools = ['Android Studio', 'CentOS', 'Linux', 'SVN', 'Git', 'GitLab', 'Microsfot Azure', 'IIS', 'Anaconda', 'CLion', 'Eclipse', 'Visual Studio', 'Windows', 'Jira'];
        const softSkills = ['Strong Communication', 'Time Management', 'Mentoring', 'Leadership', 'Task Delegation', 'Agile'];
        const clear = [{value: 'Active DoD TS/SCI w/ FS Poly', tooltip: ''}, {value: 'Active DoE Public Trust', tooltip: ''}]
        return { frontEnd, backEnd, tools, softSkills, clear };
    }
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.collection{
    transform: scale(1.4);
    padding-top: 2%;
    padding-left: 19%;
    display: flex;
    align-items: flex-start;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.skillHeader {
    text-decoration: underline;
    font-size: larger;
    padding-left: 0;
}
span.skill {
    padding-left: .5%;
}

.pjView {
    animation: fadeIn 2s;
}
</style>