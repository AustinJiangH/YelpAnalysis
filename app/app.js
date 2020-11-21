var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    mounted: function(){
        var chart1 = echarts.init(document.getElementById('chart-1'));
        // specify chart configuration item and data
        var option = {
            title: {
                text: 'Popular Dishes',
                subtext: 'Test',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Chiken', 'Fish', 'Beef', 'Chinese Dishes', 'Korean Dishes']
            },
            series: [
                {
                    name: 'Dishes',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: 'Chicken'},
                        {value: 310, name: 'Fish'},
                        {value: 234, name: 'Beef'},
                        {value: 135, name: 'Chinese Dishes'},
                        {value: 1548, name: 'Korean Dishes'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        

        // use configuration item and data specified to show chart
        chart1.setOption(option);


        var chart2 = echarts.init(document.getElementById('chart-2'));
        // specify chart configuration item and data
        var option = {
            title: {
                text: 'Daily Visits',
                subtext: 'Test',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }]
        };
        

        // use configuration item and data specified to show chart
        chart2.setOption(option);



    }





  })












