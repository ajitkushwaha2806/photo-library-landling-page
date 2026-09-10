import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function Video() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/wP5GhASVhJc"
        thumbnailSrc="/thumbnail.png"
        thumbnailAlt="FoodSnap Platform Demo Video"
      />
    </div>
  );
}
