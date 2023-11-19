<template>
    <div>
        <div>ページ2</div>
        <ul>
            <li><router-link to="/Page2/Page2_1">Page2_1</router-link></li>
            <li><router-link to="/Page2/Page2_2">Page2_2</router-link></li>
        </ul>
        <router-view name="left" class="left"></router-view>
        <router-view name="right" class="right"></router-view>
    </div>
</template>

<style scoped>
.left {
    width: 50px;
    left: 0;
}
.right {
    width: 50px;
    right: 50;
}
</style>
