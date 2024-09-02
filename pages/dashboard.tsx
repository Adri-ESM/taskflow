import ProtectedRoute from '../components/ProtectedRoute'

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>
          Welcome Dashboard, only the users who are authenticated can see this
          page.
        </p>
      </div>
    </ProtectedRoute>
  )
}

export default Dashboard
