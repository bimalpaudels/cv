interface Title {
  title?: string | undefined;
}

export default function Title(title: Title) {
  return (
    <div className="flex justify-center text-2xl mb-4">
      <p>{title.title ? title.title : "Title"}</p>
    </div>
  );
}
