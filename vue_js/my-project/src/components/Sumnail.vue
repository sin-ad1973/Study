<template>
    <div class="sumnail" @click="showModal">
        <img :src="iconPath" />
    </div>
</template>

<script>

export default {
    name: 'Sumnail',
    props: {
        iconPath: String,
        name: String,
    },
    methods: {
        showModal() {
            this.$emit('show-modal', this.iconPath);
        }
    }
}
</script>

<style scoped>
.sumnail {
    width: 150px;
    height: 150px;
    padding: 5px;
    box-sizing: border-box;
    padding: 5px;
    border: #ccc 1px solid;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #ccc;
    transition: 0.5s;
}
.sumnail>img {
    max-width: 100%;
    max-height: 100%;
}
.sumnail:hover {
    /* width: 300px;
    height: 300px; */
    transition: 0.5s;
    opacity: 0.7;
}
</style>

