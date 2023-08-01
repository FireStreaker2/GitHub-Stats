import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default async function Organization(props) {
  const avatar = props.avatar;
  const login = props.login;

  return (
    <Link href={`/stats/${login}`}>
      <Image src={avatar} width={64} height={64} alt={`${login}'s Profile Picture`} />
    </Link>
  )
}