import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Header() {
  return (
    <header className='flex w-full justify-between items-center bg-taupe-100 pt-4 pb-4 pl-4 pr-4'>
      <nav className='flex gap-3'>
        <Button asChild variant='outline' size='lg'>
          <Link href='/'>Home</Link>
        </Button>
        <Button asChild variant='outline' size='lg'>
          <Link href='/movies'>Movies</Link>
        </Button>
        <Button asChild variant='outline' size='lg'>
          <Link href='/about'>About</Link>
        </Button>
        <Button asChild variant='outline' size='lg'>
          <Link href='/contact'>Contact</Link>
        </Button>
      </nav>

      <div>
        <Input
          placeholder='Search for movies'
          className='border border-gray-400 rounded-xl w-[350px] p-4 pt-5 pb-5 focus:border-gray-700 focus-visible:ring-0 focus:shadow-lg focus:shadow-gray-300/30 transition-all duration-300'
        />
      </div>

      <span>Cinema</span>
    </header>
  );
}
