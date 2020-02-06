<template>
    <div class="sfcproj2">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
          {{ svg }}
        </svg>
        <test :message="test" />
    </div>
</template>

<script>

export default {
    name: 'Sfcproj2',
    data() {
        return {
            svg: '<rect x="100" y="150" rx="0" ry="0" width="400" height="300" stroke-width="1" stroke="#00FFFF" fill="#CCFFFF" /><rect x="125" y="175" rx="0" ry="0" width="350" height="250" stroke-width="1" stroke="#00FFFF" fill="#FFCCFF" /><rect x="150" y="200" rx="0" ry="0" width="300" height="200" stroke-width="1" stroke="#00FFFF" fill="#FFFFCC" />',
        };
    },
}
</script>

<style scoped>
    /* .sfcproj2 {
        display: block;
        width: 400px;
        margin: 25px auto;
        border: 1px solid #ccc;
        background: #eaeaea;
        text-align: center;
        padding: 25px;
    } */
    /* .sfcproj2 p {
        margin: 0 0 1em;
    } */
</style>
