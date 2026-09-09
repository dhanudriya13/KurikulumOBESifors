export default function CourseMetadata({
  sks,
  semester,
}: {
  sks: number;
  semester: number;
}) {
  return (
    <p className="text-sm font-medium text-muted">
      {sks} SKS <span aria-hidden="true">·</span> Semester {semester}
    </p>
  );
}
