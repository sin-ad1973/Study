<template>
    <div class="modal" @click="closeModal">
        <img :src="iconPath" />
    </div>
</template>

<script>

export default {
    name: 'Modal',
    props: {
        iconPath: String,
        name: String,
    },
    methods: {
        closeModal() {
            this.$emit('close-modal', this.iconPath);
        }
    }
}
</script>

<style scoped>
.modal {
    position: absolute;
    top: 20;
    left: 20;
    z-index: 1;
    width: 300px;
    height: 300px;
    padding: 5px;
    box-sizing: border-box;
    padding: 5px;
    border: #ccc 1px solid;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 5px 5px 5px #000;
    transition: 0.5s;
}
.modal>img {
    max-width: 100%;
    max-height: 100%;
}
</style>

