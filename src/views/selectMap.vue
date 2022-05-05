<template>

    <div class="container">

        <div>
            <v-select label="name" :reduce="
                (option) => {
                    citySelect = option.districts;
                    selected = option.districts[0] ? option.districts[0].name : '';
                }
            " placeholder="縣市" :options="cities"></v-select>
        </div>
        <div>
            <v-select label="name" placeholder="鄉鎮區域" v-model="selected" :options="citySelect"></v-select>
        </div>
    </div>
</template>
<script>
import { ref } from "vue";
import cities from "@/json/TwCities.json";
import 'vue-select/dist/vue-select.css';


export default {
    setup() {
        const citySelect = ref([]);
        const selected = ref("");
        return { citySelect, cities, selected };
    },
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
}

div {
    // color: #;
    border: #fff;
    background-color: #fff;
}
</style>
