import './App.css'
import { useEffect, useState } from 'react'

function App() {
    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const code = urlParams.get('code')

        if (!code) return

        fetch(`url`, { method: 'POST' })
            .then((res) => res.json())
            .then(({ data: { signToken }, message }) => {
                alert(message)
                setSignToken(signToken)
            })
    }, [])

    const [signToken, setSignToken] = useState('')
    const [nickname, setNickname] = useState('')
    const [profileImage, setProfileImage] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        const body = {
            signToken,
            nickname,
            profileImage,
        }

        const response = await fetch('PASTE_URL_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            alert('Something went wrong, check NETWORK tab in Dev Tools')
            return
        }

        const data = response.json()
        alert('Success! Check console in Dev Tools to see response from server')
        console.log('Response after submit button:', { data })
    }

    if (signToken) {
        return (
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Nickname"
                    onChange={(e) => setNickname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="profileImage (url)"
                    onChange={(e) => setProfileImage(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }

    return (
        <form>
            <h2>Auth form</h2>

            <a href="https://google.com">Sign with Google</a>
        </form>
    )
}

export default App
