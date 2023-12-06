import { Button } from "@/components/ui/button"
import Link from "next/dist/client/link";
export default function landingPage()  {
  return (
    <div>Landing page (unprotected)

    <div>
    <Link href="/sign-in">
    <Button>Singin</Button>
    </Link>
    <Link href="/sign-up">
      <Button>Signup</Button>
    </Link>
    </div>
    </div>
  )
}
