import Image from 'next/image';
import Link from 'next/link';

export default function FirstPage() {
  return (
    <main>
      {/* <img src='/images/black_puppy.jpg' alt='black_puppy' /> */}
      <Image
        src='/images/black_puppy.jpg'
        alt='black_puppy'
        width={140}
        height={140}
      />
      <h1 className='text-2xl font-bold text-blue-500'>
        Read this Post{' '}
        <Link href='/posts' className='text-yellow-500'>
          첫번째 글
        </Link>
      </h1>
      <h1 className='text-2xl font-bold text-red-500'>
        Read this Post <a href='/posts'>첫번째 글(a tag)</a>
      </h1>
      <h1 className='text-2xl font-bold text-blue-500'>
        Refer to this Post <Link href='/secondPage'>두번째 글</Link>
      </h1>
    </main>
  );
}
