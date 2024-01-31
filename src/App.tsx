import './App.css'

function App() {
    const submitHandler = async () => {
        const response = await fetch('/auth/google', { method: 'POST' })
        if (!response.ok) return
        console.log(response.json())
    }

    return (
        <form>
            <h2>Auth form</h2>
            <button onClick={submitHandler}>Sign with Google</button>
        </form>
    )
}

export default App
