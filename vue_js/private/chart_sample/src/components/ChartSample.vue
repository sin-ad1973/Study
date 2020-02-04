<template>
  <div class="container clearfix">
    <chart-bar-sample class="chart-bar" />
    <chart-h-bar-sample class="chart-h-bar" />
    <chart-stack-bar-sample class="chart-stack-bar" />
    <chart-stack-h-bar-sample class="chart-stack-h-bar" />
    <chart-arc-sample class="chart-arc" />
  </div>
</template>

<script>
import ChartBarSample from './ChartBarSample';
import ChartHBarSample from './ChartHBarSample';
import ChartStackBarSample from './ChartStackBarSample';
import ChartStackHBarSample from './ChartStackHBarSample';
import ChartArcSample from './ChartArcSample';

export default {
    name: 'ChartSample',
    components: {
        ChartBarSample,
        ChartHBarSample,
        ChartStackBarSample,
        ChartStackHBarSample,
        ChartArcSample,
    }
}
</script>

<style scoped>

.clearfix::after {
    content: '';
    clear: both;
    display: block;
}

.container {
    width: 98%;
    height: 98%;
    border-color: blue;
    border-width: 2px;
    border-style: solid;
}
.chart-bar {
    float: left;
    width: 25%;
    height: 25%;
}
.chart-h-bar {
    float: left;
    width: 25%;
    height: 25%;
}
.chart-stack-bar {
    float: left;
    width: 25%;
    height: 25%;
}
.chart-stack-h-bar {
    float: left;
    width: 25%;
    height: 25%;
}
.chart-arc {
    float: left;
    width: 25%;
    height: 25%;
}

</style>