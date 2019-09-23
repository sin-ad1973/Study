<template>
    <div class="edit-form">
        <p>A:{{ messageA }}</p>
        <button @click="doUpdateA">Aカウント</button>
        <p>B:{{ messageB }}</p>
        <button @click="doUpdateB">Bカウント</button>
    </div>
</template>

<script>
export default {
    name: 'EditForm',
    computed: {
        messageA() {
            return this.$store.getters['moduleA/count']
        },
        messageB() {
            return this.$store.getters['moduleB/count']
        }
    },
    methods: {
        doUpdateA(event) {
            this.$store.commit('moduleA/update')
        },
        doUpdateB(event) {
            this.$store.commit('moduleB/update')
        }
    }
}
</script>