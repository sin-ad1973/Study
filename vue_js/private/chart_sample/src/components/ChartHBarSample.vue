<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
    name: 'ChartHBarSample',
    mixins: [ HorizontalBar ],
    mounted() {
        this.renderChart(this.chartData, this.options);
    },
    data() {
        return {
            chartData: {
                labels: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日', '8月7日'],
                datasets: [
                    {
                        label: 'A店 来客数',
                        data: [62, 65, 93, 85, 51, 66, 47],
                        backgroundColor: "rgba(219,39,91,0.5)"
                    },
                    {
                        label: 'B店 来客数',
                        data: [55, 45, 73, 75, 41, 45, 58],
                        backgroundColor: "rgba(130,201,169,0.5)"
                    },
                    {
                        label: 'C店 来客数',
                        data: [33, 45, 62, 55, 31, 45, 38],
                        backgroundColor: "rgba(255,183,76,0.5)"
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: '支店別 来客数'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMax: 100,
                            suggestedMin: 0,
                            stepSize: 10,
                            callback: function(value) {
                                return  value +  '人'
                            }
                        }
                    }]
                },
                legend: {
                    display: false,
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
