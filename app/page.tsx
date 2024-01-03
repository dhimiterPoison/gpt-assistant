/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fRXBRRrRqDT
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex items-center space-x-4">
          <FlagIcon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">My App</h1>
        </div>
        <nav className="flex items-center space-x-6">
          <Link className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="#">
            Upload
          </Link>
          <Link className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="#">
            Output
          </Link>
          <Link className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="#">
            Events
          </Link>
          <div className="flex items-center space-x-2">
            <UserIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <Link className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200" href="#">
              Account
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col md:flex-row flex-1 overflow-auto">
        <section className="flex-1 p-6" id="upload">
          <Card>
            <CardHeader>
              <CardTitle>Upload</CardTitle>
              <CardDescription>
                Drag and drop your video or audio files here or click the button to browse your files.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center border-dashed border-2 p-6">
              <UploadIcon className="h-12 w-12 text-gray-400" />
              <Button className="mt-4" variant="outline">
                Browse Files
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="flex-1 p-6" id="output">
          <Card>
            <CardHeader>
              <CardTitle>Output</CardTitle>
              <CardDescription>The output of the uploaded content will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="h-48 overflow-auto p-4 bg-gray-100 dark:bg-gray-800">
              <p className="text-gray-500 dark:text-gray-400">No content uploaded yet.</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-4">
              <h2 className="text-lg font-semibold">Found some actions, review them:</h2>
              <div className="flex flex-col gap-4">
                <Card className="p-4">
                  <CardTitle>Event Name</CardTitle>
                  <CardDescription>Status: Completed</CardDescription>
                  <Button className="mt-2">Revert</Button>
                </Card>
                <Card className="p-4">
                  <CardTitle>Event Name</CardTitle>
                  <CardDescription>Status: In Progress</CardDescription>
                  <Button className="mt-2">Revert</Button>
                </Card>
                <Card className="p-4">
                  <CardTitle>Event Name</CardTitle>
                  <CardDescription>Status: Pending</CardDescription>
                  <Button className="mt-2">Revert</Button>
                </Card>
              </div>
            </CardFooter>
          </Card>
        </section>
        <section className="flex-1 p-6" id="events">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Agenda</CardTitle>
              <CardDescription>Your events and tasks for the day, sorted by priority.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-auto">
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
                      <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
                    </TableCell>
                    <TableCell>10:00 AM</TableCell>
                    <TableCell>Team Meeting</TableCell>
                    <TableCell>Discuss project updates</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <span className="inline-block h-3 w-3 rounded-full bg-yellow-500" />
                    </TableCell>
                    <TableCell>1:00 PM</TableCell>
                    <TableCell>Client Call</TableCell>
                    <TableCell>Discuss contract details</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <span className="inline-block h-3 w-3 rounded-full bg-green-500" />
                    </TableCell>
                    <TableCell>5:00 PM</TableCell>
                    <TableCell>Project Deadline</TableCell>
                    <TableCell>Submit final deliverables</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

function FlagIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function UploadIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
