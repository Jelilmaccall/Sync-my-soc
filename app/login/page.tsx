import SignUpWithFacebookButton from '@/components/FacebookSignupButton';
import Link from 'next/link';
import Messages from './messages';

export default function Login() {


  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-orange-50">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-blue-800   flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        <div className="flex w-full space-x-2 align-center justify-center">
          <SignUpWithFacebookButton />
        </div>
        <label className="text-md text-black " htmlFor="username">
          Username
        </label>
        <input
          className="rounded-md px-4 py-2 bg-blue-100 borderborder-gray-400 mb-6 text-black"
          name="username"
          placeholder="YourUsername"
          required
        />

        <label className="text-md text-black" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 text-black"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md text-black" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 text-black"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 hover:bg-green-900 rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border bg-blue-600 hover:bg-blue-900 border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </button>
        {/* Messages component for displaying notifications */}
        <Messages />
      </form>
    </div>
  );
}
