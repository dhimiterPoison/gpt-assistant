import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table'
import React from 'react'

const AgendaWidget = () => {
  return (
	<Card className='h-full'>
					<CardHeader>
						<CardTitle>Agenda</CardTitle>
						<CardDescription>
							Your events and tasks for the day, sorted by priority.
						</CardDescription>
					</CardHeader>
					<CardContent className='overflow-auto'>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Priority</TableHead>
									<TableHead>Time</TableHead>
									<TableHead>Event/Task</TableHead>
									<TableHead>Details</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>
										<span className='inline-block h-3 w-3 rounded-full bg-red-500' />
									</TableCell>
									<TableCell>10:00 AM</TableCell>
									<TableCell>Team Meeting</TableCell>
									<TableCell>Discuss project updates</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<span className='inline-block h-3 w-3 rounded-full bg-yellow-500' />
									</TableCell>
									<TableCell>1:00 PM</TableCell>
									<TableCell>Client Call</TableCell>
									<TableCell>Discuss contract details</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<span className='inline-block h-3 w-3 rounded-full bg-green-500' />
									</TableCell>
									<TableCell>5:00 PM</TableCell>
									<TableCell>Project Deadline</TableCell>
									<TableCell>Submit final deliverables</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
  )
}

export default AgendaWidget