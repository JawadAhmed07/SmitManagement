"use client"

import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export function ProgressChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Completed', 'Pending', 'Overdue'],
            datasets: [{
              data: [65, 25, 10],
              backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
              title: {
                display: true,
                text: 'Assignment Progress'
              }
            }
          }
        })
      }
    }
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}

