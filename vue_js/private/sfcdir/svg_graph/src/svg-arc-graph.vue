<template>
    <div>
        <svg>
            <g class="arc">
                <path fill="#f00" :d="arcPathA" />
                <path fill="#0f0" :d="arcPathB" />
                <path fill="#00f" :d="arcPathC" />
                <path fill="#ff0" :d="arcPathD" />
            </g>
        </svg>
    </div>
</template>

<script>
/**
 * Mは”Move to”の略で、指定した座標の位置へ移動する。
 *   まずこのコマンドで、円の中心点の座標を指定する。
 * Lは”Line to”の略で、現在位置の座標から指定した座標へ線を引く。
 *   このコマンドで、円の中心点から円弧の描き始めの点、つまり扇形の一つの半径を描く。
 *   このコマンドに指定する引数は、円弧の描き始めの座標である。
 * Aはarc要素で、円弧を描く。このコマンドが一番重要である。
 *   半径や円弧の描き終わりの座標など引数に色々と指定しないといけないが、後に詳しく説明する。
 * Zは”Close path”というコマンドで、現在の座標から最初に指定した座標まで線を引く。
 *   このコマンドで円弧の描き終わりの点から中心点までの線、つまり扇形のもう一つの半径を描く。
 * 
 * 
 * Aコマンドは以下の7つの引数を指定する。
 * rx ry x-axis-rotation large-arc-flag sweep-flag x y
 * 第一引数はx軸の半径、第二引数はy軸の半径で、楕円を描かないのであれば同じ値を指定する。
 * 第三引数は円弧の回転度を指定できるが、ここでは必要ないので0を指定する。
 * 第四引数は円弧が180度以上かどうかを指定する。180度より小さければ0、大きければ1を指定する。
 *   ちなみに180度ちょうどはどちらでもよい。
 * 第五引数は2つの点を反時計回りで繋ぐか時計回りで繋ぐかの違いで、今回は時計回りで統一し常に1を指定する。
 * 第六引数は円弧の描き終わりのx座標、第七引数はy座標である。
 */
export default {
    name: 'SvgArcGraph', // vue component name
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
        },
        radius: {
            type: Number,
            default: 150,
        },
        fillStyle: {
            type: String,
            default: "rgb(255, 0, 0)",
        },
        arcPathA: {
            type: String,
            default: "M 150 150 L 150 0 A 150 150 0 0 1 300 150 Z",
        },
        arcPathB: {
            type: String,
            default: "M 150 150 L 300 150 A 150 150 0 0 1 150 300 Z",
        },
        arcPathC: {
            type: String,
            default: "M 150 150 L 150 300 A 150 150 0 0 1 0 150 Z",
        },
        arcPathD: {
            type: String,
            default: "M 150 150 L 0 150 A 150 150 0 0 1 150 0 Z",
        },
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

.arc {
    border-color: rgb(0, 0, 0);
}
</style>
