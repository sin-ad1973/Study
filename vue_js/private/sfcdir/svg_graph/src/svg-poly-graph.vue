<template>
    <div>
        <svg>
            <g>
                <polygon class="polygon"
                 :points="points" 
                />
            </g>
        </svg>
    </div>
</template>
<script>
export default {
    name: 'SvgPolyGraph', // vue component name
    props: {
        stats: {
            type: Array,
            default: [
                { label: 'A', value: 100 },
                { label: 'B', value: 100 },
                { label: 'C', value: 100 },
                { label: 'D', value: 100 },
                { label: 'E', value: 100 },
                { label: 'F', value: 100 }
            ],
        }
    },
    computed: {
        points: function() {
            const total = this.stats.length;
            const self = this;
            const ret = this.stats.map((stat, i) => {
                const point = this.valueToPoint(stat.value, i, total)
                return point.x + ',' + point.y
            }).join(' ');
            return ret;
        },
    },
    methods: {
        valueToPoint(value, index, total) {
            var x     = 0
            var y     = -value * 0.8
            var angle = Math.PI * 2 / total * index
            var cos   = Math.cos(angle)
            var sin   = Math.sin(angle)
            var tx    = x * cos - y * sin + 100
            var ty    = x * sin + y * cos + 100
            return {
                x: tx,
                y: ty
            }
        },
    },
}
</script>

<style scoped>
svg {
    overflow: visible;
}

.polygon {
    fill: #42b983;
    opacity: .75;
}
</style>
