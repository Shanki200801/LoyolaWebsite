import Image from "next/image";
import PlaceholderImage from "../../Assets/GitHub-Mark.png";
export default function Item({ slide }) {
  return (
    <div>
      <Image
        className="mx-auto"
        src={PlaceholderImage}
        width={256}
        height={256}
        alt={'example event displaying the GitHub\'s mascot "Octocat"'}
      />
    </div>
  );
}
