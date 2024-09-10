"use client";
import Title from "@/app/components/title";
import SkillPills from "@/app/components/ui/pills";
import DetailCard from "@/app/components/ui/detail-card";
import { useInView } from "react-intersection-observer";

export function Introduction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      id="about"
      ref={ref}
      className={`transition-opacity duration-700 delay-75 transform ease-in-out ${
        inView ? "opacity-100 " : "opacity-0"
      }`}
    >
      <Title title="About" />
      <div className={`flex justify-center text-sm `}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div>
      <Title title="Skills" />
      <div className="flex gap-4 flex-wrap m-6 justify-center">
        <SkillPills title="Python" />
        <SkillPills title="JavaScript" />
        <SkillPills title="Django" />
        <SkillPills title="Golang" />
        <SkillPills title="Next.js" />
        <SkillPills title="DRF" />
        <SkillPills title="DRF" />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div>
      <Title title="Experience" />
    </div>
  );
}

export function Learnings() {
  return (
    <div>
      <Title title="Learnings" />
    </div>
  );
}

export function Education() {
  return (
    <div className="w-full">
      <Title title="Education" />
      <DetailCard />
      <DetailCard />
    </div>
  );
}

export function Contact() {
  return (
    <div id="contact">
      <Title title="Contact" />
    </div>
  );
}
