<template>
    <div>
        <div>ページ1</div>
        <ul class="listLayout">
            <li v-for="icon in icons" :key="icon">
                <Sumnail :icon-path="icon" />
            </li>
        </ul>
    </div>
</template>

<script>
import Sumnail from './Sumnail.vue'

export default {
    name: 'Page1',
    components: {
        Sumnail,
    },
    data() {
        return {
            icons: this.$store.state.imageList,
        }
    }
}
</script>

<style scoped>
.listLayout {
    list-style: none;
    margin: 0px;
}
.listLayout>li {
    float: left;
}
</style>
