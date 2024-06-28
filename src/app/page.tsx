import ActionMenu from "@/components/action-menu";
import InfoSection from "@/components/info-section";

export default function Home() {
  return (
    <main className="w-full flex max-md:flex-col flex-wrap justify-between">
      <InfoSection />
      <ActionMenu />
    </main>
  );
}
