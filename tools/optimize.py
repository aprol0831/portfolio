"""
作品集網站｜素材壓縮工具
把原始照片 / 影片（含 iPhone .MOV、.png、.tif）轉成適合網頁的檔案，放進 media/ 資料夾。

用法（在「作品集網站」資料夾裡開終端機）：
    python tools/optimize.py <作品資料夾名稱> <檔案1> <檔案2> ...

例如：
    python tools/optimize.py 03-cherry-basket "C:/Users/me/Desktop/IMG_1234.MOV" "D:/photo.jpg"

完成後會印出一行檔名清單，貼到 content.js 對應作品的 media: [ ... ] 裡即可。

第一次使用請先安裝：
    python -m pip install pillow imageio-ffmpeg
"""
import os
import re
import subprocess
import sys

from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = None

IMAGE_EXT = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp", ".bmp", ".heic"}
VIDEO_EXT = {".mov", ".mp4", ".m4v", ".avi", ".mkv", ".webm"}
MAX_IMAGE = 2000   # 照片長邊最大像素
MAX_VIDEO = 1280   # 影片長邊最大像素

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def ffmpeg():
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def safe_name(src, dest_dir):
    stem = os.path.splitext(os.path.basename(src))[0]
    stem = re.sub(r"[^A-Za-z0-9_-]+", "-", stem).strip("-").lower()
    if not stem:
        stem = "media"
    name, n = stem, 2
    while any(os.path.exists(os.path.join(dest_dir, name + e)) for e in (".jpg", ".mp4")):
        name = f"{stem}-{n}"
        n += 1
    return name


def do_image(src, out_base):
    im = Image.open(src)
    im.seek(0)
    im = ImageOps.exif_transpose(im)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    im.thumbnail((MAX_IMAGE, MAX_IMAGE), Image.LANCZOS)
    out = out_base + ".jpg"
    im.save(out, "JPEG", quality=84, optimize=True, progressive=True)
    return out


def do_video(src, out_base):
    out = out_base + ".mp4"
    vf = (f"scale='if(gt(iw,ih),min({MAX_VIDEO},iw),-2)':'if(gt(iw,ih),-2,min({MAX_VIDEO},ih))',"
          "format=yuv420p")
    subprocess.run([ffmpeg(), "-y", "-loglevel", "error", "-i", src, "-vf", vf,
                    "-c:v", "libx264", "-preset", "medium", "-crf", "26",
                    "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", out], check=True)
    # 影片封面（網頁載入前顯示的第一格畫面）
    subprocess.run([ffmpeg(), "-y", "-loglevel", "error", "-ss", "0.5", "-i", out,
                    "-frames:v", "1", "-q:v", "4", out_base + ".poster.jpg"], check=True)
    return out


def process(src, dest_dir, name=None):
    os.makedirs(dest_dir, exist_ok=True)
    ext = os.path.splitext(src)[1].lower()
    out_base = os.path.join(dest_dir, name or safe_name(src, dest_dir))
    if ext in IMAGE_EXT:
        return do_image(src, out_base)
    if ext in VIDEO_EXT:
        return do_video(src, out_base)
    raise ValueError(f"不支援的格式：{src}")


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    folder = sys.argv[1]
    dest = os.path.join(ROOT, "media", folder)
    made = []
    for src in sys.argv[2:]:
        try:
            out = process(src, dest)
            made.append(f"{folder}/{os.path.basename(out)}")
            print("✓", out)
        except Exception as e:
            print("✗", src, e)
    if made:
        print("\n把下面這行貼進 content.js 對應作品的 media: [ ... ] 裡：\n")
        print(", ".join(f'"{m}"' for m in made) + ",")


if __name__ == "__main__":
    main()
