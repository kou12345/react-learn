import { useRef, useState } from "react";

// Promiseとは？
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

const ImageUploader = () => {
  // 隠されたinput要素にアクセスするためのref
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  // 選択されたファイルデータを保持するref
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("");

  // 「画像をアップロード」というテキストがクリックされた時のコールバック
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // inputのDOMにアクセスして、クリックイベントを発火させる
      inputImageRef.current.click();
    }
  };
  // ファイルが選択された時に呼ばれるコールバック
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      // fileRef.currentに値を保存する
      // fileRef.currentが変化しても再描画は発生しない
      fileRef.current = files[0];
    }
  };
  // アップロードボタンがクリックされた時のコールバック
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // 通常はここでAPIを呼んで、ファイルをサーバーにアップロードする
      // ここでは疑似的に一定時間待つ
      await sleep(UPLOAD_DELAY);
      // アップロードが成功した旨を表示するためにメッセージを書き換える
      setMessage(`${fileRef.current.name}をアップロードしました`);
    }
  };

  return (
    <div>
      <p style={{ textDecoration: "underline" }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        type="file"
        ref={inputImageRef}
        accept="image/*"
        onChange={onChangeImage}
        style={{ visibility: "hidden" }}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};

export default ImageUploader;
