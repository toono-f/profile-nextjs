import styles from "@/components/atoms/MovieModal/MovieModal.module.scss";
import { Dispatch, SetStateAction } from "react";

type MovieModalProps = {
  id: string;
  play: boolean;
  isPlay: Dispatch<SetStateAction<boolean>>;
  autoplay?: 1 | 0;
  controls?: 1 | 0;
  disablekb?: 1 | 0;
  loop?: 1 | 0;
  mute?: 1 | 0;
  playsinline?: 1 | 0;
  rel?: 1 | 0;
  fs?: 1 | 0;
  iv_load_policy?: 1 | 0;
  modestbranding?: 1 | 0;
  start?: number;
};

export const MovieModal = ({
  id,
  play,
  isPlay,
  autoplay = 1,
  controls = 1,
  disablekb = 0,
  loop = 1,
  mute = 0,
  playsinline = 1,
  rel = 0,
  fs = 1,
  iv_load_policy = 1,
  modestbranding = 1,
  start = 0,
}: MovieModalProps) => {
  const option = {
    autoplay, // 自動再生（スマホでは効かない）
    controls, // コントロールバーの表示
    disablekb, // （1の場合）キーボード操作を禁止
    loop: loop, // ループ再生
    mute: mute, // ミュート
    playsinline, // iOS端末で全画面再生させない
    rel, // 同じチャンネルから関連動画を再生させる
    fs, // 全画面表示ボタンの表示
    iv_load_policy, // 動画アノテーションの表示
    modestbranding, // 初期表示のyoutubeロゴの非表示
    start, // 動画再生開始時間の設定（秒指定）
  };

  const optionText = Object.entries(option)
    .map((item) => item.join("="))
    .join("&");

  return play ? (
    <div className={styles.modal} onClick={() => isPlay(false)}>
      <div className={styles.modal_box}>
        <button title="閉じる" className={styles.modal_close} onClick={() => isPlay(false)}></button>
        <div className={styles.modal_movie}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}?playlist=${id}&${optionText}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
