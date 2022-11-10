export const getToken = user => {
    const currentUser = {
        email: user.email
    }
    // JWT Token get and set to local storage
    fetch('https://travel-on-the-go-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
        })
}