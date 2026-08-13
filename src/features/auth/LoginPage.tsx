import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '@/components/Input/Input';
import { loginUser } from './authService';
import { useAuth } from '@/hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const data = await loginUser({ email, password });
      login(data.user, data.token);
      navigate('/');
    } catch (err: any) {
      if (err.response?.data?.unverified) {
        navigate('/verify-email', { state: { email } });
        return;
      }
      const message = err.response?.data?.error || 'Login failed. Please try again.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default LoginPage;