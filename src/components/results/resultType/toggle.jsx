import React from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
  legend: {
    display: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Results:',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.parsed.y} ${context.parsed.y === 1 ? 'vote' : 'votes'} for ${
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
export const Toggle = ({ vote }) => {
  const votedYes = vote?.getResults
    ?.filter((i) => i.answer.length > 0 && i.answer === 'yes' && i.answer)
    .map((i) => i.answer)
  const votedNo = vote?.getResults
    ?.filter((i) => i.answer.length > 0 && i.answer === 'no' && i.answer)
    .map((i) => i.answer)

  const data = {
    labels: ['Yes', 'No'],
    datasets: [
      {
        data: [votedYes.length, votedNo.length],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
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
      <Bar data={data} options={options} height={'70%'}/>
    </div>
  )
}
