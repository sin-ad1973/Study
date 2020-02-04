<script>
import { Pie } from 'vue-chartjs';

export default {
    name: 'ChartBarSample',
    mixins: [ Pie ],
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
    data() {
        return {
            chartData: {
                labels: ["A型", "O型", "B型", "AB型"],
                datasets: [{
                    backgroundColor: [
                        "#BB5179",
                        "#FAFF67",
                        "#58A27C",
                        "#3C00FF"
                    ],
                    data: [38, 31, 15, 16],
                    borderWidth: [
                        0,
                        0,
                        0,
                        0
                    ],
                    // borderColor: [
                    //     "#BB5179",
                    //     "#FAFF67",
                    //     "#58A27C",
                    //     "#3C00FF"
                    // ],
                }]
            },
            options: {
                title: {
                    display: true,
                    text: '血液型 割合'
                },
                legend: {
                    display: true,
                },
                animation: false,
                tooltips: {
                    enabled: false,
                }
            }
        }
    }
}
</script>

<style scoped>
</style>
