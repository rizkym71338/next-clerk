import { Fragment } from 'react'
import Link from 'next/link'
import { UserButton, currentUser } from '@clerk/nextjs'

export default async function HomePage() {
  const user = await currentUser()

  const ListAuth = () => {
    return (
      <Fragment>
        <Link href="/sign-up">Sign Up</Link>
        <Link href="/sign-in">Sign In</Link>
      </Fragment>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <UserButton afterSignOutUrl="/sign-in" />
      {user ? null : <ListAuth />}
    </main>
  )
}
