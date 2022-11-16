const chart = document.querySelector("#chart").getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'GST INCURRED',
                data: [29374, 29374 , 29374, 22134 , 34567, 12345, 45678, 22134, 32134 , 22134 , 43123 , 54123],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'PROFIT',
                data: [12345, 45678, 22134, 32134 , 22134 , 43123 , 54123,29374, 29374 , 29374, 22134 , 34567],
                borderColor: 'blue',
                borderWidth: 2
            }    
        ]
    },
    options: {
        responsive: true
    }    
})