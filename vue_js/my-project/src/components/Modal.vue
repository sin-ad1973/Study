<template>
    <div class="overlay">
        <button @click="onClick">test</button>
        <transition>
            <div class="modal" @click="closeModal" v-if="isShow">
                <img :src="iconPath" />
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    props: {
        iconPath: String,
        name: String,
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal', this.iconPath);
        },
        onClick() {
            this.isShow = true;   
        },
    },
    destroyed() {
        this.isShow = false;
    }
}
</script>

<style scoped>
.v-enter-from {
    opacity: 0;
}
.v-enter-to {
    opacity: 1;
}
.v-enter-active {
    transition: opacity 5s;
}
.overlay {
    /* オーバーレイをpageに被せるためabsolute指定(併せてpageのposition:relativeが必要) */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 300px;
    height: 300px;
    padding: 5px;
    box-sizing: border-box;
    border: #ccc 1px solid;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 5px 5px 5px #000;
    transform: translate(-50%, -50%);
}
.modal>img {
    max-width: 100%;
    max-height: 100%;
}
</style>

