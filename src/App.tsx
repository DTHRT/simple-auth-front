import './App.css'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const code = urlParams.get('code')

        if (!code) return

        fetch(`url`, { method: 'POST' })
            .then((res) => res.json())
            .then((res) => console.log(res))
    }, [])

    return (
        <form>
            <h2>Auth form</h2>
            <a href="google.com">Sign with Google</a>
        </form>
    )
}

export default App
