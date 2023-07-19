type HeaderTitleProps = { title: string };

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <h1 className="text-5xl font-sans font-extrabold text-center tracking-widest">
      {title}
    </h1>
  );
}
