<template>
    <div>
        <div>ページ1</div>
        <ul class="listLayout">
            <li v-for="icon in icons" :key="icon">
                <Sumnail :icon-path="icon" @show-modal="showModal" />
            </li>
        </ul>
        <div v-if="isDisplayModal">
            <Modal :icon-path="modalIconPath" @close-modal="closeModal" />
        </div>
    </div>
</template>

<script>
import Sumnail from './Sumnail.vue';
import Modal from './Modal.vue';

export default {
    name: 'Page1',
    components: {
        Sumnail,
        Modal,
    },
    data() {
        return {
            icons: this.$store.state.imageList,
            isDisplayModal: false,
            modalIconPath: '',
        }
    },
    methods: {
        showModal(parameter) {
            this.modalIconPath = parameter;
           this.isDisplayModal = true;
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
