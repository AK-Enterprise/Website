import Image from "next/image";
import AchievementsLg from "../assets/Achievements-Lg.png";
function Achievements() {
  return (
    <div>
      <Image src={AchievementsLg} alt="Achievements"></Image>
    </div>
  );
}

export default Achievements;
