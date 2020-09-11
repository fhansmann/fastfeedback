import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <main>
      <div>{auth?.user?.email}</div>
      <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </main>
  );
}
