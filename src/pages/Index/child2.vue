
<template>
    <div class="demo-container">
        <div ref="chart_wrap" class="chart_wrap"></div>
    </div>
</template>
<script>
export default {
    name: "demo",
    computed: {},
    data() {
        return {
            seriesData: []
        };
    },
    created() {},
    mounted() {
        this.initCharts();
        setTimeout(() => {
            this.seriesData.push({
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20]
            });
        }, 1000);
    },
    watch: {
        seriesData(val, oldVal) {
            console.log(1111, val, oldVal);
            this.setOptions(val);
        }
    },
    methods: {
        initCharts() {
            this.chart = this.$echarts.init(this.$refs.chart_wrap);
            this.setOptions();
        },
        setOptions(series) {
            this.chart.setOption({
                title: {
                    text: "ECharts 入门示例"
                },
                tooltip: {},
                legend: {
                    data: ["销量"]
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: series
            });
        }
    }
};
</script>
<style  scoped>
.chart_wrap {
    height: 400px;
}
</style>
