import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
export default function landingPage() {
  return (
    <div className="h-full ">
      Landing page (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Singin</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Signup</Button>
        </Link>
      </div>
      <div className="max-md:text-red-700 max-md:text-center max-md:transition md:text-blue-500 h-2/3 w-2/3 flex flex-col items-center justify-center bg-pink-500 text-3xl">
        This is box
        <h1>this is first</h1>
        <h1>this is Second</h1>
        <h1>this is Thired</h1>
      </div>
    </div>
  );
}
