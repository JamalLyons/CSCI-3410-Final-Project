import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
// import UpdateTask from './components/UpdateTask';

function App() {
	return (
		<>
			<h1 className='text-3xl font-bold mb-4 mt-4 text-center'>
				Task Manager CSCI-3410
			</h1>
			<TaskList />
			<CreateTask />
			{/* <UpdateTask /> */}
		</>
	);
}

export default App;