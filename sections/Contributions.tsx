import GithubContributions from "@/components/GithubContributions";
import { profile } from "@/data/profile";

export default function Contributions() {
  return (
    <section className="-mt-16 pb-12" aria-label="Příspěvky na GitHubu">
      <GithubContributions username={profile.githubUsername} />
    </section>
  );
}
