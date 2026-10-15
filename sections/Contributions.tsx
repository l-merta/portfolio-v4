import GithubContributions from "@/components/GithubContributions";
import { profile } from "@/data/profile";

export default function Contributions() {
  return (
    <section className="-mt-4 pb-16" aria-label="Příspěvky na GitHubu">
      <GithubContributions username={profile.githubUsername} />
    </section>
  );
}
