import { analytics } from '@/utils/analytics'
import { BarChart, Card } from '@tremor/react'
import React from 'react'

interface AnaltycsDashboardProps{
    avgVisitorsPerDay: string
    amtVisitorsToday: number
    timeseriesPageViews: Awaited<ReturnType<typeof analytics.retrieveDays>>
}

export default function AnalyticsDashboard({avgVisitorsPerDay, amtVisitorsToday, timeseriesPageViews}: AnaltycsDashboardProps) {
  return (
    <div className='flex flex-col gap-6'>
      <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className='w-full mx auto max-w-xs'>
            <p className='text-tremor-default text-dark-tremor-content'>Avg. visitors/day</p>
            <p className='text-3xl text-tremor-default text-dark-tremor-content'>{avgVisitorsPerDay}</p>
        </Card>
        <Card className='w-full mx auto max-w-xs'>
            <p className='text-tremor-default text-dark-tremor-content'>Visitors Today</p>
            <p className='text-3xl text-tremor-default text-dark-tremor-content'>{amtVisitorsToday}</p>
        </Card>

      </div>
      <Card>
            {timeseriesPageViews ? (
                <BarChart 
                allowDecimals={false}
                 showAnimation
                  data={timeseriesPageViews.map((day) => ({
                    name: day.date,
                    Visitors: day.events.reduce((acc, curr) => {
                        return acc +Object.values(curr)[0]!
                    }, 0)
                }))} categories={['Visitors']}
                index='name'/>
            ) : null}
        </Card>
    </div>
  )
}
