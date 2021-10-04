import React from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Results:',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.parsed.y} ${context.parsed.y === 1 ? 'vote' : 'votes'} between ${
            context.label
          }`
        },
      },
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}
export const Percentage = ({ vote }) => {
  const arr = vote?.getResults?.map((i) => Number(i.answer))
  const sortedVotesByTens = []

  for (let i = 10; i < 100; i += 10) {
    const lower = (i -= 10)
    const upper = (i += 10)
    const result = arr.filter(function (item) {
      return item >= lower && item <= upper
    })
    console.log(lower, upper, `=> ${result.length}`)
    sortedVotesByTens.push(result.length)
  }
  const data = {
    labels: [
      '0-10%',
      '11-20%',
      '21-30%',
      '31-40%',
      '41-50%',
      '51-60%',
      '61-70%',
      '71-80%',
      '81-90%',
      '91-100%',
    ],
    datasets: [
      {
        data: sortedVotesByTens,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 190, 64, 0.5)',
          'rgba(100, 159, 64, 0.5)',
          'rgba(50, 50, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div
      style={{
        width: '90%',
        height: '100%',
      }}
    >
      <Bar data={data} options={options} height={'70%'} />
    </div>
  )
}
