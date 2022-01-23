<template>
    <div>
        <ul class="listLayout clearFix">
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
        },
        closeModal() {
            this.isDisplayModal = false;

        }
    }
}
</script>

<style scoped>
.clearFix::after {
  /* ulのfloatをclear(Modalの高さ100%を有効にするため) */
  content: '';
  display: block;
  clear: both;
}
.listLayout {
    list-style: none;
    padding: 7px;
    margin: auto;
    box-sizing: border-box;
    width: 95%;
}
.listLayout>li {
    float: left;
    margin: 7px;
}
</style>
