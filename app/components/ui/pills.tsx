interface Skills {
  title?: string | undefined;
}

export default function SkillPills(skills: Skills) {
  return (
    <div>
      <button className="rounded-full bg-transparent border border-solid border-stone-50 text-lg h-12 text-center p-2 w-40">
        {skills.title ? skills.title : "Python"}
      </button>
    </div>
  );
}
