<template>
    <div>
        <SvgPolyGraph class="SvgPolyGraph" />
        <SvgArcGraph class="SvgArcGraph" />
    </div>
</template>

<script>
import SvgPolyGraph from './svg-poly-graph';
import SvgArcGraph from './svg-arc-graph';

export default {
    name: 'SvgGraph', // vue component name
    components: {
        SvgPolyGraph,
        SvgArcGraph,
    },
}
</script>

<style scoped>
.SvgPolyGraph {
    float: right;
}
</style>
