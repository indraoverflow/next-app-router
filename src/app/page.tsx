import Link from "next/link";
export default function Home() {
    return (
      <>  
        <h1>TESTING</h1>
        <br />
        <Link href="/posts">Posting Page</Link>
        <br />
        <Link href="/albums">Albums Page</Link>
      </>
    );
}