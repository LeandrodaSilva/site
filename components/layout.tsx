import styles from "./layout.module.css";

export const name = "Leandro S.";
export const siteTitle = "Leandro S.";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
