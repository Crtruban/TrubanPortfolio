<template>
    <div class="eduBody">
        <div class="scoolDetails">
            <v-row cols="12" v-for="school in SCHOOLS" :key="school">
                <v-col cols="2">
                    <v-row align="center" justify="center"><img :src=getImgUrl(school.img)></v-row>
                    <v-row align="center" justify="center">{{ school.name }}</v-row>
                </v-col>
                <v-col cols="3" class="degree">
                    <span class="colHeader">DEGREE:</span> {{ school.degree }}
                </v-col>
                <v-col cols="3" class="major">
                    <span class="colHeader">MAJOR:</span> {{ school.major }}
                </v-col>
                <v-col cols="2" class="gpa">
                    <span class="colHeader">GPA:</span> {{ school.gpa }}
                </v-col>
            </v-row>

            <br />
        </div>
    </div>
</template>
<script>
import { SCHOOLS } from '../../../config/entity'
export default {
    data() {
        return { SCHOOLS }
    },
    methods: {
        getImgUrl(pic) {
            return require('../../../assets/' + pic + '.png')
        }
    }

}
</script>
<style scoped>
.eduBody {
    color: white;
}

img {
    max-width: 1000px;
    max-height: 200px;
    padding: 30px
}

.schoolHeader {
    font-size: 250%;
    font-weight: 300;
    text-decoration: underline;
}

.colHeader {
    font-size: 130%;
    font-weight: 200;
    padding-right: 70px;
}

.gpa,
.major,
.degree {
    padding-top: 15vh;
}</style>