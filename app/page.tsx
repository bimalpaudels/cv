import {
  Introduction,
  Skills,
  Education,
  Experience,
  Contact,
} from "@/app/components/cv-components";
import Banner from "@/app/components/banner";

export default function Page() {
  return (
    <div className="h-full">
      <Banner />

      <div className="w-4/6 m-auto">
        <Introduction />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
