import { ZennIcon } from "@/components/atoms/ZennIcon";
import styles from "@/components/organisms/Footer/Footer.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sns}>
        <p className={styles.snsText}>SNS</p>
        <ul className={styles.snslist}>
          <li>
            <a href="https://twitter.com/OtonoFrontEnd" target="_blank" rel="noreferrer">
              <TwitterIcon titleAccess="Twitter" sx={{ color: "#1976d2", fontSize: 40 }} />
            </a>
          </li>
          <li>
            <a href="https://zenn.dev/toono_f" target="_blank" rel="noreferrer">
              <ZennIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/toono-f" target="_blank" rel="noreferrer">
              <GitHubIcon titleAccess="Github" sx={{ color: "#fff", fontSize: 40 }} />
            </a>
          </li>
        </ul>
      </div>

      <p className={styles.copy}>
        <small>© 2022 Otono</small>
      </p>
    </footer>
  );
};
