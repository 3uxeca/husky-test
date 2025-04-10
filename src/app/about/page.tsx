'use client';
import Link from 'next/link';

export default function Page() {
  const clickButton = () => {
    alert('버튼 클릭');
  };
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
      <button onClick={clickButton}>버튼</button>
    </div>
  );
}
