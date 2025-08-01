import { useNavigate } from 'react-router-dom';
import postUser from '../server.js';
import { useState } from 'react';
import APIS from '../api.js';

function Login( ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = { username, password }; // ✅ no stringify
            const res = await postUser(user, APIS.login);
            if (res.success) {
                alert('Login success');
                localStorage.setItem('token', res.token);
                navigate('/form');
            } else {
                alert('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            alert('Server error');
        }
        
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleLogin} style={{ maxWidth: 300, margin: 'auto' }}>
            <h2>Login</h2>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        autoFocus
                    />
                </label>
            </div>
            <div style={{ marginTop: 10 }}>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div style={{ marginTop: 20 }}>
                <button type="submit">Login</button>
                <button type="button" onClick={handleCancel} style={{ marginLeft: 10 }}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default Login;