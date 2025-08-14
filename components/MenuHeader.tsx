import Image from "next/image";
import styles from "@/styles/page/menu.module.scss";

export default function MenuHeader({ title }: { title: string }) {
    return (
        <div className={styles.header}>
            <Image
                src="/logo-manzil.svg"
                height={100}
                width={300}
                alt="logo manzil"
            />
            <h1>{title}</h1>
        </div>
    );
}
