import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-1">
      <img src="/logo-nobg-sq.png" width={150} className="mx-auto" />
    </Link>
  );
}
